import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./navigation-bar.scss";

export const NavigationBar = ({
  user,
  onLoggedOut,
  setFilteredMovies,
  movies,
}) => {
  // Make sure to receive the movies prop here
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    filterMovies(query); // Remove the second argument here
  };

  const filterMovies = (query) => {
    console.log("Query:", query); // Log the search query

    if (!query) {
      setFilteredMovies([]); // Clear filtered movies when query is empty
      return;
    }

    const filtered = movies.filter((movie) =>
      movie.Title.toLowerCase().includes(query.toLowerCase())
    );
    console.log("Filtered Movies:", filtered); // Log the filtered movies
    setFilteredMovies(filtered);
  };

  return (
    <Navbar
      bg="primary"
      variant="dark"
      expand="lg"
      className="NavbarStyle"
    >
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          className="navbar-text"
        >
          Filmsphere
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {!user ? (
              <>
                <Nav.Link
                  as={Link}
                  to="/login"
                >
                  Login
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/signup"
                >
                  Signup
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link
                  as={Link}
                  to="/"
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/profile"
                >
                  Profile
                </Nav.Link>
                <Nav.Link onClick={onLoggedOut}>Logout</Nav.Link>
              </>
            )}
          </Nav>
          {user && (
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={searchQuery}
                onChange={handleInputChange}
              />
              <Button variant="outline-light">Search</Button>
            </Form>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
