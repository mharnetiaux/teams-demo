import React, {Component} from 'react';
import {Link} from "react-router-dom";
import SVG from 'react-inlinesvg';
import FollowIcon from "../../../icon/follow-icon.svg";
import BackArrow from '../../../icon/back-arrow.svg';

import replyIcon from "../../../icon/reply-icon.svg";

export default class IDTContent extends Component{
    constructor(){
        super(...arguments);
        this.toggleClass = this.toggleClass.bind(this);
        let date = new Date();
        this.state = {
            chat: true,
            files: false,
            more: false,
            chatItems: [
                {
                    read: false,
                    name: "Ruth",
                    time: date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }),
                    message: "We need you A.S.A.P",
                    avatar: "/images/profile_1.png",
                    replies: false
                },
                {
                    read: true,
                    name: "Pat Emerson",
                    time: date.toLocaleString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true }),
                    message: "Check out this new article! https://jamanetwork.com/journals/jama/article-abstract/2678616",
                    avatar: "/images/profile-pat-emerson.png",
                    replies: "5 replies from Sylvia, Dana, and Eldon"
                },
                {
                    read: true,
                    name: "Laurence Gilbertson",
                    time: "Yesterday",
                    message: "great, talk to you tomorrow?",
                    avatar: "/images/profile_3.png",
                    replies: false
                }
            ]
        };
    }
    toggleClass(navValue) {
        if(navValue === "chat"){
            this.setState({
                chat: true, files: false, more: false
            });
        } else if(navValue === "files"){
            this.setState({
                chat: false, files: true, more: false
            });
        } else{
            this.setState({
                chat: false, files: false, more: true
            });
        }

    };

    render() {
        const chatItem = this.state.chatItems.map(((item, key)=>{
            return (
                <div>
                    <section className="idt-chat-container" key={key}>
                        <span className="idt-avatar-container">
                            <img src={item.avatar} alt="profile picture"/>
                            <ul>
                                <li>{item.name}</li>
                                <li className="chat-header-date">{item.time}</li>
                            </ul>
                        </span>
                        
                        <span className="message-info"><span className="message">{item.message}</span></span>
                    </section>
                    <div className="reply-box">
                        {item.replies && <div className="replies">{item.replies}</div>}
                        <div className="reply-tab">
                            <SVG className="reply-icon" src={replyIcon}/>
                            <span className="reply-text">Reply</span>
                        </div>
                    </div>
                </div>
            );
        }));

        return (
            <section className="idt-chat">
                <header>
                    <h2 className="person"> IDT</h2>
                    <ul className="icon-container">
                        <li className="back-arrow"><Link to={{pathname: '/teams', state: {prev: 'true'}}}><SVG
                            src={BackArrow}/></Link></li>
                        <li className="follow-icon"><SVG src={FollowIcon}/></li>
                    </ul>
                    <ul className="idt-sub-nav">
                    <li className={this.state.chat ? 'chat selected': "chat"} onClick={() => {this.toggleClass("chat")}}>
                        <Link to={{pathname:'/idt', state:{next:'false'}}}>Chat</Link>
                    </li>
                    <li className={this.state.files ? 'files selected': "files"} onClick={() => {this.toggleClass("files")}}>
                        <Link to={{pathname:'/files', state:{next:'false'}}}>Files</Link>
                    </li>
                    <li className={this.state.more ? 'more selected': "more"} onClick={() => {this.toggleClass("more")}}>
                        <Link to={{pathname:'/more', state:{next:'false'}}}>More</Link>
                    </li>
                </ul>
                </header>
                {chatItem}
            </section>
        )
    }
}