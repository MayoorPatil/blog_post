import React, { Component } from 'react';
import LoginForm from './LoginForm.js';
import $ from 'jquery';
const store = require('../store');
const apiOrigin = require('../config');

class ManageLogin extends Component {
  constructor(props) {
    super(props);
    this.setLoginState = this.setLoginState.bind(this);
    this.onSignIn = this.onSignIn.bind(this);
    this.navToSignUp = this.navToSignUp.bind(this);
    this.state = {
      credentials: {
        email: '',
        password: '',
        password_confirmation: ''
      },
      message: '',
      errors: {},
      user: {},
      isLoggedIn: false
    }
  }

  setLoginState (e) {
    var field = e.target.name;
    var value = e.target.value;
    var credentials = this.state.credentials
    credentials[field] = value
      this.setState({
        credentials: credentials
      })
    }

  signInFormIsValid () {
    var formIsValid = true;
    this.state.errors = {} // clear any previous errors
    if (this.state.credentials.email.length < 3) {
      this.state.errors.email = 'Email must be at least 3 characters';
      formIsValid = false;
    }
    if (this.state.credentials.password.length < 3) {
      this.state.errors.password = 'Password must be at least 3 characters';
      formIsValid = false;
    }
    this.setState({errors: this.state.errors});
    return formIsValid;
  }

    onSignIn(e) {
      e.preventDefault();
      if (!this.signInFormIsValid()) {
        return;
      }
      let data = {};
      data['credentials'] = this.state.credentials
      $.ajax({
      url: apiOrigin() + '/sign-in',
      method: 'POST',
      data: data,
      success: (response) => {
        this.setState({user: response.user});
        store.user = response.user
        this.props.history.push('/blog_post');
        $('#sign-in-link').addClass('hidden');
        $('#sign-out-link, #change-pwd-link').removeClass('hidden');
      },
      error: (error) => {
        this.setState({
          message: 'Sign in failed! Credentials do not match. Please try again'
        })
        console.error(error)
      }
    })
  }

  navToSignUp (e) {
    this.props.history.push('/sign-up')
  }

  render() {
    return (
      <div>
        <LoginForm
        credentials={this.state.credentials}
        onChange={this.setLoginState}
        onSignIn={this.onSignIn}
        navToSignUp={this.navToSignUp}
        errors={this.state.errors}
        message={this.state.message}/>
      </div>
    );
  }
}

export default ManageLogin;
