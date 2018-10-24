import React from "react";
import Page from "./Page";
import {Link} from "react-router-dom";
import SVG from 'react-inlinesvg';
import ChatIcon from "../../icon/chat-icon.svg";
import IDTmoreContent from "./idt/moreContent";

const IDTmore = () => (
    <Page className="chat-page">
        <h2 className="page-title">IDT</h2>
        <Link to={{pathname:'/contact', state:{prev:'true'}}} className="chat-link"><SVG src={ChatIcon}/></Link>
        <IDTmoreContent/>
    </Page>
);


export default IDTmore;