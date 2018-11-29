import React, {Component} from "react";
import Header from "./Header";
import {Link} from "react-router-dom";
import SVG from 'react-inlinesvg';
import read from '../../icon/unread.svg';
// import CallMissed from '../../icon/CallMissed.svg';
// import Promote from '../../icon/Promote.svg';
import ReplyIcon from "../../icon/reply-icon.svg";
// import FollowIcon from "../../icon/follow-icon.svg";
import ChannelIcon from "../../icon/Channel.svg";
import ChannelFollowIcon from "../../icon/ChannelFollow.svg";
// import ChannelUnfollowIcon from "../../icon/ChannelUnfollow.svg";
import AtIcon from "../../icon/At.svg";
import LikeIcon from "../../icon/Like.svg";
import classNames from 'classnames';

//not DRY 
import { store } from '../store';
import { setChatHistory } from '../actions';

function dispatchChatAction(stage) {
    store.dispatch(setChatHistory(stage));
}
function activityLink(key){
    if(key === 0){
        store.dispatch(setChatHistory(-1));
    } else if(key===1){
        store.dispatch(setChatHistory(1));
    } else{
        console.log("do nothing");
    }
}

const Alert = () => {
    const alertType = {
        on: true,
        content: "URGENT! Darrell Salyer's blood sugar is hi...",
        image: "/icon/urgent-white.svg",
    };
    return(
        <Link id="alertContainer" className="alert-container" to='/single-chat/0' onClick={()=>{dispatchChatAction(0)}}>
            <section className={alertType.on ? "alert": "none"}>
                <img src={alertType.image} width="20" height="20"/>
                <span className="alert-message">{alertType.content}</span>
            </section>
        </Link>
    );
};

const header = {
    title: "Activity",
    links:['menu','search','Filter']
};

class Activity extends Component {
    constructor(props) {
        super(...arguments);
        this.state = {
            activityHistory: this.props.activityHistory
        }
        this.determineSvgSrc = this.determineSvgSrc.bind(this);
    }

    chatItem() {
        return this.state.activityHistory.map(((item, key)=>{
            let cName = classNames(
                'activity-message-svg',
                {
                    'purple-icon': item.iconColor,
                    'red-icon': !item.iconColor,
                }
            )
            return (
                <Link to='activity' key={key}>
                    <section className="activity-container" key={key} onClick={()=>{activityLink(key)}}>
                        <span className="activity-avatar-container">
                            <span className={item.read ? "read" : "unread"}>
                                <SVG src={read}/>
                            </span>
                            <img width="44px" src={item.avatar} alt="profile picture"/>
                        </span>
                        <ul>           
                            <li className={"activity-message-info" + " " + item.type}>
                                <span className={"activity-message " + item.type}>{item.name}</span>
                                <span className="time">{item.time}</span>
                            </li>
                            <li className="activity-message-info">
                                <span className="activity-message">{item.message}</span>
                            </li>
                            <li className="activity-message-info">
                                <SVG className={`activity-message-svg ${cName}`} src={this.determineSvgSrc(item.icon)}/>
                                <span className="activity-message">{item.iconText}</span>
                            </li>
                        </ul>
                    </section>
                </Link>
            );
        }));
    }

    determineSvgSrc(iconName){
        let src;
        if(iconName === "AtIcon"){
            src = AtIcon;
        } else if(iconName === "LikeIcon"){
            src = LikeIcon;
        } else if(iconName === "ChannelFollowIcon"){
            src = ChannelFollowIcon;
        } else if(iconName === "ChannelIcon"){
            src = ChannelIcon;
        } else{
            src = ReplyIcon;
        }
        return src;
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