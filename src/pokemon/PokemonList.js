import React, { Component } from 'react';
import PokemonItem from './PokemonItem';
import './PokemonList.css';

class PokemonList extends Component {

  render() {
    const { pokedex } = this.props;
    return (
      <ul className="PokemonList">
        {pokedex.map(pokemon => (
          <PokemonItem key={pokemon._id} pokemon={pokemon}/>
        ))}
      </ul>
    );
  }
}

export default PokemonList;