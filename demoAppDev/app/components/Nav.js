import React from "react";
import {Link} from "react-router-dom";
import Contact from "../../icon/contact.svg";
import Search from "../../icon/search.svg";
import Menu from "../../icon/menu.svg";

const Nav = () => (
    <nav className="home-navigation">
        <Link to={{pathname:'/menu', state:{prev:'true'}}} className="menu"><img src={Menu}/></Link>
        <Link to={{pathname:'/search', state:{prev:'true'}}} className="search"><img src={Search}/></Link>
        <Link to={{pathname:'/contact', state:{prev:'true'}}} className="contact"><img src={Contact}/></Link>
    </nav>
);


export default Nav;