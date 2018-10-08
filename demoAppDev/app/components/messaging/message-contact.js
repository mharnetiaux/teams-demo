import React from "react";
import {Link} from "react-router-dom";
import Page from "../Page";

class ChatMessage extends React.Component {

    constructor() {
        super();
    }
    
    render() {
        return (
            <Page>
                <section className="message-chat">
                    <Link to={{pathname:'/', state:{prev:'true', next:'true'}}} className="back-header"/>
                </section>
            </Page>
        );
    }
}

export default ChatMessage;