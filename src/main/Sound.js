import React, { Component } from 'react';

class Sound extends Component {
  render() {
    return (
      <div className="Sound">
        <audio src={this.props.soundSource} autoPlay loop/>
      </div>
    );
  }
}

export default Sound;
