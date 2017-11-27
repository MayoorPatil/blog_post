import React, { Component } from 'react';
// import logo from './logo.svg';
import Home from './Home.js';
import SignUp from './SignUp.js';
import SignIn from './SignIn.js';
import ChangePassword from './ChangePassword.js';
// import Login from './Login.js';
import ManageProductPage from './ManageProductPage.js';
import { Navbar } from 'react-bootstrap';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
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
                <li><Link to="/sign-up">Sign Up</Link></li>{' '}
                <li><Link to="/sign-in">Sign In</Link></li>{' '}
                <li><Link to="/change-password">Change Password</Link></li>{' '}
                <li><Link to="/product">Manage Product</Link></li>{' '}
              </ul>
            </Navbar.Header>
            </Navbar.Collapse>
          </Navbar>

          <Route exact path="/" component={Home}/>
          <Route exact path="/sign-up" component={SignUp}/>
          <Route exact path="/sign-in" component={
            () => (<SignIn email={this.state.email}
              password={this.state.password}
              emailChange={this.emailChange}
              passwordChange={this.passwordChange}/>
            )}/>
          <Route exact path="/change-password" component={ChangePassword}/>
          <Route exact path="/product" component={ManageProductPage}/>
          {/*<Route exact path="/sign-in" component={Login}/>*/}
        </div>
      </Router>
    )
  }
}

export default App;
// const App = () => (
//   <Router>
//     <div>
//       <Navbar inverse collapseOnSelect>
//         <Navbar.Header>
//           <Navbar.Brand>
//             <Link to="/">Welcome to KArts</Link>
//           </Navbar.Brand>
//           <Navbar.Toggle />
//         </Navbar.Header>
//         <Navbar.Collapse>
//         <Navbar.Header>
//           <ul className="nav navbar-nav">
//             <li><Link to="/sign-up">Sign Up</Link></li>{' '}
//             <li><Link to="/sign-in">Sign In</Link></li>{' '}
//             <li><Link to="/change-password">Change Password</Link></li>{' '}
//           </ul>
//         </Navbar.Header>
//         </Navbar.Collapse>
//       </Navbar>
//
//       <Route exact path="/" component={Home}/>
//       <Route exact path="/sign-up" component={SignUp}/>
//       <Route exact path="/sign-in" component={SignIn}/>
//       <Route exact path="/change-password" component={ChangePassword}/>
//     </div>
//   </Router>
// )
//
// export default App;
