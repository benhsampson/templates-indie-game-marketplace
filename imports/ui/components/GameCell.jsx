import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class GameCell extends Component {
  render() {
    return (
      <div>
        <div className="col s12 m3">
          <div className="card z-depth-2">
            <div className="card-image">
              <Link to="/games/id">
                <span className="price">$10</span>
                <img src="/thumbnail.jpg" />
              </Link>
            </div>
            <div className="card-content">
              <Link to="/games/id">
                <span className="card-title truncate">Game Title</span>
              </Link>
              <p className="truncate">Lorem ipsum dolor sit amet, in eos nullam omnium equidem.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
