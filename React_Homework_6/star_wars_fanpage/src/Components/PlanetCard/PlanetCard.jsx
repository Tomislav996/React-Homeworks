import React from 'react';

const PlanetCard = (props) => {
  const { planet } = props;

  return (
    <div className="card">
      <p>
        <b>Planet Name: </b>
        {planet.name}
      </p>
      <p>
        <b>Climate: </b>
        {planet.climate}
      </p>
      <p>
        <b>Terrain: </b>
        {planet.terrain}
      </p>
      <p>
        <b>Gravity: </b>
        {planet.gravity}
      </p>
      <p>
        <b>Diameter: </b>
        {planet.diameter}
      </p>
      <p>
        <b>Population: </b>
        {planet.population}
      </p>
    </div>
  );
};

export default PlanetCard;