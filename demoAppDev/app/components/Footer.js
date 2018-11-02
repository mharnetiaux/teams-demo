import React, {Component} from "react";
import {Link} from "react-router-dom";
import SVG from 'react-inlinesvg';
import Activity from "../../icon/activity.svg";
import Chat from "../../icon/chat.svg";
import Teams from "../../icon/teams.svg";
import Meetings from "../../icon/meetings.svg";
import Calls from "../../icon/calls.svg";

class Footer extends Component {
    constructor() {
        super();
    }

    /// Open/Close individual Team Menu
    toggleSelected() {
        const link = document.getElementsByClassName("icon"),
              selected = document.getElementsByClassName("selected");

        for(let name of link) {
            name.onclick = () => {
                selected[0].classList.remove("selected");
                name.classList.toggle("selected");
            };
        }
    }

    componentDidMount(){
        this.toggleSelected();
    }
    
    render() {
        return(
            <footer id="appFooter">
                <nav className="nav-footer">
                    <Link to='/activity' className="activity icon"><SVG src={Activity}/></Link>
                    <Link to='/' className="chat icon selected"><SVG src={Chat}/></Link>
                    <Link to='/teams' className="teams icon"><SVG src={Teams}/></Link>
                    <Link to='/meetings' className="meetings icon"><SVG src={Meetings}/></Link>
                    <Link to='/calls' className="calls icon"><SVG src={Calls}/></Link>
                </nav>
            </footer>
        );
    }
}

export default Footer;