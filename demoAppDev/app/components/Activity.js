import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const header = {
    title: "Activity",
    alert: {
        on: true,
        image: "/icon/urgent-white.svg",
        content: "URGENT! Darrell Salyer's blood sugar is hi..."
    },
    links:['menu','search']
},

Activity = (props) => {
    return (
        <section className="page activity transition-item">
            <Header title={header.title} links={header.links} alert={header.alert}/>
            <section className="page-content"></section>
            <div className="activity-selector" onClick={()=>{props.setStateOfChat(["StateOne","Ruth Franklin"])}}>Click here for Priority Messaging Scenario</div>
            <div className="activity-selector" onClick={()=>{props.setStateOfChat(["StateTwo","Laurence Gilbertson"])}}>Click here for Image Annotation Scenario</div>
            <Footer/>
        </section>
    );    
};



export default Activity;