import React, {Component} from 'react';
import {Link} from "react-router-dom";
import SVG from 'react-inlinesvg';
import Search from "../../icon/search.svg";
import Menu from "../../icon/menu.svg";

class Header extends Component {

    constructor() {
        super(...arguments);
        this.state = {
            alert: true,
            image: "/images/urgent_white.png",
            content: "URGENT! Darrell Salyer's blood sugar is hi..."
        }
    }

    render() {
        return(
            <header>
                <section className={this.state.alert ? "alert": "none"}><img src={this.state.image} width="20" height="20"/><span className="alert-message">{this.state.content}</span></section>
                <nav className={this.state.alert ? "header header-alert": "header header-alert-none"}>
                    <Link to={{pathname:'/menu', state:{prev:'true'}}} className="menu"><SVG src={Menu}/></Link>
                    <Link to={{pathname:'/search', state:{prev:'true'}}} className="search"><SVG src={Search}/></Link>
                </nav>
            </header>
        );
    }
}

export default Header;