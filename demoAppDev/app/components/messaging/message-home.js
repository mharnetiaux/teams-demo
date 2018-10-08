import React from "react";
import {Link} from "react-router-dom";
import MessageSearch from "./message-search";
import NewMessage from "./message-new";
import Important from "./priority/message-priority";
import SendMessage from "./message-send";
import Page from "../Page"

class Message extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (

            <Page>
                <section className="message-window" id="message-window">
                    <Link to={{pathname:'/', state:{next:'false'}}} className="back-header"/>
                    <section className="container-new-message" id="container-new-message">
                        <MessageSearch/>
                        <NewMessage/>
                        <SendMessage/>
                        <Important/>
                    </section>
                </section>
            </Page>
        );
    }
}

export default Message;