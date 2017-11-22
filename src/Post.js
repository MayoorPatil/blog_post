import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Comment from './Comment.js';
import Author from './Author.js';

class Post extends Component {
  constructor(props) {
    super()
    this.state = {
      body: props.body
    }
  }

  changeBody(e) {

    this.setState({
      body: prompt("What should the new body be")
    })
}

handleFormInput(e) {

  this.setState({
    body: e.target.value
  })
}

  render() {
    let allComments = [
      <Comment comment={this.props.comments[0]} />,
      <Comment comment={this.props.comments[1]} />,
      <Comment comment={this.props.comments[2]} />
    ]
    let allAuthors = [
      <Author author={this.props.authors[0]} />,
      <Author author={this.props.authors[1]} />,
      <Author author={this.props.authors[2]} />
    ]
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h3>{this.props.title}</h3>
        <h5>Written by: {allAuthors}</h5>
        <p>{this.state.body}</p>
        <h3>Comments:</h3>
        {allComments}
        <button onClick={(e) => this.changeBody(e)}>Edit Body!</button>
        <input type="text" onChange={(e) => this.handleFormInput(e)} />
      </div>
    );
  }
}

export default Post;
