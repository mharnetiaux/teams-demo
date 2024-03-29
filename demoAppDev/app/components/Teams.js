import React from "react";
import TeamsContent from './teams/TeamsContent';
import Header from "./Header";

//not DRY 
import {Link} from "react-router-dom";
import { store } from '../store';
import { setChatHistory } from '../actions';

function dispatchChatAction(stage) {
    store.dispatch(setChatHistory(stage));
}
const Alert = () => {
    const alertType = {
        on: true,
        content: "URGENT! Darrell Salyer's blood sugar is hi...",
        image: "/icon/urgent-white.svg",
    };
    return(
        <Link id="alertContainer" className="alert-container" to='/single-chat/0' onClick={()=>{dispatchChatAction(0)}}>
            <section className={alertType.on ? "alert": "none"}>
                <img src={alertType.image} width="20" height="20"/>
                <span className="alert-message">{alertType.content}</span>
            </section>
        </Link>
    );
};

const header = {
    title: "Teams",
    links:['menu','search','teams-icon']
},

Teams = () => (
    <section className="page teams">
        {store.getState().callAlert && Alert()}
        <Header title={header.title} links={header.links}/>
        <TeamsContent/>
    </section>
);

export default Teams;