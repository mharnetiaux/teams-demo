import React from "react";
import Header from "./Header";

const header = {
    title: "Activity",
    links:['menu','search']
},

Activity = (props) => {
    return (
        <section className="page activity transition-item">
            <Header title={header.title} links={header.links}/>
            <section className="page-content"></section>
            <div className="activity-selector" onClick={()=>{props.setStateOfChat(["StateOne","Ruth Franklin"])}}>Click here for Priority Messaging Scenario</div>
            <div className="activity-selector" onClick={()=>{props.setStateOfChat(["StateTwo","Laurence Gilbertson"])}}>Click here for Image Annotation Scenario</div>
        </section>
    );    
};



export default Activity;