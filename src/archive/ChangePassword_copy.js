import React, { Component } from 'react';
import './App.css';
const store = require('./store');

class ChangePassword extends Component {
  constructor(props) {
    super();
    this.onChangePassword = this.onChangePassword.bind(this);
    this.state = {
      password: '',
      password_confirmation: '',
      message: '',
      user: ''
    }
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

onChangePassword(e) {
  e.preventDefault();
  let data = {};
  data['credentials'] = {};
  data.credentials['password'] = this.state.password;
  data.credentials['password_confirmation'] = this.state.password_confirmation;

  const headers = new Headers();
  headers.append('Content-Type', 'application/json');

  const options = {
    method: "PATCH",
    headers: headers,
    body: JSON.stringify(data)
  };

  const request = new Request('http://localhost:4741/change-password/' + store.user.id, options);

  fetch(request)
    .then((response) => {
      console.log('what is response???', response)
      if (response.status === 200) {
        return response.json()
      } else {
        this.setState({
          message: 'Change password failed! Credentials do not match. Please try again'
        })
      }
    }).then((json) => {
      this.setState({
        user: json.user
      })
      this.setState({
        message: 'Password changed successfully! Enjoy shopping!'
      })
    }).catch((ex) => {
      console.error('An error occured while parsing!', ex)
    })
}

  render() {
    const { password, password_confirmation } = this.state;
    const isEnabled =
      password.length > 0 &&
      password_confirmation.length > 0;
    return (
      <div className="container">
        <form>
          <div className="form-group row">
            <div className="col-xs-4">
              <label>New Password</label>
              <input
              className="form-control"
              ref="password"
              type="password"
              placeholder="New password here"
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
              placeholder="Password conformation here"
              value={this.state.password_confirmation}
              onChange={(e) => this.passwordConfirmationChange(e)}
              />
            </div><br /><br /><br /><br />
          </div>
        </form>
        <button disabled={!isEnabled} className="btn btn-success" onClick={(e) => this.onChangePassword(e)}>Change Password</button>
        <br /><br /><p>{this.state.message}</p>
      </div>
    );
  }
}

export default ChangePassword;
