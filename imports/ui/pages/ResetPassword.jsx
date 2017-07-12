import React, { Component } from 'react';

export default class ResetPassword extends Component {
  render() {
    return (
      <div className="row">
        <div className="auth-form col s12 m4 offset-m4">
          <div className="row">
            <h5 className="center-align">Reset Your Password</h5>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">lock</i>
              <input type="password" name="newPassword" id="newPassword" ref="newPassword" />
              <label htmlFor="newPassword">New Password</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">lock</i>
              <input type="password" name="repeatNewPassword" id="repeatNewPassword" ref="repeatNewPassword" />
              <label htmlFor="repeatNewPassword">Repeat New Password</label>
            </div>
          </div>
          <div className="row">
            <a className="auth-button waves-effect waves-light btn">Reset Password</a>
          </div>
        </div>
      </div>
    );
  }
}
