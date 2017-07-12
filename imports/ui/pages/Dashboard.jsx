import React, { Component } from 'react';

export default class Dashboard extends Component {
  componentDidMount() {
    $(document).ready(function(){
      $('ul.tabs').tabs();
    });
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="dashboard-user-info card col s12">
              <div className="col s4">
                <span className="card-title">
                  Ben Sampson
                </span>
              </div>
              <div className="col s2 right-align">
                <h4>$0.00</h4>
                <p>Earnings</p>
              </div>
              <div className="col s2 right-align">
                <h4>0</h4>
                <p>Purchases</p>
              </div>
              <div className="col s2 right-align">
                <h4>0</h4>
                <p>Downloads</p>
              </div>
              <div className="col s2 right-align">
                <h4>0</h4>
                <p>Views</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="dashboard-game-cell card">
              <div className="col s3">
                <span className="card-title">Game Title</span>
              </div>
              <div className="col s9">
                <ul className="tabs">
                  <li className="tab col s3">
                    <a href="#1">Earnings</a>
                  </li>
                  <li className="tab col s3">
                    <a href="#2">Purchases</a>
                  </li>
                  <li className="tab col s3">
                    <a href="#3">Downloads</a>
                  </li>
                  <li className="tab col s3">
                    <a href="#4">Views</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
