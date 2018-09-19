import React, { Component } from 'react';
import Axios from 'axios';
import Main from './main/Main';
import Header from './Header';
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
    this.setIndex(2,3);
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
          const tekst = this.parseJSON(response.data.tekst);
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

  //Helper method to extract text from JSON-file in proper format
  parseJSON = (Json) => {
    let parsedText = "<p>" + Json[0].linje + "</p>";
    for (let i = 1; i < Json.length; i++) {
      parsedText += "<p>" + Json[i].linje + "</p>";
    }
    return parsedText;
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Main
          xml = {this.getChosenMedia("xml")}
          txt = {this.getChosenMedia("text")}
          soundSource = {this.getChosenMedia("sound")}
        />
      </div>
    );
  }
}

export default App;
