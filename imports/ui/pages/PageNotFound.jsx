import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PageNotFound extends Component {
  render() {
    return (
      <div className="row">
        <div className="col s12 m8 offset-m2 center-align">
          <div className="not-found-container">
            <h1>404</h1>
            <h4>We couldn't find the page you were looking for.</h4>
            <p>Sorry, the page you are looking for either wasn't found, abandoned, or does not exist.
            <br />
            Please click the link below to return to the home page
            </p>
            <Link to="/">Go Home</Link>
          </div>
        </div>
      </div>
    );
  }
}
