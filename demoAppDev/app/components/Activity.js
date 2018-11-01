import React from "react";
import Page from "./Page";

const Activity = (props) => {
    return (
        <Page>
            <section className="page-content">Activity Page</section>
            <div className="activity-selector" onClick={()=>{props.setStateOfChat(["StateOne","Ruth Franklin"])}}>Click here for Priority Messaging Scenario</div>
            <div className="activity-selector" onClick={()=>{props.setStateOfChat(["StateTwo","Laurence Gilbertson"])}}>Click here for Image Annotation Scenario</div>
        </Page>
    );    
}



export default Activity;