import React, { Component } from 'react';
import './App.css';

class Author extends Component {
  render() {
    return (
      <div className="App">
        <p>{this.props.author}</p>
      </div>
    );
  }
}

export default Author;
