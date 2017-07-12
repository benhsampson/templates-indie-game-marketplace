import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class AuthNavBar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <ul id="dropdown1" className="dropdown-content">
          <li><Link to="/profile/username">My Profile</Link></li>
          <li className="divider"></li>
          <li><Link to="/dashboard">My Dashboard</Link></li>
          <li><Link to="/user/settings">Settings</Link></li>
          <li className="divider"></li>
          <li><a href="">Logout</a></li>
        </ul>
        <nav>
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo left">turtlepants</Link>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li><Link to="/games">Browse Games</Link></li>
              <li><Link to="/games/new" className="waves-effect waves-light btn">Upload <i className="material-icons right">file_upload</i></Link></li>
            </ul>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a className="dropdown-button" data-beloworigin="true" data-activates="dropdown1">Username <i className="material-icons right">arrow_drop_down</i></a></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
