import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
// import Comment from './Comment.js';
// import Author from './Author.js';

class Post extends Component {
  constructor(props) {
    super();
    this.onSignUp = this.onSignUp.bind(this);
    this.state = {
      body: props.body,
      api: 'API Response',
      email: '',
      password: '',
      password_confirmation: ''
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

emailChange (e) {
    this.setState({
      email: e.target.value
    })
  }

passwordChange (e) {
    this.setState({
      password: e.target.value
    })
  }

passwordConfirmationChange (e) {
    this.setState({
      password_confirmation: e.target.value
    })
  }

getAPIResponse() {
    // save a reference to `this` because the value of `this` will change
    // inside the different callback functions.
    var base = this;

    // fetch a poem
    // let poemApi = 'http://ShakeItSpeare.com/api/poem';
    let poemApi = 'http://localhost:4741/examples';

    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');

    const options = {
      method: "GET",
      mode: 'no-cors'
    };

    const request = new Request(poemApi, options);

    fetch(request)
      .then((response) => {
        console.log('what is the examples response???', response)
        return response.json()
      }).then((json) => {
          console.log('heres the api response...', json)
          base.setState({ api: json.examples.length });
      }).catch((ex) => {
        console.log('An error occured while parsing!', ex)
      })
  }

  onNewSignUp(e) {
    e.preventDefault();
    let data = {};
    data['credentials'] = {};
    data.credentials['email'] = this.state.email;
    data.credentials['password'] = this.state.password;
    data.credentials['password_confirmation'] = this.state.password_confirmation;
    $.ajax({
    url: 'http://localhost:4741/sign-up',
    method: 'POST',
    data: data,
    success: (response) => { console.log('it worked!', response); }
  })
  }

onSignUp(e) {
  e.preventDefault();
  let data = {};
  data['credentials'] = {};
  data.credentials['email'] = this.state.email;
  data.credentials['password'] = this.state.password;
  data.credentials['password_confirmation'] = this.state.password_confirmation;

  const headers = new Headers();
  headers.append('Content-Type', 'application/json');

  const options = {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data)
  };
  console.log('data is', data)
  console.log('what are refs???', this.refs);

  const request = new Request('http://localhost:4741/sign-up', options);

  fetch(request)
    .then((response) => {
      return response.json()
    }).then((json) => {
        console.log('heres the api response...', json)
    }).catch((ex) => {
      console.log('An error occured while parsing!', ex)
    })
}

onSignIn(e) {
  e.preventDefault();
  let data = {};
  data['credentials'] = {};
  data.credentials['email'] = this.state.email;
  data.credentials['password'] = this.state.password;

  const headers = new Headers();
  headers.append('Content-Type', 'application/json');

  const options = {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data)
  };

  const request = new Request('http://localhost:4741/sign-in', options);

  fetch(request)
    .then((response) => {
      return response.json()
    }).then((json) => {
        console.log('heres the api response...', json)
    }).catch((ex) => {
      console.log('An error occured while parsing!', ex)
    })
}

  render() {
    {/*let allComments = [
      <Comment comment={this.props.comments[0]} />,
      <Comment comment={this.props.comments[1]} />,
      <Comment comment={this.props.comments[2]} />
    ]
    let allAuthors = [
      <Author author={this.props.authors[0]} />,
      <Author author={this.props.authors[1]} />,
      <Author author={this.props.authors[2]} />
    ]*/}
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {/*}<h3>{this.props.title}</h3>
        <h5>Written by: {allAuthors}</h5>*/}
        <p>{this.state.body}</p>
        {/*}<h3>Comments:</h3>
        {allComments}*/}
        <button onClick={(e) => this.changeBody(e)}>Edit Body!</button>
        <input type="text" onChange={(e) => this.handleFormInput(e)} />
        <h5>Get API Response</h5>
        <button onClick={(e) => this.getAPIResponse(e)}>Click me!</button>
        <p>{this.state.api}</p>
        <form id="sign-up">
          <input type="email"
           ref="credentials[email]"
           placeholder="Email here"
           value={this.state.email}
           onChange={(e) => this.emailChange(e)}
          />
          <input type="password"
           ref="credentials[password]"
           placeholder="Password here"
           value={this.state.password}
           onChange={(e) => this.passwordChange(e)}
          />
          <input type="password"
           ref="credentials[password_confirmation]"
           placeholder="Password Confirmation here"
           value={this.state.password_confirmation}
           onChange={(e) => this.passwordConfirmationChange(e)}
          />
          <button onClick={(e) => this.onSignUp(e)}>Sign Up!</button>
        </form>
        <form id="sign-in">
          <input type="email"
           ref="credentials[email]"
           placeholder="Email here"
           value={this.state.email}
           onChange={(e) => this.emailChange(e)}
          />
          <input type="password"
           ref="credentials[password]"
           placeholder="Password here"
           value={this.state.password}
           onChange={(e) => this.passwordChange(e)}
          />
          <button onClick={(e) => this.onSignIn(e)}>Sign In!</button>
        </form>
      </div>
    );
  }
}

export default Post;
