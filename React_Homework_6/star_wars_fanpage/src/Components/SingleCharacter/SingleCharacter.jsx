import { useState, useEffect } from "react"

import { useParams, useNavigate } from "react-router";

import "./SingleCharacter.css"


import React from 'react'

const SingleCharacter = () => {
  const [singleCharacter, setSingleCharacter] = useState(null);
  const [homeworld, setHomeworld] = useState(null);

  const params = useParams();
  const navigate = useNavigate();

  const id = params.id;

  const fetchSingleCharacter = async () => {
    const response = await fetch(`https://swapi.dev/api/people/${id}`);
    const result = await response.json();
    setSingleCharacter(result);

    const homeworldResponse = await fetch(result.homeworld);
    const homeworldResult = await homeworldResponse.json();
    setHomeworld(homeworldResult);
  };

  useEffect(() => {
    fetchSingleCharacter();
  }, []);

  return (
    <div className="single-character-container">
      {(!singleCharacter || !homeworld) ? (
        <h1>Fetching Data...</h1>
      ) : (
        <>
          <h2>{singleCharacter.name}</h2>
          <p>Gender: {singleCharacter.gender}</p>
          <p>Birth Year: {singleCharacter.birth_year}</p>
          <h2>Homeworld:</h2>
          <p>Planet Name: {homeworld.name}</p>
          <p>Diameter: {homeworld.diameter}</p>
          <p>Climate: {homeworld.climate}</p>
          <p>Gravity: {homeworld.gravity}</p>
          <p>Terrain: {homeworld.terrain}</p>
          <p>Population: {homeworld.population}</p>
          <button onClick={() => navigate("/home")}>Go Back</button>
        </>
      )}
    </div>
  );
  
};

export default SingleCharacter