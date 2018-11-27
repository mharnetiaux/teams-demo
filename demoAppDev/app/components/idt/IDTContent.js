import React, {Component} from 'react';
import {Link} from "react-router-dom";
import SVG from 'react-inlinesvg';
// import FollowIcon from "../../../icon/follow-icon.svg";
// import BackArrow from '../../../icon/back-arrow.svg';

import ReplyIcon from "../../../icon/reply-icon.svg";
import ConversationNewIcon from '../../../icon/conversation-new.svg';

export default class IDTContent extends Component{
    constructor(){
        super();
        // this.backButton = this.backButton.bind(this);
        // this.toggleClass = this.toggleClass.bind(this);
        let date = new Date();
        let copiedDate = new Date(date.valueOf());
        let dateYesterday = new Date(copiedDate.setDate(date.getDate() - 1));
        this.state = {
            chat: true,
            files: false,
            more: false,
            chatItems: [
                {
                    read: true,
                    name: "Pat Emerson",
                    time: date.toLocaleString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true }),
                    message: "Check out this new article! https://jamanetwork.com/journals/jama/article-abstract/2678616",
                    avatar: "/images/profile-pat-emerson.png",
                    replies: "5 replies from Sylvia, Dana, and Eldon",
                    preview: "/images/Preview.png"
                }
            ],
            meetItems: [
                {
                    title: `${dateYesterday.toLocaleString('en-US', { month: 'numeric', day: 'numeric'})} IDT Sync`,
                    subtitle: `Occurs every ${dateYesterday.toLocaleDateString('en-US', { weekday: 'long' })} @ 1:45 PM`,
                    avatars: ["/images/profile_7.png", "/images/profile_8.png"],
                    preview: "/images/Message_Video.png"
                }
            ]
        };
    }

    // toggleClass(navValue) {
    //     if(navValue === "chat"){
    //         this.setState({
    //             chat: true, files: false, more: false
    //         });
    //     } else if(navValue === "files"){
    //         this.setState({
    //             chat: false, files: true, more: false
    //         });
    //     } else{
    //         this.setState({
    //             chat: false, files: false, more: true
    //         });
    //     }

    // };

    // /// Add selected class to previous page
    // backButton() {
    //     setTimeout(() => {
    //         document.getElementsByClassName("page")[0].classList.add("page-selected");
    //     },100)
    // }

    render() {
        // let yesterdayMonthDay = dateYesterday.toLocaleString('en-US', { month: 'numeric', day: 'numeric'});
        const chatItem = this.state.chatItems.map((item, key)=>{
            return (
                <div className="idt-chat-item">
                    <section className="idt-chat-container" key={key}>
                        <span className="idt-avatar-container">
                            <img src={item.avatar} alt="profile picture"/>
                            <ul>
                                <li>{item.name}</li>
                                <li className="chat-header-date">{item.time}</li>
                            </ul>
                            <span className="ellipses-span"><img src={"/images/ellipses.png"}/></span>
                        </span>
                        
                        <span className="message-info">
                            <span className="message">{item.message}</span>
                            {item.preview && <img src={item.preview} alt="preview picture"/>}
                        </span>
                    </section>
                    <div className="reply-box">
                        {item.replies && <div className="replies">{item.replies}</div>}
                        <div className="reply-tab">
                            <SVG className="reply-icon" src={ReplyIcon}/>
                            <span className="reply-text">Reply</span>
                        </div>
                    </div>
                </div>
            );
        });

        const meetItem = this.state.meetItems.map((item, key) => {
            return (
                <div>
                    <section className="idt-meet-container" key={key}>
                        <span className="idt-meet-header">
                            <img src={"/images/meetings-image.png"} alt="meeting picture"/>
                            <ul>
                                <li>{item.title}</li>
                                <li className="chat-header-date">{item.subtitle}</li>
                            </ul>
                        </span>
                        
                        <span className="meeting-info">
                            <div className="meeting-participants">
                                <img className="meeting-participant-avatar" src={item.avatars[0]} alt="profile picture1"/>
                                <img className="meeting-participant-avatar" src={item.avatars[1]} alt="profile picture2"/>
                            </div>
                            
                            {item.preview && 
                                <div className="blurred-chat-container">
                                    <img className="blurred-chat" src={item.preview} alt="preview picture"/>
                                    <div className="blurred-chat-text">
                                        <span>Babak Shammas</span>
                                        <span>1h 08m</span>
                                        <span>Recording 10/17 IDT Sync</span>
                                    </div>
                                </div>
                            }
                        </span>
                    </section>
                </div>
            )
        });

        return (
            // <section className="idt-chat">
            <section className="idt-scroll">
                {/* <header>
                    <h2 className="header-center header-center-purple">IDT</h2>
                    <h1 className="header-center header-center-under">Contoso Hospital</h1>
                    <ul className="icon-container">
                        <li className="back-arrow" onClick={this.backButton}><Link to={{pathname: '/teams', state: {prev: 'true'}}}><SVG
                            src={BackArrow}/></Link></li>
                        <li className="follow-icon"><SVG src={FollowIcon}/></li>
                    </ul>
                    <ul className="idt-sub-nav">
                        <Link to={{pathname:'/idt', state:{next:'false'}}}>
                            <li className={this.state.chat ? 'chat selected': "chat"} onClick={() => {this.toggleClass("chat")}}>
                                Chat
                            </li>
                        </Link>
                        <Link to={{pathname:'/files', state:{next:'false'}}}>
                            <li className={this.state.files ? 'files selected': "files"} onClick={() => {this.toggleClass("files")}}>
                                Files
                            </li>
                        </Link>
                        <Link to={{pathname:'/more', state:{next:'false'}}}>
                            <li className={this.state.more ? 'more selected': "more"} onClick={() => {this.toggleClass("more")}}>
                                More
                            </li>
                        </Link>
                    </ul>
                </header> */}
                <div className="chat-item-scroll">
                    {chatItem}
                    {meetItem}
                </div>
                <div className="new-conversation-tab">
                    <div className="new-conversation-tab-inner">
                        <SVG className="new-conversation-icon" src={ConversationNewIcon}/>
                        <span style={{margin: "3px 0 0 0"}}>Start a new conversation</span>
                    </div>
                 </div>
            </section>
        )
    }
}