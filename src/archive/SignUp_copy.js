import React, { Component } from 'react';
import './App.css';
// import { FormGroup, Col, FormControl, ControlLabel, Button } from 'react-bootstrap';

class SignUp extends Component {
  constructor(props) {
    super();
    this.onSignUp = this.onSignUp.bind(this);
    this.state = {
      email: '',
      password: '',
      password_confirmation: '',
      message: ''
    }
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

  const request = new Request('http://localhost:4741/sign-up', options);

  fetch(request)
    .then((response) => {
      return response.json()
    }).then((json) => {
      const key = Object.keys(json)[0];
        if (key === 'user') {
          this.setState({
            message: 'Sign up successful! Please sign-in'
          })
        } else {
          this.setState({
            message: key + ' : ' + json[key]
          })
        }
    }).catch((ex) => {
      console.error('An error occured while parsing!', ex)
    })
}

  render() {
    const { email, password, password_confirmation } = this.state;
    const isEnabled =
      email.length > 0 &&
      password.length > 0 &&
      password_confirmation.length > 0;
    return (
      <div className="container">
        <form>
          <div className="form-group row">
            <div className="col-xs-4">
              <label>Email</label>
              <input
              className="form-control"
              ref="email"
              type="text"
              placeholder="Email here"
              value={this.state.email}
              onChange={(e) => this.emailChange(e)}
              />
            </div><br /><br /><br /><br />
            <div className="col-xs-4">
              <label>Password</label>
              <input
              className="form-control"
              ref="password"
              type="password"
              placeholder="Password here"
              value={this.state.password}
              onChange={(e) => this.passwordChange(e)}
              />
            </div><br /><br /><br /><br />
            <div className="col-xs-4">
              <label>Password Confirmation</label>
              <input
              className="form-control"
              ref="password_confirmation"
              type="password"
              placeholder="Password Confirmation here"
              value={this.state.password_confirmation}
              onChange={(e) => this.passwordConfirmationChange(e)}
              />
            </div><br /><br /><br /><br />
          </div>
        </form>
        <button disabled={!isEnabled} className="btn btn-success" onClick={(e) => this.onSignUp(e)}>Sign Up</button>
        <br /><br /><p>{this.state.message}</p>
    </div>
    );
  }
}

export default SignUp;
