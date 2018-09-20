import React, { Component } from 'react';
import Axios from 'axios';
import Main from './main/Main';
import TabList from './tabs/TabList';
import Header from './Header';
import MediaContainer from './MediaContainer';
import './App.css';



class App extends Component {
  constructor (props) {
    super(props)
    //The xml(svg) and text is saved here after it is downloaded
    this.state = {
      xml: [[null,null,null,null],[null,null,null,null],[null,null,null,null]],
      text: [[null,null,null,null],[null,null,null,null],[null,null,null,null]],
      categoryIndex: 0,
      mediaIndex: 0
    };
  }

  //Sets up the first exhebition
  componentDidMount() {
    this.setIndex(2,2);
  }

  //Sets the index
  setIndex = (cIndex, mIndex) => {
    this.setState({ categoryIndex: cIndex })
    this.setState({ mediaIndex: mIndex})
    this.downloadMediaByIndex(cIndex, mIndex);
  }

  //Checks if media is available and downloads it if not
  downloadMediaByIndex = (categoryIndex, mediaIndex) => {
    if (this.state.xml[categoryIndex][mediaIndex] === null) {
      let svgUrl = "media\\svg\\" + categoryIndex + "\\" + mediaIndex + ".svg";
      let textUrl = "media\\tekst\\" + categoryIndex + "\\" + mediaIndex + ".json" ;
      //downloads svg
      Axios({
        method: 'get',
        url: svgUrl,
        responseType: 'text'
      })
        .then((response) => {
          const data = response.data;
          let svg = Object.assign([],this.state.xml);
          svg[categoryIndex][mediaIndex] = data;
          this.setState({xml: svg});
      })
        .catch((err) => {
          new Error(err)
      });
      //downloads text
      Axios({
        method: 'get',
        url: textUrl,
        responseType: 'json'
      })
        .then((response) => {
          const tekst = response.data.tekst;
          let textArray = Object.assign([],this.state.text);
          textArray[categoryIndex][mediaIndex] = tekst;
          this.setState({text: textArray});
      })
        .catch((err) => {
          new Error(err)
      });

    }
  }

  //Helper method for turning chosen state into passable props
  getChosenMedia = (mediaType) => {
    let categoryIndex = this.state.categoryIndex;
    let mediaIndex = this.state.mediaIndex;
    if (mediaType === "xml") {
      return this.state.xml[categoryIndex][mediaIndex];
    }
    else if (mediaType === "text") {
      return this.state.text[categoryIndex][mediaIndex];
    }
    else if (mediaType === "sound") {
      return "media\\lyd\\" + categoryIndex + "\\" + mediaIndex + ".mp3";
    }
    else {
      new Error("Undefined mediaType")
    }
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <TabList navn1="Kombinasjon 1"
            navn2="Kombinasjon 2"
            navn3="kombinasjon 3"
            navn4="kombinasjon 4"/>
        <Main
          xml = {this.getChosenMedia("xml")}
          txt = {this.getChosenMedia("text")}
          soundSource = {this.getChosenMedia("sound")}
        />
        <MediaContainer name="tekst" kat1="hei" kat2="ho" kat3="betch" />
      </div>
    );
  }
}

export default App;
