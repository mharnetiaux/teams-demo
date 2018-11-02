import React, {Component} from 'react';
import {Link} from "react-router-dom";
import SVG from 'react-inlinesvg';
import read from '../../../icon/unread.svg';

class ChatContent extends Component {

    constructor() {
        super(...arguments);
        let date = new Date();
        this.state = {
            chatItems: [
                {
                    read: false,
                    name: "Ruth",
                    time: date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }),
                    message: "We need you A.S.A.P",
                    priorityIcon: "/icon/urgent.svg",
                    priority: "- URGENT",
                    avatar: "/images/profile_1.png",
                    type: "urgent"
                },
                {
                    read: true,
                    name: "Bernadette Guibord",
                    time: "9:16 AM",
                    message: "Can you please send the file over...",
                    priorityIcon: "/icon/urgent.svg",
                    priority: "",
                    avatar: "/images/profile_2.png",
                    urgent: true
                },
                {
                    read: true,
                    name: "Laurence Gilbertson",
                    time: "Yesterday",
                    message: "great, talk to you tomorrow?",
                    priorityIcon: "/icon/urgent.svg",
                    priority: "",
                    avatar: "/images/profile_3.png",
                    urgent: true
                },
                {
                    read: true,
                    name: "Cassandra Dunn",
                    time: "Thursday",
                    message: "Thank you!",
                    priorityIcon: "/icon/urgent.svg",
                    priority: "",
                    avatar: "/images/profile_4.png",
                    urgent: true
                },
                {
                    read: true,
                    name: "Pete. Krystal, Darren + 4",
                    time: "Monday",
                    message: "Rita: See attached Image",
                    priorityIcon: "/icon/urgent.svg",
                    priority: "",
                    avatar: "/images/profile_5.png",
                    urgent: true
                },
                {
                    read: true,
                    name: "Edmee Plant",
                    time: "5/20",
                    message: "The sales team are owning that problem.",
                    priorityIcon: "/icon/urgent.svg",
                    priority: "",
                    avatar: "/images/profile_5.png",
                    urgent: true
                }
            ]
        }
    }

    chatItem() {
        return this.state.chatItems.map(((item, key)=>{
            return (
                <Link to={{pathname:'/chat-content', state:{prev:'true'}}} key={key}>
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