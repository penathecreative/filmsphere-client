import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./movie-view.scss";
import { Button, Col, Row } from "react-bootstrap"; // Import Col and Row from react-bootstrap

import PropTypes from "prop-types";

export const MovieView = ({ movies }) => {
  const { movieId } = useParams();

  // Find the movie with the specified movieId

  const movie = movies.find((b) => b._id === movieId);
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
