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
                <nav className="header"><h2 className="page-title">{this.props.title}</h2>{this.getHeaderContent()}</nav>
            </header>
        );
    }
}

export default Header;