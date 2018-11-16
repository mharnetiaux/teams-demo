import React, {Component} from 'react';
import {Link} from "react-router-dom";
import SVG from 'react-inlinesvg';
import read from '../../../icon/unread.svg';

class ChatContent extends Component {

    constructor() {
        super(...arguments);
        this.state = {
            chatHistory: this.props.chatHistory
        }
    }

    chatItem() {
        return this.state.chatHistory.map(((item, key)=>{
            return (
                <Link to={`/single-chat/${key}`}  key={key}>
                    <section className="chat-container" key={key}>
                        <span className="avatar-container">
                            <span className={item.read ? "read" : "unread"}><SVG src={read}/></span>
                            <img src={item.avatar} alt="profile picture"/>
                        </span>
                        <ul>
                            <li className={"message-info" + " " + item.type}><span className={item.type}>{item.name} {item.priority}</span><span className="time">{item.time}</span></li>
                            <li className="message-info"><span className="message">{item.message}</span><img className={item.type ? "urgent" : "normal"} src={item.priorityIcon} alt="Urgent" width="13" height="13"/></li>
                        </ul>
                    </section>
                </Link>
            );
        }));
    }

    render() {
        return(
            <section className="page-content chat">
                {this.chatItem()}
            </section>
        );
    }
}

export default ChatContent;