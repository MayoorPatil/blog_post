import React, { Component } from 'react';
import './App.css';

// const TestForm = ({key, label, ...props}) {
//   return (
//     <div>
//       <label for={key}>{label}</label>
//       <input key={key} ...props />
//     </div>
//   )
// }

const TestForm = (props) => {
  return(
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
          value={props.email}
          onChange={(e) => this.handleChange(e.target.value)}
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
          value={props.password}
          onChange={(e) => this.props.passwordChange(e.target.value)}
          />
        </div><br /><br /><br /><br />
      </div>
    </form>
)}

export default TestForm;
