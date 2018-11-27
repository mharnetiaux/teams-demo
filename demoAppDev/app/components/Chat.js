import React from "react";
import SubNav from './chat/SubNav';
import ChatContent from "./chat/ChatContent";
import Header from "./Header";

const header = {
    title: "Chat",
    links:['menu','search','compose-chat'],
},

Chat = (props) => (
    <section className="page chat">
        <Header title={header.title} links={header.links}/>
        <SubNav/>
        <ChatContent/>
    </section>
);

export default Chat;