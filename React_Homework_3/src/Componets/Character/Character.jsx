// Character.jsx
import React from 'react';
import "./Character.css"

const Character = ({ character }) => {
  
  return (
    <div className='characters-container'>
      <h3 className='name'>{character.name}</h3>
      <p>Height: {character.height}</p>
      <p>Gender: {character.gender}</p>
      <p>Birth Year: {character.birth_year}</p>
    </div>
  );
};

export default Character;