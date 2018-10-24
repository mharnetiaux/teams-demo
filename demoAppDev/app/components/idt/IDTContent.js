import React, {Component} from 'react';
import {Link} from "react-router-dom";

export default class IDTContent extends Component{
    constructor(){
        super(...arguments);
        this.toggleClass = this.toggleClass.bind(this);
        this.state = {
            chat: true,
            files: false,
            more: false
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
            </section>
        
        )
    }
}