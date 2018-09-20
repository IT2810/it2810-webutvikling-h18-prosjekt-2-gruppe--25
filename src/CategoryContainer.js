import React, { Component } from 'react';
import MediaContainer from './MediaContainer'

class CategoryContainer extends Component {
  render () {
    return (
      <div className="CategoryContainer">
        <MediaContainer
          tittel = "Bilde"
          kat1 = "balle1"
          kat2 = "balle2"
          kat3 = "balle3"
          updater = {this.props.bildeUpdater}
        />
        <MediaContainer
          tittel = "Text"
          kat1 = "balle1"
          kat2 = "balle2"
          kat3 = "balle3"
          updater = {this.props.textUpdater}
        />
        <MediaContainer
          tittel = "Lyd"
          kat1 = "balle1"
          kat2 = "balle2"
          kat3 = "balle3"
          updater = {this.props.lydUpdater}
        />
      </div>
    );
  }
}

export default CategoryContainer;
