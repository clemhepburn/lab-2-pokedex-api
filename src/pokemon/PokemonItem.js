import React, { Component } from 'react';
import './PokemonItem.css';

class PokemonItem extends Component {
  render() {
    const { pokemon } = this.props;

    return (
      <li className="PokemonItem">
        <h3>{pokemon.pokemon}</h3>
        <p className={'ability'}>{pokemon.ability_1}</p>
        <img src={pokemon.url_image} alt={pokemon.pokemon} />
      </li>
    );
  }
}

export default PokemonItem;