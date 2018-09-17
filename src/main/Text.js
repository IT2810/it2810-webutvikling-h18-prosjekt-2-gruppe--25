import React, { Component } from 'react';

class Text extends Component {
  render() {
    return (
      <div className="Text" dangerouslySetInnerHTML={{__html: this.props.txt}}>
      </div>
    );
  }
}

export default Text;
