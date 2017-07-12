import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Login extends Component {
  render() {
    return (
      <div className="content-container">
        <div className="content">
          <div className="row">
            <div className="auth-form col s12 m4 offset-m4">
              <h4 className="center-align">Login to turtlepants</h4>
              <p className="center-align">Welcome back!</p>
              <div className="row">
                <div className="input-field col s12">
                  <i className="material-icons prefix">account_circle</i>
                  <input id="emailOrUsername" type="text" className="validate" />
                  <label for="emailOrUsername">Email or Username</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <i className="material-icons prefix">lock</i>
                  <input id="password" type="password" className="validate" />
                  <label for="password">Password</label>
                </div>
                <label className="forgot-password-check right">
                  <a href=''><b>Forgot Password?</b></a>
                </label>
              </div>
              <a className="auth-button waves-effect waves-light btn">Login</a>
            </div>
          </div>
        </div>
        {/* <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Footer Content</h5>
                <p className="grey-text text-darken-4">You can use rows and columns here to organize your footer content.</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Links</h5>
                <ul>
                  <li><a className="grey-text text-darken-3" href="#!">Link 1</a></li>
                  <li><a className="grey-text text-darken-3" href="#!">Link 2</a></li>
                  <li><a className="grey-text text-darken-3" href="#!">Link 3</a></li>
                  <li><a className="grey-text text-darken-3" href="#!">Link 4</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
              © 2014 Copyright Text
              <a className="grey-text text-darken-4 right" href="">More Links</a>
            </div>
          </div>
        </footer> */}
      </div>
    );
  }
}
