import React from "react";
import Page from "./Page";
import {Link} from "react-router-dom";
import SVG from 'react-inlinesvg';
import ChatIcon from "../../icon/chat-icon.svg";
import MoreContent from "./idt/moreContent";

const More = () => (
    <Page className="chat-page">
        <h2 className="page-title">Chat</h2>
        <Link to={{pathname:'/contact', state:{prev:'true'}}} className="chat-link"><SVG src={ChatIcon}/></Link>
        <MoreContent/>
    </Page>
);


export default Chat;