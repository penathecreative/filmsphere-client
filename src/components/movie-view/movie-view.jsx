import { useParams } from "react-router";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

export const MovieView = ({ movies }) => {
  const { movieId } = useParams();

  const movie = movies.find((m) => m._id === movieId);
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
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired,
    }),
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired,
    }),
    Featured: PropTypes.bool.isRequired,
  }).isRequired,
};
