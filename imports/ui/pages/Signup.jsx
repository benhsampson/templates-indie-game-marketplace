import React, { Component } from 'react';

export default class Signup extends Component {
  render() {
    return (
      <div className="row">
        <div className="auth-form col s12 m4 offset-m4">
          <h4 className="center-align">Sign up to turtlepants</h4>
          <p className="center-align">Join our awesome community!</p>
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">account_circle</i>
              <input id="username" type="text" className="validate" />
              <label for="username">Username</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">email</i>
              <input id="email" type="email" className="validate" />
              <label for="email" data-error="Invalid email address">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">lock</i>
              <input id="password" type="password" className="validate" />
              <label for="password">Password</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">lock</i>
              <input id="confirm-password" type="password" className="validate" />
              <label for="confirm-password">Confirm Password</label>
            </div>
          </div>
          <a className="auth-button waves-effect waves-light btn">Signup</a>
        </div>
      </div>
    );
  }
}
