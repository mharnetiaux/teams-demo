import React, {Component} from 'react';

class ChatContent extends Component {

    constructor() {
        super(...arguments);
        let date = new Date();
        this.state = {
            chatItems: [
                {
                    name: "Bill Stevens",
                    priority: "Urgent",
                    message: "We need you A.S.A.P",
                    time: date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }),
                    status: "online",
                    profile: "/images/name.png"
                }
            ]
        }
    }
    
    render() {
        const chatItem = this.state.chatItems.map(((item, key)=>{
            return (
                <ul key={key}>
                    <li>{item.name}</li>
                    <li>{item.priority}</li>
                    <li>{item.message}</li>
                    <li>{item.time}</li>
                    <li>{item.status}</li>
                    <li><img src={item.profile} alt="no image"/></li>
                </ul>
            );
        }));
        
        return(
            <ul>
                {chatItem}
            </ul>
        );
    }
}

export default ChatContent;