import React from "react";
import MeetingsContent from "./meetings/MeetingsContent";
import Header from "./Header";

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
        <Header title={header.title} links={header.links}/>
        <MeetingsContent/>
    </section>
);


export default Meetings;