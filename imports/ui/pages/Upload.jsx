import React, { Component } from 'react';
import CurrencyInput from 'react-currency-input';

export default class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: '1.00'
    };
    this.handlePriceChange = this.handlePriceChange.bind(this);
  }
  componentDidMount() {
    $(document).ready(function() {
      $('select').material_select();
      Materialize.updateTextFields();
    });
  }
  handlePriceChange(e, maskedValue, floatValue) {
    this.setState({ amount: maskedValue });
  }
  render() {
    return (
      <div className="container">
        <div className="upload-form">
          <div className="row">
            <div className="col s12">
              <h5 className="center-align">Upload a New Game</h5>
            </div>
            <div className="col s12 m8">
              <div className="row">
                <div className="input-field col s12">
                  <input id="title" type="text" className="validate" />
                  <label htmlFor="title" data-wrong="wrong">Title</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input id="description" type="text" className="validate" />
                  <label htmlFor="description">Short Description or Tagline </label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <select>
                    <option value="1" defaultValue>Released</option>
                    <option value="2">In development</option>
                    <option value="3">On hold</option>
                    <option value="4">Cancelled</option>
                    <option value="5">Prototype</option>
                  </select>
                  <label className="mb-5">Release Status</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <label htmlFor="price-input">Pricing</label>
                  <CurrencyInput
                    id="price-input"
                    prefix="$"
                    value={this.state.amount}
                    onChangeEvent={this.handlePrieChange}
                  />
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <select>
                    <option value="" disabled defaultValue>Choose Type</option>
                    <option value="1">Downloadable</option>
                    <option value="2">HTML</option>
                    <option value="3">Flash</option>
                    <option value="4">Unity ≤ 5.3</option>
                  </select>
                  <label className="mb-5">Game Files</label>
                </div>
              </div>
              <div className="row">
                <div className="col s12">
                  <div className="card">
                    <div className="card-content">
                      <span className="card-title">file-name.exe</span>
                      <div className="card-close">
                        <p><i className="material-icons right">delete</i></p>
                      </div>
                    </div>
                    <div className="card-action">
                      <p>
                        <input
                          type="checkbox"
                          name="windowsPlatformSupport"
                          id="windowsPlatformSupport"
                          ref="windowsPlatformSupport"
                          value="windows"
                        />
                        <label htmlFor="windowsPlatformSupport">Windows</label>
                      </p>
                      <p>
                        <input
                          type="checkbox"
                          name="macOSPlatformSupport"
                          id="macOSPlatformSupport"
                          ref="macOSPlatformSupport"
                          value="macOS"
                        />
                        <label htmlFor="macOSPlatformSupport">Mac OS</label>
                      </p>
                      <p>
                        <input
                          type="checkbox"
                          name="linuxPlatformSupport"
                          id="linuxPlatformSupport"
                          ref="linuxPlatformSupport"
                          value="linux"
                        />
                        <label htmlFor="linuxPlatformSupport">Linux</label>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-14">
                <label className="custom-label">Downloadable Game Files</label>
                <div className="file-field input-field">
                  <div className="btn">
                    <span>File</span>
                    <input type="file" multiple />
                  </div>
                  <div className="file-path-wrapper">
                    <input className="file-path validate" placeholder="Upload one or more download files" type="text" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="input-field m-0 col s12">
                  <textarea id="body" placeholder="The bulk of your page's content" className="materialize-textarea" />
                  <label htmlFor="body">Body</label>
                </div>
              </div>
              <div className="row">
                <div className="col s12">
                  <label>Banner Image</label>
                  <div className="banner-upload center-align">
                    <p>Choose or drag a file here</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col s12">
                  <p>
                    <input type="checkbox" id="comments-checkbox" defaultChecked />
                    <label htmlFor="comments-checkbox">Enable Comments</label>
                  </p>
                </div>
              </div>
            </div>
            <div className="col s12 m4">
              <div className="picture-uploads">
                <div className="row">
                  <label className="mb-5">Thumbnail</label>
                  <div className="thumbnail-upload center-align">
                    <p>Choose or drag a file here</p>
                    <div className="thumbnail-options">
                      <a className="waves-effect waves-light btn">Replace Thumbnail</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input id="video-link" type="text" placeholder="eg: https://youtube.com/watch?v=dQw4w9WgXcQ" className="validate" />
                  <label htmlFor="video-link">Game Video or Trailer</label>
                </div>
              </div>
              <div className="picture-uploads">
                <div className="row">
                  <label className="mb-5">Snapshots</label>
                  <div className="snapshot-upload">
                    <img src="/thumbnail.jpg" />
                    <img src="/thumbnail.jpg" />
                    <a className="waves-effect waves-light btn right">Add Screenshot <i className="material-icons right">add_to_photos</i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col s12 m12">
              <div className="upload-form-footer right">
                <p className="left">
                  <input type="radio" id="privateCheckbox" name="gameVisibility" defaultChecked />
                  <label htmlFor="privateCheckbox">Private</label>
                </p>
                <p className="left">
                  <input type="radio" id="publicCheckbox" name="gameVisibility" />
                  <label htmlFor="publicCheckbox">Public</label>
                </p>
                <a className="waves-effect waves-light btn btn-large right">
                  Save & View Page
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
