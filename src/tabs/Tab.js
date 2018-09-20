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
            <div className={ "tab-button" + (this.props.activeTab ? ' active' : '') }>
                <button
                    name={ this.props.name}
                    tabIndex={ this.props.tabIndex }
                    onClick={ this.setActiveTab }
                >
                    {this.props.name}
                </button>
            </div>
        )
    }
}


export default Tab;
