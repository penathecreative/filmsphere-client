import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useState } from "react"; // Import useState
import "./movie-view.scss";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";

export const MovieView = ({ movies }) => {
  const { movieId } = useParams();
  const [isFavorite, setIsFavorite] = useState(false); // State to track if the movie is a favorite

  // Find the movie with the specified movieId
  const movie = movies.find((b) => b._id === movieId);

  // Function to handle marking/unmarking the movie as favorite
  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite); // Toggle the favorite state
    // You can send a request to your backend here to update the user's favorites list
  };

  return (
    <div className="movie-container">
      <div>
        <img
          className="movie-image"
          src={movie.image}
          alt="movie image"
        />
      </div>
      <div className="movie-details">
        <div className="movie-info">
          <span className="info-label">Title: </span>
          <span className="info-text">{movie.Title || "No Title"}</span>
        </div>
        <div className="movie-info">
          <span className="info-label">Description: </span>
          <span className="info-text">
            {movie.Description || "No Description"}
          </span>
        </div>
        <div className="movie-info">
          <span className="info-label">Genre: </span>
          <span className="info-text">{movie.Genre || "No Genre"}</span>
        </div>
        <div className="movie-info">
          <span className="info-label">Director: </span>
          <span className="info-text">{movie.Director || "No Director"}</span>
        </div>
      </div>
      {/* Button to toggle favorite status */}
      <div className="button-container">
        <Button
          variant={isFavorite ? "danger" : "primary"}
          onClick={handleToggleFavorite}
        >
          {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </Button>
      </div>
      <div className="button-container">
        <Link to={`/`}>
          <button className="back-button">Back</button>
        </Link>
      </div>
    </div>
  );
};

MovieView.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      Title: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired,
      Genre: PropTypes.string.isRequired,
      Director: PropTypes.shape({
        Name: PropTypes.string,
      }),
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};
