import React from "react";
import MeetingsContent from "./meetings/MeetingsContent";
import Header from "./Header";

//not DRY 
import {Link} from "react-router-dom";
import { store } from '../store';
const Alert = () => {
    const alertType = {
        on: true,
        content: "URGENT! Darrell Salyer's blood sugar is hi...",
        image: "/icon/urgent-white.svg",
    };
    return(
        <Link id="alertContainer" className="alert-container" to='/single-chat/0'><section className={alertType.on ? "alert": "none"}><img src={alertType.image} width="20" height="20"/><span className="alert-message">{alertType.content}</span></section></Link>
    );
};

function date() {
    "use strict";
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const d = new Date();
    const m = months[d.getMonth()];
    const y = d.getFullYear();

    return m + " " + y;
}

const header = {
    title: date(),
    links:['menu','search','meetings-icon']
},

Meetings = () => (
    <section className="page meetings">
        {store.getState().callAlert && Alert()}
        <Header title={header.title} links={header.links}/>
        <MeetingsContent/>
    </section>
);


export default Meetings;