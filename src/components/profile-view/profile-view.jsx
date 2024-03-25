import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

const ProfileView = () => {
  const [user, setUser] = useState(null);
  const [newUserData, setNewUserData] = useState({
    Username: "",
    Password: "",
    Email: "",
    Birthday: "",
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          "https://filmsphere-5e594b2ffc50.herokuapp.com/users"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    setNewUserData({ ...newUserData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://filmsphere-5e594b2ffc50.herokuapp.com/users",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUserData),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to update user data");
      }
      console.log("User data updated successfully");
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>User Profile</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formUsername">
          <Form.Label>Username:</Form.Label>
          <Form.Control
            type="text"
            name="Username"
            value={newUserData.Username || user.Username}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            name="Password"
            value={newUserData.Password}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            name="Email"
            value={newUserData.Email || user.Email}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formDOB">
          <Form.Label>Date of Birth:</Form.Label>
          <Form.Control
            type="date"
            name="Birthday"
            value={newUserData.Birthday || user.Birthday}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
        >
          Update Profile
        </Button>
      </Form>
    </div>
  );
};

export default ProfileView;
