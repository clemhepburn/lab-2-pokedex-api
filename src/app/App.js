import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Paging from './Paging';
import Search from './Search';
import Sort from './Sort';
import PokemonList from '../pokemon/PokemonList';
import PokemonItem from '../pokemon/PokemonItem';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
  
        My React App...
        <img src="acl-logo.png" className="temp-images" alt="acl logo" />
      
      </div>
    );
  }

}

export default App;
