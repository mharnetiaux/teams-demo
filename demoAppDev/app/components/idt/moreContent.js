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
                    name: "Patients",
                    time: date.toLocaleString('en-US', { month: 'numeric', day: 'numeric' }),
                    message: "Modified by You on ",
                    avatar: "/images/Patient.png",
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
                    <section className="idt-container" key={key}>
                    <span className="idt-patient-container">
                        <img src={item.avatar} alt="patient picture"/>
                    </span>
                        <ul>
                            <li className={"message-info"}><span>{item.name}</span></li>
                            <li className="message-info"><span className="message">{item.message}{item.time}</span></li>
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
                <div className="idt-add-new">+ Add new</div>
            </section>
        
        )
    }
}