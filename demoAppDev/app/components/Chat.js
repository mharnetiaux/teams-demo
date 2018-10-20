import React from "react";
import Page from "./Page";
import ChatContent from "./chat/ChatContent";

const Chat = () => (
    <Page className="chat-page">
        <h2 className="page-title">Chat</h2>
        <ChatContent/>
    </Page>
);


export default Chat;