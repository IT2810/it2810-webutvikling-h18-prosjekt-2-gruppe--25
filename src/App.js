import React, { Component } from 'react';
import Axios from 'axios';
import Main from './main/Main';
import TabList from './tabs/TabList';
import Header from './Header';
import CategoryContainer from './CategoryContainer';
import './App.css';



class App extends Component {
  constructor (props) {
    super(props)
    //The xml(svg) and text is saved here after it is downloaded
    this.state = {
      xml: [[null,null,null,null],[null,null,null,null],[null,null,null,null]],
      text: [[null,null,null,null],[null,null,null,null],[null,null,null,null]],
      xmlIndex: 0,
      textIndex: 0,
      audioIndex: 0,
      mediaIndex: 0
    };
  }

  componentWillMount() {
    this.downloadMedia(0,0,0,0);
  }

  setXmlCategoryIndex = (xIndex) => {
    this.downloadMedia(xIndex, this.state.audioIndex, this.state.textIndex, this.state.mediaIndex);
    this.setState({ xmlIndex: xIndex });
  }
  setTextCategoryIndex = (tIndex) => {
    this.downloadMedia(this.state.xmlIndex, this.state.audioIndex, tIndex, this.state.mediaIndex);
    this.setState({ textIndex: tIndex});
  }
  setAudioCategoryIndex = (aIndex) => {
    this.downloadMedia(this.state.xmlIndex, aIndex, this.state.textIndex, this.state.mediaIndex);
    this.setState({ audioIndex: aIndex});
  }
  setMediaIndex = (mIndex) => {
    this.downloadMedia(this.state.xmlIndex, this.state.audioIndex, this.state.textIndex, mIndex);
    this.setState({ mediaIndex: mIndex});
  }

  //Checks if media is available and downloads it if not
  downloadMedia = (xmlIndex, audioIndex, textIndex, mediaIndex) => {
    if (this.state.xml[xmlIndex][mediaIndex] === null) {
      let svgUrl = "media\\svg\\" + xmlIndex + "\\" + mediaIndex + ".svg";
      //downloads xml
      Axios({
        method: 'get',
        url: svgUrl,
        responseType: 'text'
      })
        .then((response) => {
          const data = response.data;
          let svg = Object.assign([],this.state.xml);
          svg[xmlIndex][mediaIndex] = data;
          this.setState({xml: svg});
      })
        .catch((err) => {
          new Error(err)
      });
    }
    //downloads text
    if (this.state.text[textIndex][mediaIndex] === null) {
      let textUrl = "media\\tekst\\" + textIndex + "\\" + mediaIndex + ".json" ;
      Axios({
        method: 'get',
        url: textUrl,
        responseType: 'json'
      })
        .then((response) => {
          const tekst = this.parseJSON(response.data.tekst);
          let tState = Object.assign([],this.state.text);
          tState[textIndex][mediaIndex] = tekst;
          this.setState({text: tState});
      })
        .catch((err) => {
          new Error(err)
      });

    }
  }

  //Helper method for turning chosen state into passable props
  getChosenMedia = (mediaType) => {
    let mediaIndex = this.state.mediaIndex;
    if (mediaType === "xml") {
      let xIndex = this.state.xmlIndex;
      return this.state.xml[xIndex][mediaIndex];
    }
    else if (mediaType === "text") {
      let tIndex = this.state.textIndex;
      return this.state.text[tIndex][mediaIndex];
    }
    else if (mediaType === "sound") {
      let aIndex = this.state.audioIndex;
      return "media\\lyd\\" + aIndex + "\\" + mediaIndex + ".mp3";
    }
    else {
      new Error("Undefined mediaType")
    }
  }

  //Helper method to extract text from JSON-file in proper format
  parseJSON = (Json) => {
    let parsedText = "";
    for (let i = 0; i < Json.length; i++) {
      parsedText += "<p>" + Json[i].linje + "</p>";
    }
    return parsedText;
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <TabList
          navn1="Utstilling 1"
          navn2="Utstilling 2"
          navn3="Utstilling 3"
          navn4="Utstilling 4"
          indexUpdater = {this.setMediaIndex}
        />
        <Main
          xml = {this.getChosenMedia("xml")}
          txt = {this.getChosenMedia("text")}
          soundSource = {this.getChosenMedia("sound")}
        />
        <CategoryContainer
          lydUpdater={this.setAudioCategoryIndex}
          bildeUpdater = {this.setXmlCategoryIndex}
          textUpdater = {this.setTextCategoryIndex}
        />
      </div>
    );
  }
}

export default App;
