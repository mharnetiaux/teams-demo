import React from "react";
import {Link} from "react-router-dom";
import SVG from 'react-inlinesvg';
import Activity from "../../icon/activity.svg";
import Chat from "../../icon/chat.svg";
import Teams from "../../icon/teams.svg";
import Meetings from "../../icon/meetings.svg";
import Calls from "../../icon/calls.svg";

const Footer = () => (
    <footer>
            <nav className="nav-footer">
                    <Link to={{pathname:'/', state:{next:'false'}}} className="activity icon"><SVG src={Activity}/></Link>
                    <Link to={{pathname:'/chat', state:{next:'true'}}} className="chat icon"><SVG src={Chat}/></Link>
                    <Link to={{pathname:'/teams', state:{next:'true'}}} className="teams icon"><SVG src={Teams}/></Link>
                    <Link to={{pathname:'/meetings', state:{next:'true'}}} className="meetings icon"><SVG src={Meetings}/></Link>
                    <Link to={{pathname:'/calls', state:{prev:'false'}}} className="calls icon"><SVG src={Calls}/></Link>
            </nav>
    </footer>
);


export default Footer;