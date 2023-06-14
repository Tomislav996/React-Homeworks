// CharactersPage.jsx
import React, { Component } from 'react';
import Character from '../Character/Character';
import "./CharactersPage.css"

class CharactersPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: []
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch('https://swapi.dev/api/people');
      const data = await response.json();
      this.setState({ characters: data.results});
    } catch (error) {
      console.log('Error fetching character data:', error);
    }
  }

  render() {
    return (
      <div className='container-main'>
      <h1>Star Wars Characters</h1>
        {this.state.characters.map((character) => (
          <Character key={character.name} character={character} />
        ))}
      </div>
    );
  }
}

export default CharactersPage;