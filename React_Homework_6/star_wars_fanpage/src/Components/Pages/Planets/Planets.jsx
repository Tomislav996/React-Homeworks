import React from 'react';
import { useState, useEffect } from 'react';
import PlanetCard from '../../PlanetCard/PlanetCard';
import './Planets.css';

const Planets = () => {
  const [planets, setPlanets] = useState([]);

  const fetchPlanets = async () => {
    const response = await fetch('https://swapi.dev/api/planets');
    const data = await response.json();
    setPlanets(data.results);
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  return (
    <div>
      {planets.length === 0 ? (
        <h1>Fetching Data...</h1>
      ) : (
        <>
          <h1>Planets</h1>
          <br />
          <hr />
          <div className="planets-container">
            {planets.map((planet) => (
              <PlanetCard key={planet.name} planet={planet} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Planets;