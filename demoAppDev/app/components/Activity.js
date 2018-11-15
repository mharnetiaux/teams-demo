import React from "react";
import Header from "./Header";

const header = {
    title: "Activity",
    links:['menu','search']
},

Activity = () => {
    return (
        <section className="page activity">
            <Header title={header.title} links={header.links}/>
            <section className="page-content"></section>
        </section>
    );    
};



export default Activity;