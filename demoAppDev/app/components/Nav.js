import React from "react";
import {Link} from "react-router-dom";
import Contact from "../../icon/contact.svg";
import Search from "../../icon/search.svg";
import Menu from "../../icon/menu.svg";

const Nav = () => (
    <nav className="header">
        <Link to={{pathname:'/menu', state:{prev:'true'}}} className="menu"><img width="20" height="16" src={Menu}/></Link>
        <Link to={{pathname:'/search', state:{prev:'true'}}} className="search"><img width="22" height="22" src={Search}/></Link>
        <Link to={{pathname:'/contact', state:{prev:'true'}}} className="contact"><img width="20" height="20" src={Contact}/></Link>
    </nav>
);


export default Nav;