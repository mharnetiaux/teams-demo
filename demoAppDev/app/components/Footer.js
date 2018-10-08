import React from "react";
import {Link} from "react-router-dom";
import Activity from "../styles/img/activity.svg";
import Chat from "../styles/img/chat.svg";
import Teams from "../styles/img/teams.svg";
import Meetings from "../styles/img/meetings.svg";
import Calls from "../styles/img/calls.svg";

const Footer = () => (
    <nav className="footer">
        <Link to={{pathname:'/', state:{next:'false'}}} className="activity"><Activity/></Link>
        <Link to={{pathname:'/chat', state:{next:'true'}}} className="chat"><Chat/></Link>
        <Link to={{pathname:'/teams', state:{next:'true'}}} className="teams"><Teams/></Link>
        <Link to={{pathname:'/meetings', state:{next:'true'}}} className="meetings"><Meetings/></Link>
        <Link to={{pathname:'/calls', state:{prev:'false'}}} className="calls"><Calls/></Link>
    </nav>
);


export default Footer;