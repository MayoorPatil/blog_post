import React, { Component } from 'react';
import './App.css';

class Comment extends Component {
  render() {
    return (
      <div className="App">
        <p>{this.props.comment}</p>
      </div>
    );
  }
}

export default Comment;
