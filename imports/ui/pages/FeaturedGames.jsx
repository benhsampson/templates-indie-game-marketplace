import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import GameCell from '../components/GameCell';

export default class FeaturedGames extends Component {
  componentDidMount() {
    $(document).ready(function(){
      $('.parallax').parallax();
    });
  }
  render() {
    return (
      <div>
        {/* <div className="introductory-banner">
          <a href="" className="banner-close"><i className="material-icons">close</i></a>
          <img src="/banner-image.png" />
          <div className="banner-content center-align">
            <h2>Get the latest Indie Games</h2>
            <p><a href="" className="learn-more">Learn More</a></p>
          </div>
        </div> */}
        <div className="parallax-container z-depth-3">
          <a href="" className="banner-close"><i className="material-icons">close</i></a>
          <div className="section">
            <div className="container center-align">
              <h1 className="white-text">Get the latest Indie Games</h1>
              <p className="white-text">Join a vibrant community of Indie Game enthusiasts and support developers you love.
                <Link to="/docs" className="learn-more">Learn More</Link>
              </p>
            </div>
          </div>
          <div className="parallax">
            <img src="/banner-image.png" />
          </div>
        </div>
        <div className="games-list row">
          <GameCell />
          <GameCell />
          <GameCell />
          <GameCell />
          <GameCell />
          <GameCell />
          <GameCell />
          <GameCell />
        </div>
      </div>
    );
  }
}
