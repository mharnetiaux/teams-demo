import React from "react";
import TeamsContent from './teams/TeamsContent';
import Header from "./Header";

const header = {
    title: "Teams",
    alert: {
        on: true,
        image: "/icon/urgent-white.svg",
        content: "URGENT! Darrell Salyer's blood sugar is hi..."
    },
    links:['menu','search','teams-icon']
},

Teams = () => (
    <section className="page teams transition-item">
        <Header title={header.title} alert={header.alert} links={header.links}/>
        <TeamsContent/>
    </section>
);

export default Teams;