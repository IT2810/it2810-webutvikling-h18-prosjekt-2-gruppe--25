import React, { Component } from 'react';

class Sound extends Component {
  render() {
    return (
      <div className="Sound">
        <audio autoPlay loop>
          <source src={this.props.soundSource}/>
        </audio>
      </div>
    );
  }
}

export default Sound;
