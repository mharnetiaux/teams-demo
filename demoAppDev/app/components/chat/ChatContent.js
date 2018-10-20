import React, {Component} from 'react';
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
                    priorityIcon: "/images/urgent_red.png",
                    priority: "- URGENT",
                    avatar: "/images/profile_1.png",
                    type: "urgent"
                }

            ]
        }
    }
    
    render() {
        const chatItem = this.state.chatItems.map(((item, key)=>{
            return (
                <section className="chat-container" key={key}>
                    <span className="avatar-container">
                        <span className={item.read ? "read" : "unread"}><SVG src={read}/></span>
                        <img src={item.avatar} alt="profile picture"/>
                    </span>
                    <ul>
                        <li className={"message-info" + " " + item.type}><span className={item.type}>{item.name} {item.priority}</span><span className="time">{item.time}</span></li>
                        <li className="message-info"><span className="message">{item.message}</span><img src={item.priorityIcon} alt="Urgent" width="13" height="13"/></li>
                    </ul>
                </section>
            );
        }));
        
        return(
            <section className="page-content">{chatItem}</section>
        );
    }
}

export default ChatContent;