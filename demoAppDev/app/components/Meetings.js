import React from "react";
import Page from "./Page";
import {Link} from "react-router-dom";
import SVG from 'react-inlinesvg';
import MeetingsIcon from '../../icon/meetings-icon.svg';
import MeetingsContent from "./meetings/MeetingsContent";

function a() {
    "use strict";
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const d = new Date();
    const m = months[d.getMonth()];

    return m;
}

const Meetings = () => (
    <Page>
        <h2 className="page-title">{a()}</h2>
        <Link to={{pathname:'/contact', state:{prev:'true'}}} className="contact"><SVG src={MeetingsIcon}/></Link>
        <MeetingsContent/>
    </Page>
);


export default Meetings;