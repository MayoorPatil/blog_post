import React, { Component } from 'react';
import './App.css';
import SignUp from './SignUp.js';
import SignIn from './SignIn.js';
import ChangePassword from './ChangePassword.js';

class Login extends Component {
  constructor(props) {
    super();
    this.emailChange = this.emailChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.state = {
      email: '',
      password: '',
      password_confirmation: '',
      message: ''
    }
  }

  emailChange (e) {
      this.setState({
        email: e
      })
    }

  passwordChange (e) {
      this.setState({
        password: e
      })
    }

  render() {
    return (
      <div>
        <SignUp />
        <SignIn email={this.state.email}
          password={this.state.password}
          emailChange={this.emailChange}
          passwordChange={this.passwordChange}/>
        <ChangePassword />
      </div>
    );
  }
}

export default Login;
