import React, { Component } from 'react';
import './style.css';
import MediaContainer from "./MediaContainer";

class App extends Component {
    render() {
        return (
            <div className="App">
                <MediaContainer tittel="Tekster" kat1="Fuglane" kat2="haiku" kat3="teorem"/>
                <MediaContainer tittel="Bilder" kat1="landskap" kat2="blomar" kat3="abstrakt"/>
                <MediaContainer tittel="Lyder" kat1="lyd1" kat2="lyd2" kat3="lyd3"/>
            </div>
        );
    }
}

export default App;
