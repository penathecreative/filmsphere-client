import { useState } from "react";
import { MovieView } from "../movie-view/movie-view";
import { MovieCard } from "../movie-card/movie-card";

export const MainView = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      Title: "Gladiator",
      Description:
        "A betrayed Roman general seeks justice for his family and revenge against the corrupt emperor who murdered his family and sent him into slavery.",
      Genre: {
        Name: "Action",
        Description:
          "Action films involve a sequence of events that usually include violence, extended fighting, physical feats, and frantic chases.",
      },
      Director: {
        Name: "Ridley Scott",
        Bio: "Sir Ridley Scott is an English film director and producer.",
        Birth: "1937",
        Death: null,
      },
      ImagePath:
        "https://media.themoviedb.org/t/p/original/9xLIugjmparUuJBuoncNh4jEEaI.jpg",
      Featured: true,
    },

    {
      id: 2,
      Title: "Silence of the Lambs",
      Description:
        "A young FBI cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer.",
      Genre: {
        Name: "Thriller",
        Description:
          "Thriller film, also known as suspense film or suspense thriller, is a broad film genre that involves excitement and suspense in the audience.",
      },
      Director: {
        Name: "Jonathan Demme",
        Bio: "Robert Jonathan Demme was an American director, producer, and screenwriter.",
        Birth: "1944",
        Death: "2017",
      },
      ImagePath:
        "https://image.tmdb.org/t/p/w1280/exSmCOgUM2iXmEpw8AHcQITWDZt.jpg",
      Featured: true,
    },
    {
      Title: "Inception",
      Description:
        "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
      Genre: {
        Name: "Science Fiction",
        Description:
          "Science fiction films explore imaginative and futuristic concepts, often involving space exploration, time travel, and advanced technologies.",
      },
      Director: {
        Name: "Christopher Nolan",
        Bio: "Christopher Nolan is a British-American film director, producer, and screenwriter.",
        Birth: "1970",
        Death: null,
      },
      ImagePath:
        "https://image.tmdb.org/t/p/w1280/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
      Featured: true,
    },
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

  if (selectedMovie) {
    return (
      <MovieView
        movie={selectedMovie}
        onBackClick={() => setSelectedMovie(null)}
      />
    );
  }
  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
    </div>
  );
};
