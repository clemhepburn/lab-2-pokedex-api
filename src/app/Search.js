import React, { Component } from 'react';
import Sort from './Sort';
import './Search.css';

class Search extends Component {
  state = {
    nameFilter: '',
    sortField: '',
    typeFilter: ''
  }

  handleNameChange = ({ target }) => {
    this.setState({ nameFilter: target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSearch(this.state);
  }

  render() {
    const { nameFilter } = this.state;

    return (
      <form className="Search" onSubmit={this.handleSubmit}>
        <input name="nameFilter" value={nameFilter} onChange={this.handleNameChange} />
        <Sort />
        <button>🍓</button>
      </form>
    );
  }

}

export default Search;