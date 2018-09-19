import React, { Component } from 'react';

class Sound extends Component {
  render() {
    //<audio src={this.props.soundSource} type="audio/mp3" autoPlay loop controls/>
    console.log(this.props.soundSource);
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
