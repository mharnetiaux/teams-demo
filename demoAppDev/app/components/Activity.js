import React from "react";
import Header from "./Header";

const header = {
    title: "Activity",
    links:['menu','search']
},

Activity = (props) => {
    return (
        <section className="page activity">
            <Header title={header.title} links={header.links}/>
            <section className="page-content"></section>
                <div 
                    className="activity-selector" 
                    onClick={(event) => {props.setStateOfChat(["StateOne","Ruth Franklin","Might be the dexamethasone. Will order additional tests."]); event.target.classList.toggle("activity-selector-active")}}
                >
                    Click here for Priority Messaging Scenario
                </div>
                <div 
                    className="activity-selector" 
                    onClick={(event) => {props.setStateOfChat(["StateTwo","Laurence Gilbertson","Dr. Gilbertson, are you available?"]); event.target.classList.toggle("activity-selector-active")}}
                >
                    Click here for Image Annotation Scenario
                </div>
        </section>
    );    
};



export default Activity;