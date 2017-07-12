import React, { Component } from 'react';
import GameCell from '../components/GameCell';

export default class BrowseGames extends Component {
  componentDidMount() {
    $(document).ready(function() {
      $('select').material_select();
      $('.button-collapse').sideNav();
      $('.collapsible').collapsible({
        accordion : true
      });
    });
  }
  render() {
    return (
      <div className="browse-games">
        <ul id="mobile-demo" className="side-nav fixed">
          <li>
            <ul className="collapsible collapsible-accordion">
              <li>
                <a className="subheader">Filter Games</a>
              </li>
              <li>
                <div className="divider"></div>
              </li>
              <li>
                <a className="collapsible-header active waves-effect">
                  Platform
                </a>
                <div className="collapsible-body">
                  <ul>
                    <li><a href="#!">Windows</a></li>
                    <li><a href="#!">Mac</a></li>
                    <li><a href="#!">Linux</a></li>
                    <li><a href="#!">Web</a></li>
                  </ul>
                </div>
              </li>
              <li>
                <a className="collapsible-header waves-effect">
                  Genre
                </a>
                <div className="collapsible-body">
                  <ul>
                    <li><a href="#!">Action</a></li>
                    <li><a href="#!">Platformer</a></li>
                    <li><a href="#!">Shooter</a></li>
                    <li><a href="#!">Adventure</a></li>
                    <li><a href="#!">Role Playing</a></li>
                    <li><a href="#!">Simulation</a></li>
                    <li><a href="#!">Strategy</a></li>
                    <li><a href="#!">Puzzle</a></li>
                    <li><a href="#!">Sports</a></li>
                    <li><a href="#!">Other</a></li>
                  </ul>
                </div>
              </li>
              <li>
                <a className="collapsible-header waves-effect">
                  Price
                </a>
                <div className="collapsible-body">
                  <ul>
                    <li><a href="#!">Free</a></li>
                    <li><a href="#!">On Sale</a></li>
                    <li><a href="#!">$5 or less</a></li>
                    <li><a href="#!">$20 or less</a></li>
                  </ul>
                </div>
              </li>
            </ul>
          </li>
        </ul>
        <div>
          <div className="game-filters">
            <div className="row">
              <div className="input-field col s8">
                <input
                  type="text"
                  id="tags-input"
                  ref="tags-input"
                  className="autocomplete"
                />
                <label htmlFor="tags-input">Search Tags</label>
              </div>
              <div className="input-field col s4">
                <select>
                  <option value="best">Best Overall</option>
                  <option value="highest">Highest Rated</option>
                  <option value="popular">Most Popular</option>
                  <option value="newest">Newest First</option>
                </select>
                <label>Sort By</label>
              </div>
              <div className="col s12">
                <div className="chip">
                  Windows
                  <i className="close material-icons">close</i>
                </div>
                <div className="chip">
                  Shooter
                  <i className="close material-icons">close</i>
                </div>
                <div className="chip">
                  "Aliens"
                  <i className="close material-icons">close</i>
                </div>
              </div>
              {/* <a href="#" data-activates="mobile-demo" className="button-collapse">
                <i className="material-icons">menu</i>
                filters
              </a> */}
            </div>
          </div>
        </div>
        <div className="games-list row">
          <GameCell /><GameCell /><GameCell /><GameCell />
          <GameCell /><GameCell /><GameCell /><GameCell />
        </div>
      </div>
    );
  }
}
