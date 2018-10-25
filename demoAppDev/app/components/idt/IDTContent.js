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
        return (
            <section className="page-content">
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
            </section>
        )
    }
}