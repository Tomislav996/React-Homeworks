
import "./MovieCard.css";


import React from 'react'

const MovieCard = (props) => {
    const { film } = props;

  
    return (
      <div className="card">
        <p><b>Movie Title: </b>{film.title}</p>
       <p><b>Description: </b>{film.opening_crawl}</p>
       <p> <b>Director: </b>{film.director}</p>
       <p><b>Producer: </b>{film.producer}</p>
        <p><b>Release year: </b>{film.release_date}</p>
      </div>
    );
}

export default MovieCard




