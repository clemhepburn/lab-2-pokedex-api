import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Paging from './Paging';
import Search from './Search';
import PokemonList from '../pokemon/PokemonList';
import './App.css';

class App extends Component {
  state = {
    pokemon: []
  }

  render() {
    const { pokemon } = this.state;
    return (
      <div className="App">

        <Header />

        <section className="search-options">
          <Search />
          <Paging />
        </section>

        <main>
          <PokemonList pokemon={pokemon}/>
        </main>

        <Footer />
      
      </div>
    );
  }

}

export default App;
