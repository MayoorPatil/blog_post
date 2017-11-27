import React, { Component } from 'react';
import Home from './Home.js';
import SignUp from './components/SignUp.js';
import SignOut from './components/SignOut.js';
import ChangePassword from './components/ChangePassword.js';
import ManageLogin from './components/ManageLogin.js';
import { Navbar } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/">Welcome to KArts</Link>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
            <Navbar.Header>
              <ul className="nav navbar-nav">
                <li><Link to="/sign-in" id="sign-in-link">Sign In / Register</Link></li>
                <li><Link to="/change-password" id="change-pwd-link" className="hidden">Change Password</Link></li>
              </ul>
            </Navbar.Header>
              <ul className="nav navbar-nav navbar-right">
                <li><Link to="/sign-out" id="sign-out-link" className="hidden">Sign Out</Link></li>
              </ul>
            </Navbar.Collapse>
          </Navbar>

          <Route exact path="/" component={Home}/>
          <Route exact path="/sign-up" component={SignUp}/>
          <Route exact path="/change-password" component={ChangePassword}/>
          <Route exact path="/sign-in" component={ManageLogin}/>
          <Route exact path="/sign-out" component={SignOut}/>
        </div>
      </Router>
    )
  }
}

export default App;
