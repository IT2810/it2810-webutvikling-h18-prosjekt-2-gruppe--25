import React, { Component } from 'react';

class Tab extends Component {
    constructor(props) {
        super(props);

        this.setActiveTab = this.setActiveTab.bind(this);
    }
    setActiveTab(e) {
        this.props.onClick(e.target.tabIndex);

    }
    render() {
        return (
                <button className={ "tab-button" + (this.props.activeTab ? '-active' : '')}
                    tabIndex={ this.props.tabIndex }
                    onClick={ this.setActiveTab }
                    >
                        {this.props.name}
                    </button>
        )
    }
}


export default Tab;
