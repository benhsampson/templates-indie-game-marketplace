import React, { Component } from 'react';

export default class GameNotFound extends Component {
  render() {
    return (
      <div className="row">
        <div className="col s12 m8 offset-m2 center-align">
          <div className="not-found-container">
            <h3>User Not Found</h3>
            <p>The user you're looking for doesn't exist.</p>
          </div>
        </div>
      </div>
    );
  }
}
