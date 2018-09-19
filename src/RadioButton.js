import React from "react";

// Denne komponenten utgjør én av radioknappene som er del av mediekonteineren.
class RadioButton extends React.Component {
    constructor(props) {
        super(props);
        // this må bindes for å få korrekt funksjonalitet i funksjoner.
        this.handleChange = this.handleChange.bind(this);
    }

    // Funksjon som bruker onChange-funksjonen sendt ned som prop fra MediaContainer
    handleChange(e) {
        this.props.onChange(e.target.value);
    }

    // Render returnerer her en radioknapp med verdier fra parent-komponenten.
    render() {
        return (
            <div className="radio-button">
                <input type="radio"
                    name={this.props.name}
                    value={this.props.value}
                    checked={this.props.checked}
                    onChange={this.handleChange}
                />
            <label htmlFor={this.props.value}>{this.props.kategori}</label><br></br>
            </div>
        );
    }
}

export default RadioButton;
