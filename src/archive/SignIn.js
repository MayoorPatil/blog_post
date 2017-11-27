import React, { Component } from 'react';
import './App.css';
import TextInput from './TextInput.js';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.onSignIn = this.onSignIn.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

handleChange (e) {
  this.props.emailChange(e)
}

onSignIn(e) {
  e.preventDefault();
  let data = {};
  data['credentials'] = {};
  data.credentials['email'] = this.props.email;
  data.credentials['password'] = this.props.password;

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
      console.log('what is response???', response)
      if (response.status === 200) {
        return response.json()
      } else {
        this.setState({
          message: 'Sign in failed! Credentials do not match. Please try again'
        })
      }
    }).then((json) => {
      this.setState({
        user: json.user
      })
      this.setState({
        message: 'Sign in Successful! Enjoy shopping!'
      })
    }).catch((ex) => {
      console.error('An error occured while parsing!', ex)
    })
}

  render() {
    return (
      <div className="container">
      <form>
        <TextInput
        type="text"
        name="email"
        label="Email"
        value={this.props.credentials.email}
        onChange={this.props.onChange}/>

        <TextInput
        type="password"
        name="password"
        label="Password"
        value={this.props.credentials.password}
        onChange={this.props.onChange}/>

        <button className="btn btn-success" onClick={(e) => this.props.onSignIn(e)}>Sign In</button>
      </form>
      <br /><br /><p>{this.props.message}</p>
      </div>
    );
  }
}

export default SignIn;
