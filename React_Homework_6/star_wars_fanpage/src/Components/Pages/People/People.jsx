import React from 'react'

import "./People.css"

import { useState, useEffect } from "react";

import PeopleCard from '../../PeopleCard/PeopleCard';

const People = () => {
  const [people, setPeople] = useState([]);
  const [page, setPage] = useState(1);

  const fetchPeople = async () => {
    const response = await fetch(`https://swapi.dev/api/people/?page=${page}`);
    const data = await response.json();
    setPeople(data.results);
  };

  useEffect(() => {
    fetchPeople();
  }, [page]);

  const handleNextPage = () => {
    setPage (page + 1);
  }

  const handlePreviousPage = () => {
    if( page > 1 ) {

      setPage(page - 1 );
    }
  }

  return (
    <div>
      {people.length === 0 ? (
        <h1>Fetching Data...</h1>
      ) : (
        <>
          <h1>Characters</h1>
          <br />
          <hr />
          <div className="character-container">
            {people.map((person) => (
              <PeopleCard key={person.name} person={person} url={person.url} />
            ))}
          </div>
          <div className='button-container'>
          <button onClick={handlePreviousPage}>Previous</button>
          <button onClick={handleNextPage}>Next</button>
          </div>
        </>
      )}
    </div>
  );
};

export default People;