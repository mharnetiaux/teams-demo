import React from "react";
import SubNav from './chat/SubNav';
import ChatContent from "./chat/ChatContent";
import Header from "./Header";
import Footer from "./Footer";

const header = {
    title: "Chat",
    alert: {
        on: true,
        image: "/icon/urgent-white.svg",
        content: "URGENT! Darrell Salyer's blood sugar is hi..."
    },
    links:['menu','search','contact']
},

Chat = () => (
    <section className="page chat transition-item">
        <Header title={header.title} links={header.links} alert={header.alert}/>
        <SubNav/>
        <ChatContent/>
        <Footer/>
    </section>
);

export default Chat;