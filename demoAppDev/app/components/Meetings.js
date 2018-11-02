import React from "react";
import MeetingsContent from "./meetings/MeetingsContent";
import Header from "./Header";
import Footer from "./Footer";

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
    alert: {
        on: true,
        image: "/icon/urgent-white.svg",
        content: "URGENT! Darrell Salyer's blood sugar is hi..."
    },
    links:['menu','search','meetings-icon']
},

Meetings = () => (
    <section className="page meetings transition-item">
        <Header title={header.title} links={header.links} alert={header.alert}/>
        <MeetingsContent/>
        <Footer/>
    </section>
);


export default Meetings;