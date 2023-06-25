
import React from 'react'

import { useNavigate } from "react-router";



const PeopleCard = (props) => {

    const { person, url } = props;
    const navigate = useNavigate()

    return (
        <div className='card' key={person.name}>
        <p><b>Character Name : </b>{person.name}</p>
        <p><b>Height: </b>{person.height}</p>
        <p> <b>Gender: </b>{person.gender}</p>
        <p><b>Birth Year: </b>{person.birth_year}</p>

        <button onClick={() => navigate(`/character/${url.split('/')[5]}`)}>More Info</button>

        </div>
      );
}

export default PeopleCard

