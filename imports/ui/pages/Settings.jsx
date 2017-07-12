import React, { Component } from 'react';

export default class Settings extends Component {
  componentDidMount() {
    $(document).ready(function(){
      $('ul.tabs').tabs();
      Materialize.updateTextFields();
    });
  }
  render() {
    return (
      <div className="container">
        <div className="settings-form">
          <div className="row">
            <div className="col s12">
              <ul className="tabs">
                <li className="tab col s3"><a href="#1">Profile</a></li>
                <li className="tab col s3"><a href="#2">Password</a></li>
                <li className="tab col s3"><a href="#3">Payment</a></li>
                <li className="tab col s3"><a href="#4">Seller</a></li>
              </ul>
            </div>
            <div className="settings-content">
              <div id="1" className="col s12 m6">
                <h5>Profile</h5>
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      type="text"
                      id="username"
                      ref="username"
                      defaultValue="username"
                    />
                    <label htmlFor="username">Username</label>
                  </div>
                </div>
                <div className="row">
                  <div className="col s6">
                    <label htmlFor="profilePicture">Profile Picture</label>
                    <div className="profile-picture-upload center-align">
                      <p>Select or drag an image here</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <textarea
                      id="bio"
                      ref="bio"
                      defaultValue="Hey i'm web and game developer! Project lead of Space Shooter Inc."
                      className="materialize-textarea"
                    />
                    <label htmlFor="bio">Bio</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      type="text"
                      id="twitter"
                      ref="twitter"
                      defaultValue="@name"
                    />
                    <label htmlFor="twitter">Twitter</label>
                  </div>
                </div>
                <div className="row">
                  <a className="waves-effect waves-light btn right">
                    Save
                  </a>
                </div>
              </div>
              <div id="2" className="col s12 m6">
                <h5>Reset Password</h5>
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      type="password"
                      id="currentPassword"
                      ref="currentPassword"
                    />
                    <label htmlFor="currentPassword">Current Password</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      type="password"
                      id="newPassword"
                      ref="newPassword"
                    />
                    <label htmlFor="newPassword">New Password</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      type="password"
                      id="repeatNewPassword"
                      ref="repeatNewPassword"
                    />
                    <label htmlFor="repeatNewPassword">Repeat New Password</label>
                  </div>
                </div>
                <div className="row">
                  <a className="waves-effect waves-light btn right">
                    Submit
                  </a>
                </div>
              </div>
              <div id="3" className="col s12 m6">3</div>
              <div id="4" className="col s12 m6">4</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
