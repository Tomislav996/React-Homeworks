import { useContext } from "react";
import { MoviesContext } from "../../Context/MovieContext";
import { MovieCard } from "../MovieCard/MovieCard";
import { AddMovieForm } from "../AddMovieForm/AddMovieForm";

import { MovieCardControlls } from "../MovieCardControlls/MovieCardControlls";


export const MoviesList = () => {
    const { movies  } = useContext(MoviesContext);
  
    return (
      <div>  
        <AddMovieForm />
  
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            genre={movie.genre}
            id={movie.id}
          />
        ))}
      </div>
    );
  };