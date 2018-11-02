import React, { Component } from 'react';

export default class ColorSelectorButton extends Component{
    constructor(props){
        super(props);
        this.state = {
            activeColorClass: "not-active"
        };
        this.toggleColorSelectorButtons = this.toggleColorSelectorButtons.bind(this);
    }
    render() {
        return (
            <div className={`btn ${this.props.colorClass} ${this.state.activeColorClass}`} onClick={(e) => {e.stopPropagation; e.preventDefault; this.props.changeColor(this.props.color); this.toggleColorSelectorButtons()}}>
                <span></span>
                <a></a>
            </div>
        )
    }
    toggleColorSelectorButtons() {
        let css = (this.state.activeColorClass === "active") ? "not-active" : "active";
        this.setState({
            activeColorClass: css
        });
    }
}