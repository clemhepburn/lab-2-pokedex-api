import React, { Component } from 'react';
import './Sort.css';

class Sort extends Component {
  render() {
    return (
      <select className="Sort">
        <option>Sort by...</option>
        <option>Name</option>
        <option>Ability</option>
        <option>Type</option>
      </select>

    );
  }
}

export default Sort;