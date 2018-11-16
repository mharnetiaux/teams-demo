import React, {Component} from "react";
import Header from "./Header";
import {Link} from "react-router-dom";
import SVG from 'react-inlinesvg';
import read from '../../icon/unread.svg';

const header = {
    title: "Activity",
    links:['menu','search']
};

class Activity extends Component {
    constructor(props) {
        super(...arguments);
        this.state = {
            activityHistory: this.props.activityHistory
        }
    }

    chatItem() {
        return this.state.activityHistory.map(((item, key)=>{
            return (
                <Link to='single-chat' key={key}>
                    <section className="chat-container" key={key}>
                    <span className="avatar-container">
                        <span className={item.read ? "read" : "unread"}><SVG src={read}/></span>
                        <img src={item.avatar} alt="profile picture"/>
                    </span>
                        <ul>
                            <li className={"message-info" + " " + item.type}><span className={item.type}>{item.name}</span><span className="time">{item.time}</span></li>
                            <li className="message-info"><span className="message">{item.message}</span></li>
                        </ul>
                    </section>
                </Link>
            );
        }));
    }
    
    render() {
        return(
            <section className="page activity">
                <Header title={header.title} links={header.links}/>
                <section className="page-content">
                    {this.chatItem()}
                </section>
            </section>
        );
    }
};



export default Activity;