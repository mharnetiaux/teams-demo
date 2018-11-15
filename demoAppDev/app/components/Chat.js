import React from "react";
import SubNav from './chat/SubNav';
import ChatContent from "./chat/ChatContent";
import Header from "./Header";

const header = {
    title: "Chat",
    links:['menu','search','contact'],
},

Chat = (props) => (
    <section className="page chat">
        <Header title={header.title} links={header.links}/>
        <SubNav/>
        <ChatContent chatHistory={props.chatHistory}/>
    </section>
);

export default Chat;