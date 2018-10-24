import React, {Component} from 'react';
import {Link} from "react-router-dom";
import SVG from 'react-inlinesvg';
import read from '../../../icon/unread.svg';

export default class moreContent extends Component{
    constructor(){
        super(...arguments);
        let date = new Date();
        this.toggleClass = this.toggleClass.bind(this);
        this.state = {
            chat: false,
            files: false,
            more: true,
            idtMoreItems: [
                {
                    read: false,
                    name: "Ruth",
                    time: date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }),
                    message: "We need you A.S.A.P",
                    priorityIcon: "/images/urgent_red.png",
                    priority: "- URGENT",
                    avatar: "/images/Patient.png",
                    type: "urgent"
                }
            ]
        };
    }
    toggleClass() {
        this.setState(
            {
                chat: !this.state.chat,
                files: !this.state.files,
                more: !this.state.more
            });
    };

    render() {
        const idtMoreItem = this.state.idtMoreItems.map(((item, key)=>{
            return (
                <Link to={{pathname:'/idt-patient-list', state:{prev:'true'}}} key={key}>
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

        return (
            <section className="page-content">
                <ul className="idt-sub-nav">
                    <li className={this.state.chat ? 'chat selected': "chat"} onClick={this.toggleClass}>
                        <Link to={{pathname:'/idt', state:{next:'false'}}}>Chat</Link>
                    </li>
                    <li className={this.state.files ? 'files selected': "files"} onClick={this.toggleClass}>
                        <Link to={{pathname:'/files', state:{next:'false'}}}>Files</Link>
                    </li>
                    <li className={this.state.more ? 'more selected': "more"} onClick={this.toggleClass}>
                        <Link to={{pathname:'/more', state:{next:'false'}}}>More</Link>
                    </li>
                </ul>
                {idtMoreItem}
            </section>
        
        )
    }
}