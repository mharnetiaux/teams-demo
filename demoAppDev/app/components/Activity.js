import React, {Component} from "react";
import Header from "./Header";
import {Link} from "react-router-dom";
import SVG from 'react-inlinesvg';
import read from '../../icon/unread.svg';
import CallMissed from '../../icon/CallMissed.svg';
import Promote from '../../icon/Promote.svg';

//not DRY 
import { store } from '../store';
const Alert = () => {
    const alertType = {
        on: true,
        content: "URGENT! Darrell Salyer's blood sugar is hi...",
        image: "/icon/urgent-white.svg",
    };
    return(
        <Link id="alertContainer" className="alert-container" to='/'><section className={alertType.on ? "alert": "none"}><img src={alertType.image} width="20" height="20"/><span className="alert-message">{alertType.content}</span></section></Link>
    );
};

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
                <Link to='activity' key={key}>
                    <section className="activity-container" key={key}>
                    <span className="activity-avatar-container">
                        <span className={item.read ? "read" : "unread"}><SVG src={read}/></span>
                        <img src={item.avatar} alt="profile picture"/>
                    </span>
                        <ul>           
                            <li className={"activity-message-info" + " " + item.type}><SVG className="activity-message-svg" src={item.missed ? CallMissed : Promote}/><span className={"activity-message " + item.type}>{item.name}</span><span className="time">{item.time}</span></li>
                            <li className="activity-message-info"><span className="activity-message">{item.message}</span></li>
                        </ul>
                    </section>
                </Link>
            );
        }));
    }
    
    render() {
        return(
            <section className="page activity">
                {store.getState().callAlert && Alert()}
                <Header title={header.title} links={header.links}/>
                <section className="page-content">
                    {this.chatItem()}
                </section>
            </section>
        );
    }
};



export default Activity;