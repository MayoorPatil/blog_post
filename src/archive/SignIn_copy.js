import React, { Component } from 'react';
import './App.css';

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
    const { email, password } = this.props;
    const isEnabled =
      email.length > 0 &&
      password.length > 0;
    return (
      <div className="container">
      <form>
        <div className="form-group row">
          <div className="col-xs-4">
            <label>Email</label>
            <input
            key="1"
            className="form-control"
            ref="email"
            type="text"
            placeholder="Email here"
            value={this.props.email}
            onChange={(e) => this.props.emailChange(e.target.value)}
            />
          </div><br /><br /><br /><br />
          <div className="col-xs-4">
            <label>Password</label>
            <input
            key="2"
            className="form-control"
            ref="password"
            type="password"
            placeholder="Password here"
            value={this.props.password}
            onChange={(e) => this.props.passwordChange(e.target.value)}
            />
          </div><br /><br /><br /><br />
        </div>
      </form>
        <button disabled={!isEnabled} className="btn btn-success" onClick={(e) => this.onSignIn(e)}>Sign In</button>
        <br /><br /><p>{this.props.message}</p>
      </div>
    );
  }
}

export default SignIn;
