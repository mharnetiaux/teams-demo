import React, {Component} from 'react';
import {Link} from "react-router-dom";
import SVG from 'react-inlinesvg';

class Header extends Component {
    
    getHeaderContent() {
        return this.props.links.map((link, key) => {
            return (
                <Link to={link} className={link} key={key}><SVG src={"/icon/" + link + ".svg"}/></Link>
            )
        })
    }

    render() {
        return(
            <header>
                <Link className="alert-container" to='/'><section className={this.props.alert.on ? "alert": "none"}><img src={this.props.alert.image} width="20" height="20"/><span className="alert-message">{this.props.alert.content}</span></section></Link>
                <nav className={this.props.alert.on ? "header header-alert": "header header-alert-none"}><h2 className="page-title">{this.props.title}</h2>{this.getHeaderContent()}</nav>
            </header>
        );
    }
}

export default Header;