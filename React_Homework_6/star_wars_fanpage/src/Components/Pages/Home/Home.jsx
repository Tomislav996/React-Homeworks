import React from 'react'

import { useState, useEffect } from "react";

import MovieCard from '../../MovieCard/MovieCard';

import "./Home.css"

const Home = () => {

  const [films, setFilms] = useState([])

  const fetchFilms = async () => {
    const response = await fetch("https://swapi.dev/api/films/")
    const data = await response.json()
    setFilms(data.results)
  }

  useEffect(() => {
    fetchFilms()
  },[])

  return (
    <div>
      {films.length === 0 ? (
        <h1>Fetching Data...</h1>
      ) : (
      <>
        <h1>Movies</h1>
        <br />
        <hr />
        <div className="films-container">
        {films.map((film)=> (
          <MovieCard key={film.episode_id} film={film}/>
        ))}

        </div>
      </>
      )}

    </div>
  )
}

export default Home