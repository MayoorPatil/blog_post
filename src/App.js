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
                <Link to="/blog_post">Welcome to KArts</Link>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
            <Navbar.Header>
              <ul className="nav navbar-nav">
                <li><Link to="/blog_post/sign-in" id="sign-in-link">Sign In / Register</Link></li>
                <li><Link to="/blog_post/change-password" id="change-pwd-link" className="hidden">Change Password</Link></li>
              </ul>
            </Navbar.Header>
              <ul className="nav navbar-nav navbar-right">
                <li><Link to="/blog_post/sign-out" id="sign-out-link" className="hidden">Sign Out</Link></li>
              </ul>
            </Navbar.Collapse>
          </Navbar>

          <Route exact path="/blog_post" component={Home}/>
          <Route exact path="/blog_post/sign-up" component={SignUp}/>
          <Route exact path="/blog_post/change-password" component={ChangePassword}/>
          <Route exact path="/blog_post/sign-in" component={ManageLogin}/>
          <Route exact path="/blog_post/sign-out" component={SignOut}/>
        </div>
      </Router>
    )
  }
}

export default App;
