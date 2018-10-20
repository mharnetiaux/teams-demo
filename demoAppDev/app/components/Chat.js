import React from "react";
import Page from "./Page";
import {Link} from "react-router-dom";
import SVG from 'react-inlinesvg';
import ChatIcon from "../../icon/chat-icon.svg";
import ChatContent from "./chat/ChatContent";

const Chat = () => (
    <Page className="chat-page">
        <h2 className="page-title">Chat</h2>
        <Link to={{pathname:'/contact', state:{prev:'true'}}} className="contact"><SVG src={ChatIcon}/></Link>
        <ChatContent/>
    </Page>
);


export default Chat;