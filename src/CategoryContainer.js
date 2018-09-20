import React, { Component } from 'react';
import MediaContainer from './MediaContainer'

class CategoryContainer extends Component {
  render () {
    return (
      <div className="CategoryContainer">
        <MediaContainer
          tittel = "Bildekategori"
          kat1 = "Minimalistiske planter"
          kat2 = "Landskap"
          kat3 = "Abstrakte spiraler"
          updater = {this.props.bildeUpdater}
        />
        <MediaContainer
          tittel = "Tekstkategori"
          kat1 = "Utdrag fra Fuglane av Tarjei Vesaas"
          kat2 = "Haiku"
          kat3 = "Matematiske teoremer"
          updater = {this.props.textUpdater}
        />
        <MediaContainer
          tittel = "Lydkategori"
          kat1 = "Klassisk musikk"
          kat2 = "Fuglelyder"
          kat3 = "Motorsykler"
          updater = {this.props.lydUpdater}
        />
      </div>
    );
  }
}

export default CategoryContainer;
