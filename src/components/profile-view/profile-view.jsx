import React, { useState, useEffect } from "react";
import FavoriteMovies from "../favorite-movies/favorite-movies";
import { Form, Button, Modal } from "react-bootstrap";
import "./profile-view.scss"; // Import your SCSS file

const ProfileView = () => {
  const [user, setUser] = useState(null);
  const [newUserData, setNewUserData] = useState({
    Username: "",
    Password: "",
    Email: "",
    Birthday: "",
  });
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          "https://movie-api-qlfb.onrender.com/users",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          },
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
        `https://movie-api-qlfb.onrender.com/users/${user.Username}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(newUserData),
        },
      );
      if (!response.ok) {
        throw new Error("Failed to update user data");
      }
      console.log("User data updated successfully");
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  const handleDeregister = () => {
    setShowConfirmation(true);
  };

  const confirmDeregister = async () => {
    try {
      const response = await fetch(
        `https://movie-api-qlfb.onrender.com/users/${user.Username}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );
      if (!response.ok) {
        throw new Error("Failed to deregister user");
      }
      console.log("User deregistered successfully");
      // Redirect to login page or perform any other action after deregistration
    } catch (error) {
      console.error("Error deregistering user:", error);
    } finally {
      setShowConfirmation(false);
    }
  };

  const handleCloseConfirmation = () => {
    setShowConfirmation(false);
  };

  return (
    <div>
      <h2 className="profile-title">User Profile</h2>
      <Form
        className="profile-form"
        onSubmit={handleSubmit}
      >
        {/* Form fields */}
        <Button
          className="profile-button"
          variant="primary"
          type="submit"
        >
          Update Profile
        </Button>
      </Form>
      <Button
        className="profile-button"
        variant="danger"
        onClick={handleDeregister}
      >
        Deregister
      </Button>
      {user && (
        <FavoriteMovies
          user={user}
          movies={user.Movies}
        />
      )}
      <Modal
        className="confirmation-modal"
        show={showConfirmation}
        onHide={handleCloseConfirmation}
      >
        <Modal.Header closeButton>
          <Modal.Title className="confirmation-modal-title">
            Confirm Deregistration
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="confirmation-modal-body">
          Are you sure you want to delete your account?
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="profile-button"
            variant="secondary"
            onClick={handleCloseConfirmation}
          >
            Cancel
          </Button>
          <Button
            className="profile-button"
            variant="danger"
            onClick={confirmDeregister}
          >
            Delete Account
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ProfileView;
