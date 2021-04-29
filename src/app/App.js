import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Paging from './Paging';
import Search from './Search';
import PokemonList from '../pokemon/PokemonList';
import request from 'superagent';
import './App.css';

const POKEMON_API_URL = 'https://pokedex-alchemy.herokuapp.com/api/pokedex'; 

class App extends Component {
  state = {
    pokemon: [],
    search: ''
  }

  async fetchPokedex() {
    const { search, pokemon } = this.state;
    const response = await request.get(POKEMON_API_URL).query({ pokemon: search });
    this.setState({ pokemon: response.body.results });
  }

  handleSearch = ({ nameFilter }) => {
    this.setState({ search: nameFilter });
    this.fetchPokedex();
  }

  async componentDidMount() {
    this.fetchPokedex();
  }

  render() {
    const { pokemon } = this.state;
    
    return (
      <div className="App">

        <Header />

        <section className="search-options">
          <Search handleSearch={this.handleSearch} />
          <Paging />
        </section>

        <main>
          <PokemonList pokedex={pokemon}/>
        </main>

        <Footer />
      
      </div>
    );
  }

}

export default App;
