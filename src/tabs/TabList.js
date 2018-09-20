import React, { Component } from 'react';
import Tab from './Tab';
class TabList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activeTab : "0"
        };
        this.handleOnClick = this.handleOnClick.bind(this);
    }
    handleOnClick(tabIndex) {
        this.setState(state => ({
            activeTab: tabIndex,
        }))
        this.props.indexUpdater(tabIndex);
    }
    render() {
        return (
            <div className="TabList">
                <Tab name={this.props.navn1} tabIndex="0"
                    onClick={this.handleOnClick}
                    activeTab={this.state.activeTab === "0"}/>
                <Tab name={this.props.navn2} tabIndex="1"
                    onClick={this.handleOnClick}
                    activeTab={this.state.activeTab === "1"}/>
                <Tab name={this.props.navn3} tabIndex="2"
                    onClick={this.handleOnClick}
                    activeTab={this.state.activeTab === "2"}/>
                <Tab name={this.props.navn4} tabIndex="3"
                    onClick={this.handleOnClick}
                    activeTab={this.state.activeTab === "3"}/>
            </div>
        );
    }
}

export default TabList;
