import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const ProfileFavoritesView = () => {
  const user = localStorage.getItem("user");
  const token = localStorage.getItem("token");
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Fetch the user's favorite movies
        const favoriteMoviesResponse = await fetch(
          `https://filmsphere-5e594b2ffc50.herokuapp.com/users/${user.Username}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!favoriteMoviesResponse.ok) {
          throw new Error("Failed to fetch favorite movies");
        }
        const favoriteMoviesData = await favoriteMoviesResponse.json();
        setFavoriteMovies(favoriteMoviesData?.FavoriteMovies || []);

        // Fetch all movies
        const moviesResponse = await fetch(
          "https://filmsphere-5e594b2ffc50.herokuapp.com/movies",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        if (!moviesResponse.ok) {
          throw new Error("Failed to fetch movies");
        }
        const moviesData = await moviesResponse.json();
        const moviesFromApi = moviesData.map((movie) => ({
          _id: movie._id,
          Title: movie.Title,
          Description: movie.Description,
          Genre: {
            Name: movie.Genre.Name,
          },
          Director: {
            Name: movie.Director.Name,
          },
        }));
        setMovies(moviesFromApi);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchUserData();
  }, [user.Username, token]);

  const handleToggle = async (movieId) => {
    try {
      const isFavorite = favoriteMovies.includes(movieId);
      const method = isFavorite ? "DELETE" : "POST";
      const url = `https://filmsphere-5e594b2ffc50.herokuapp.com/users/${user.Username}/movies/${movieId}`;

      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to ${isFavorite ? "remove" : "add"} favorite`);
      }

      const updatedUserData = await response.json();
      setFavoriteMovies(updatedUserData.FavoriteMovies || []);
    } catch (error) {
      console.error(
        `Error toggling favorite for movie with ID ${movieId}:`,
        error
      );
    }
  };

  const favoriteMoviesToShow = movies.filter((movie) =>
    favoriteMovies.includes(movie._id)
  );

  return (
    <div>
      <h2>Favorite Movies</h2>
      {favoriteMoviesToShow.length === 0 ? (
        <p>No favorite movies yet.</p>
      ) : (
        <div>
          {favoriteMoviesToShow.map((movie) => (
            <Card
              key={movie._id}
              style={{ width: "18rem", marginBottom: "15px" }}
            >
              <Card.Body>
                <Card.Title>{movie.Title}</Card.Title>
                <Card.Text>{movie.Description}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => handleToggle(movie._id)}
                >
                  Remove from Favorites
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

ProfileFavoritesView.propTypes = {
  user: PropTypes.shape({
    Username: PropTypes.string.isRequired,
  }).isRequired,
  token: PropTypes.string.isRequired,
};

export default ProfileFavoritesView;
