import React, { Component } from 'react';
import GameCell from '../components/GameCell';
import ProfileCell from '../components/ProfileCell';

export default class Profile extends Component {
  componentDidMount() {
    $(document).ready(function(){
      $('.parallax').parallax();
      $('ul.tabs').tabs();
    });
  }
  render() {
    return (
      <div>
        <div className="profile-card card col s12">
          <div className="parallax-container">
            <div className="parallax">
              <img src="/game-cover-image.png" />
            </div>
          </div>
          <div className="card-content">
            <div className="row">
              <div className="col s4">
                <div className="row">
                  <div className="profile-avatar-container circle hide-on-small-only">
                    <div className="profile-avatar circle waves-effect waves-block waves-light">
                      <img src="/default-profile-picture.jpg" alt="thumbnail" height="150" className="activator" />
                    </div>
                  </div>
                  <div className="profile-info">
                    <h5>Ben Sampson</h5>
                    <p>Project Manager</p>
                  </div>
                </div>
              </div>
              <div className="profile-info col s6">
                <ul className="tabs">
                  <li className="tab col s3"><a href="#1" className="active">2 Games</a></li>
                  <li className="tab col s3"><a href="#2">15 Followers</a></li>
                  <li className="tab col s3"><a href="#3">6 Following</a></li>
                </ul>
              </div>
              <div className="col s2">
                <div className="activator profile-activator circle">
                  <a className="btn-floating waves-effect waves-light red right">
                    <i className="material-icons">face</i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card-reveal">
            <div className="container row">
              <span className="card-title col s12">
                Ben Sampson
                <i className="material-icons right">close</i>
              </span>
              <div className="col s8">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris gravida nibh vitae odio rhoncus, sit amet tempus ante volutpat.
                  Quisque hendrerit, lacus sit amet elementum fermentum, ligula mauris fermentum sem, ac porttitor lorem odio vitae nunc.
                </p>
                <p>@name</p>
                <p>
                  bensampsondev@gmail.com
                  <i className="material-icons left">email</i>
                </p>
                <p>
                  Joined 7th of April
                  <i className="material-icons left">event_note</i>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="1" className="col s12">
          <div className="games-list row">
            <GameCell />
            <GameCell />
          </div>
        </div>
        <div id="2" className="col s12">
          <div className="profiles-list row">
            <ProfileCell /><ProfileCell /><ProfileCell /><ProfileCell />
            <ProfileCell /><ProfileCell /><ProfileCell /><ProfileCell />
            <ProfileCell /><ProfileCell /><ProfileCell /><ProfileCell />
            <ProfileCell /><ProfileCell /><ProfileCell />
          </div>
        </div>
        <div id="3" className="col s12">
          <div className="profiles-list row">
            <ProfileCell /><ProfileCell /><ProfileCell /><ProfileCell />
            <ProfileCell /><ProfileCell />
          </div>
        </div>
      </div>
    );
  }
}
