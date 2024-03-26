import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./movie-view.scss";

import PropTypes from "prop-types";

export const MovieView = ({ movies }) => {
  const { movieId } = useParams();

  const movie = movies.find((b) => b._id === movieId);
  return (
    <div>
      {/*<div>
        <img
          src={movie.ImagePath}
          alt="movie image"
          style={{ width: "300px", height: "450px" }}
        />
  </div>*/}
      <div>
        <span>Title: </span>
        <span>{movie.Title || "No Title"}</span>
      </div>
      <div>
        <span>Description: </span>
        <span>{movie.Description || "No Description"}</span>
      </div>
      <div>
        <span>Genre: </span>
        <span>{movie.Genre || "No Genre"}</span>
      </div>
      <div>
        <span>Director: </span>
        <span>{movie.Director || "No Director"}</span>
      </div>
      <Link to={`/`}>
        <button className="back-button">Back</button>
      </Link>
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
      Director: PropTypes.arrayOf(
        PropTypes.shape({
          Name: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
};
