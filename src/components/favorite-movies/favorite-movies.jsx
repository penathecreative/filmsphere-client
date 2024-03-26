import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const ProfileFavoritesView = ({ user, token }) => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    // Fetch user's favorite movies
    const fetchFavoriteMovies = async () => {
      try {
        const response = await fetch(
          `https://filmsphere-5e594b2ffc50.herokuapp.com/users/${user.Username}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch favorite movies");
        }
        const userData = await response.json();
        setFavoriteMovies(userData.FavoriteMovies || []);
      } catch (error) {
        console.error("Error fetching favorite movies:", error);
      }
    };

    fetchFavoriteMovies();
  }, [user.Username, token]);

  const handleToggleFavorite = async (movieId) => {
    try {
      const method = favoriteMovies.includes(movieId) ? "DELETE" : "POST";
      const response = await fetch(
        `https://filmsphere-5e594b2ffc50.herokuapp.com/users/${user.Username}/movies/${movieId}`,
        {
          method: method,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error(
          `Failed to ${method === "DELETE" ? "remove" : "add"} favorite movie`
        );
      }
      const updatedUserData = await response.json();
      setFavoriteMovies(updatedUserData.FavoriteMovies || []);
    } catch (error) {
      console.error("Error toggling favorite movie:", error);
    }
  };

  return (
    <div>
      <h2>Favorite Movies</h2>
      {favoriteMovies.length === 0 ? (
        <p>No favorite movies yet.</p>
      ) : (
        <div>
          {favoriteMovies.map((movieId) => (
            <MovieCard
              key={movieId}
              movieId={movieId}
              token={token}
              onToggleFavorite={handleToggleFavorite}
            />
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
