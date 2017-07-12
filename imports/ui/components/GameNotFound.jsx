import React, { Component } from 'react';

export default class GameNotFound extends Component {
  render() {
    return (
      <div className="row">
        <div className="col s12 m8 offset-m2 center-align">
          <div className="not-found-container">
            <h3>Game Not Found</h3>
            <p>We couldn't find any games that match your search query.</p>
          </div>
        </div>
      </div>
    );
  }
}
