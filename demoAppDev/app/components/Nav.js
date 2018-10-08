import React from "react";
import {Link} from "react-router-dom";
import Contact from "../styles/img/contact.svg";
import Search from "../styles/img/search.svg";
import Menu from "../styles/img/menu.svg";

const Nav = () => (
    <nav className="home-navigation">
        <Link to={{pathname:'/menu', state:{prev:'true'}}} className="menu"><Menu/></Link>
        <Link to={{pathname:'/search', state:{prev:'true'}}} className="search"><Search/></Link>
        <Link to={{pathname:'/contact', state:{prev:'true'}}} className="contact"><Contact/></Link>
    </nav>
);


export default Nav;