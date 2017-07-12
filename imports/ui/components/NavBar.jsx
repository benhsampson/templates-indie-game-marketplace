import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo left">turtlepants</Link>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li><Link to="/games">Browse Games</Link></li>
              <li><Link to="/games/new" className="waves-effect waves-light btn">Upload <i className="material-icons right">file_upload</i></Link></li>
            </ul>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/signup">Signup</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
