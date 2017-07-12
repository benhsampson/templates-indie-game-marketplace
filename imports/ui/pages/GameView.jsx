import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CurrencyInput from 'react-currency-input';

export default class GameView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: '10.00'
    };
    this.handlePriceChange = this.handlePriceChange.bind(this);
  }
  componentDidMount() {
    $(document).ready(function() {
      $('.parallax').parallax();
      $('.modal-trigger').leanModal();
    });
  }
  handlePriceChange(e, maskedValue, floatValue) {
    this.setState({ amount: maskedValue });
  }
  render() {
    return (
      <div className="game-view">
        <div id="modal-download" className="modal modal-fixed-footer">
          <div className="modal-content">
            <h5>Buy 'Game Title'</h5>
            <p>Download Game Title by purchasing it for $10.00 or more.<br />
            <small>Support the developer by paying above the minimum price.
              <Link to="/docs" className="learn-more">Learn More</Link>
            </small></p>
            <label htmlFor="price-input">Name Your Price</label>
            <CurrencyInput
              id="price-input"
              prefix="$"
              value={this.state.amount}
              onChangeEvent={this.handlePrieChange}
            />
            {/* <table>
              <thead>
                <tr>
                  <th>Included Files</th>
                  <th>File Size</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>game_windows.exe</td>
                  <td>81MB</td>
                </tr>
                <tr>
                  <td>game_mac.exe</td>
                  <td>87MB</td>
                </tr>
                <tr>
                  <td>game_linux.exe</td>
                  <td>77MB</td>
                </tr>
                <tr>
                  <td>Build_Data</td>
                  <td>802MB</td>
                </tr>
              </tbody>
            </table> */}
          </div>
          <div className="modal-footer">
            <a className="modal-action waves-effect waves-light btn blue left">
              Pay with Paypal
            </a>
            <a className="modal-action waves-effect waves-light btn left">
              Pay with Card
             <i className="material-icons right">credit_card</i>
            </a>
            <a className="modal-action modal-close waves-effect waves-light btn-flat right">Cancel</a>
          </div>
        </div>
        <div className="parallax-container">
          <div className="parallax">
            <img src="/game-cover-image.png" />
          </div>
        </div>
        <div className="container row">
          <div className="col s12 m8 game-view">
            <div className="game-info-left">
              <div className="game-title-container">
                <h3>Game Title</h3>
              </div>
              <div className="game-download">
                <a href="#modal-download" className="waves-effect waves-light btn left modal-trigger">Download
                  <i className="material-icons right">file_download</i>
                </a>
                <p className="left">$10 OR MORE</p>
              </div>
              {/* <div className="game-video-container">
                <iframe src="https://www.youtube.com/embed/8lWpnvNxs8k" frameBorder="0" allowFullScreen></iframe>
              </div> */}
              <p className="game-details left">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.<br /><br />Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestibulum volutpat pretium libero. Cras id dui.</p>
            </div>
          </div>
          <div className="col s12 m4 game-view">
            <div className="game-info-right">
              <div className="developer-info-container">
                <div className="developer-info">
                  <img src="/default-profile-picture.jpg" className="circle responsive-img left" />
                  <p className="developer-username-container left">
                    <b className="developer-username left">Username</b>
                    <a className="waves-effect waves-light btn btn-small">Follow
                      <i className="material-icons left">person_add</i>
                    </a>
                  </p>
                </div>
              </div>
              <div className="game-pictures">
                <img src="/thumbnail.jpg" />
                <img src="/thumbnail.jpg" />
              </div>
              <div className="game-additional-info">
                <p>Platforms: <b>Windows</b></p>
                <p>Published: <b>2 months ago</b></p>
                <p>Rating: <b>8/10</b></p>
                <p>Tags: <b>Singleplayer</b>, <b>Fun</b>, <b>Fast-paced</b></p>
              </div>
            </div>
          </div>
        </div>
        <div className="container row">
          <div className="col s12 m8 game-view">
            <div className="game-comments">
              <h5 className="dividing-header">Comments:</h5>
              <div className="comment">
                <img src="/profile-picture.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
