import React, { Component } from 'react';
import './PokemonItem.css';

class PokemonItem extends Component {
  render() {

    return (
      <li className="PokemonItem">
        <h3>Squirtle</h3>
        <p className="ability">Ability</p>
        <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png" />
      </li>
    );
  }
}

export default PokemonItem;