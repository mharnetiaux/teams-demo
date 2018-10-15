import React from "react";
import {Link} from "react-router-dom";
import Activity from '../../icon/activity.svg';
import Chat from "../../icon/chat.svg";
import Teams from "../../icon/teams.svg";
import Meetings from "../../icon/meetings.svg";
import Calls from "../../icon/calls.svg";

const Footer = () => (
    <nav className="footer">
        <Link to={{pathname:'/', state:{next:'false'}}} className="activity"><img width="37" height="35" src={Activity}/></Link>
        <Link to={{pathname:'/chat', state:{next:'true'}}} className="chat"><img src={Chat}/></Link>
        <Link to={{pathname:'/teams', state:{next:'true'}}} className="teams"><img src={Teams}/> </Link>
        <Link to={{pathname:'/meetings', state:{next:'true'}}} className="meetings"><img src={Meetings}/></Link>
        <Link to={{pathname:'/calls', state:{prev:'false'}}} className="calls"><img src={Calls}/></Link>
    </nav>
);


export default Footer;