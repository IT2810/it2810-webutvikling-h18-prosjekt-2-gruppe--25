import React, { Component } from 'react';

class Picture extends Component {
  render() {
    return (
      <div className="Picture" dangerouslySetInnerHTML={{__html: this.props.xml}}>
      </div>
    );
  }
}

export default Picture;
