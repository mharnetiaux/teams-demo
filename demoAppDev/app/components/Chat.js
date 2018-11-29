import React from "react";
import SubNav from './chat/SubNav';
import ChatContent from "./chat/ChatContent";
import Header from "./Header";

//not DRY
import {Link} from "react-router-dom";
import { store } from '../store';
const Alert = () => {
    const alertType = {
        on: true,
        content: "URGENT! Darrell Salyer's blood sugar is hi...",
        image: "/icon/urgent-white.svg",
    };
    return(
        <Link id="alertContainer" className="alert-container" to='/single-chat/0'><section className={alertType.on ? "alert": "none"}><img src={alertType.image} width="20" height="20"/><span className="alert-message">{alertType.content}</span></section></Link>
    );
};

const header = {
    title: "Chat",
    links:['menu','search','compose-chat'],
},

Chat = (props) => (
    <section className="page chat">
        {store.getState().callAlert && Alert()}
        <Header title={header.title} links={header.links}/>
        <SubNav/>
        <ChatContent/>
    </section>
);

export default Chat;