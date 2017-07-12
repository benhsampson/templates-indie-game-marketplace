import React, { Component } from 'react';

export default class RecoverPassword extends Component {
  render() {
    return (
      <div className="row">
        <div className="auth-form col s12 m4 offset-m4">
          <div className="row">
            <h5 className="center-align">Recover Your Password</h5>
          </div>
          <p>Please enter your email address below and we'll send a recovery link.</p>
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">email</i>
              <input type="email" name="email" id="email" ref="email" />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="row">
            <a className="auth-button waves-effect waves-light btn">Send Recovery Link</a>
          </div>
        </div>
      </div>
    );
  }
}
