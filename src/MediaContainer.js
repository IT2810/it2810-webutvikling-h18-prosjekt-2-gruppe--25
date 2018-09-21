import React from "react";
import RadioButton from "./RadioButton.js";

// Denne komponenten utgjør én av mediekategoriene som man skal kunne velge mellom
class MediaContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: "1",
        };
        // this må bindes for å få korrekt funksjonalitet i funksjoner.
        this.handleCheckChange = this.handleCheckChange.bind(this);
    }

    // Her oppdateres tilstanden til konteineren når radioknappene endres.
    handleCheckChange(value) {
        this.setState(state => ({
            checked: value,
        }))
        this.props.updater(value-1);
    }

    // render returnerer her tittelen til mediekonteineren, og de tre
    // radioknappene som er del av hver mediekonteiner.
    render() {
        return (
            <div className="media-container">
                <h3>{this.props.tittel}</h3>
                <RadioButton name={this.props.tittel} value="1"
                    kategori={this.props.kat1} onChange={this.handleCheckChange}
                    checked={this.state.checked === "1"}/>
                <RadioButton name={this.props.tittel} value="2"
                    kategori={this.props.kat2} onChange={this.handleCheckChange}
                    checked={this.state.checked === "2"}/>
                <RadioButton name={this.props.tittel} value="3"
                    kategori={this.props.kat3} onChange={this.handleCheckChange}
                    checked={this.state.checked === "3"}/>
            </div>
        );
    }
}

export default MediaContainer;
