import React from "react";
import {Link} from "react-router-dom";
import SVG from 'react-inlinesvg';
import Activity from "../../icon/activity.svg";
import Chat from "../../icon/chat.svg";
import Teams from "../../icon/teams.svg";
import Meetings from "../../icon/meetings.svg";
import Calls from "../../icon/calls.svg";

const Footer = () => (
    <footer id="appFooter">
            <nav className="nav-footer">
                <Link to='/activity' className="activity icon"><SVG src={Activity}/></Link>
                <Link to='/' className="chat icon"><SVG src={Chat}/></Link>
                <Link to='/teams' className="teams icon"><SVG src={Teams}/></Link>
                <Link to='/meetings' className="meetings icon"><SVG src={Meetings}/></Link>
                <Link to='/calls' className="calls icon"><SVG src={Calls}/></Link>
            </nav>
    </footer>
);


export default Footer;