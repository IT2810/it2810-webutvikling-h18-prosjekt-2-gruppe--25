import React, { Component } from 'react';
import Picture from './Picture';
import Text from './Text';
import Sound from './Sound';


class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Picture xml = {this.props.xml}/>
        <Text txt = {this.props.txt}/>
        <Sound soundSource = {this.props.soundSource}/>

      </div>
    );
  }
}

export default Main;
