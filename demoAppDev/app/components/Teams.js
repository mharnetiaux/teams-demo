import React from "react";
import TeamsContent from './teams/TeamsContent';
import Header from "./Header";

const header = {
    title: "Teams",
    links:['menu','search','teams-icon']
},

Teams = () => (
    <section className="page teams transition-item">
        <Header title={header.title} links={header.links}/>
        <TeamsContent/>
    </section>
);

export default Teams;