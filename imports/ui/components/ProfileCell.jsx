import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ProfileCell extends Component {
  render() {
    return (
      <div className="col s12 m3">
        <div className="profile-cell card">
          <img src="/default-profile-picture.jpg" width="100" height="100" className="circle" />
          <div className="profile-cell-content">
            <Link to="/profile/username">
              <span className="card-title">Username</span>
            </Link>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Mauris gravida nibh vitae odio rhoncus, sit amet tempus ante volutpat.
              Quisque hendrerit, lacus sit amet elementum fermentum,
              ligula mauris fermentum sem, ac porttitor lorem odio vitae nunc.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
