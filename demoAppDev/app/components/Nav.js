import React from "react";
import {Link} from "react-router-dom";
import SVG from 'react-inlinesvg';
import Contact from "../../icon/contact.svg";
import Search from "../../icon/search.svg";
import Menu from "../../icon/menu.svg";

const Nav = () => (
    <nav className="header">
        <Link to={{pathname:'/menu', state:{prev:'true'}}} className="menu"><SVG src={Menu}/></Link>
        <Link to={{pathname:'/search', state:{prev:'true'}}} className="search"><SVG src={Search}/></Link>
        <Link to={{pathname:'/contact', state:{prev:'true'}}} className="contact"><SVG src={Contact}/></Link>
    </nav>
);


export default Nav;