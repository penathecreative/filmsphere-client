import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./movie-card.scss";

export const MovieCard = ({ movie }) => {
  return (
    <Card>
      <Card.Img
        variant="top"
        src={movie.image}
      />
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Text>{movie.Director}</Card.Text>
        <Link
          to={`/movies/${encodeURIComponent(movie._id)}`}
          style={{ textDecoration: "none" }}
        >
          <Button variant="link">See more</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    Director: PropTypes.shape({
      Name: PropTypes.string,
    }).isRequired,
    ImagePath: PropTypes.string.isRequired, // Use ImagePath for the image URL
  }).isRequired,
};

export default MovieCard;
