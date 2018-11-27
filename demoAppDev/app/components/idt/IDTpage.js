import React, {Component} from 'react';
import {Link} from "react-router-dom";
import SVG from 'react-inlinesvg';
import FollowIcon from "../../../icon/follow-icon.svg";
import BackArrow from '../../../icon/back-arrow.svg';
import IDTcontent from "./IDTContent";
import FilesContent from "./filesContent";
import MoreContent from "./moreContent";

export default class IDTContent extends Component{
    constructor(){
        super();
        this.backButton = this.backButton.bind(this);
        this.toggleClass = this.toggleClass.bind(this);
        this.state = {
            chat: true,
            files: false,
            more: false,
            currentlyShowing: "chat"
        };
    }

    toggleClass(navValue) {
        if(navValue === "chat"){
            this.setState({
                chat: true, files: false, more: false,
                currentlyShowing: "chat"
            });
        } else if(navValue === "files"){
            this.setState({
                chat: false, files: true, more: false,
                currentlyShowing: "files"
            });
        } else{
            this.setState({
                chat: false, files: false, more: true,
                currentlyShowing: "more"
            });
        }

    };

    /// Add selected class to previous page
    backButton() {
        setTimeout(() => {
            document.getElementsByClassName("page")[0].classList.add("page-selected");
        },100)
    }

    render() {
        return (
            <section className="idt-chat">
                <header>
                    <h2 className="header-center header-center-purple">IDT</h2>
                    <h1 className="header-center header-center-under">Contoso Hospital</h1>
                    <ul className="icon-container">
                        <li className="back-arrow" onClick={this.backButton}><Link to={{pathname: '/teams', state: {prev: 'true'}}}><SVG
                            src={BackArrow}/></Link></li>
                        <li className="follow-icon"><SVG src={FollowIcon}/></li>
                    </ul>
                    <ul className="idt-sub-nav">
                        {/* <Link to={{pathname:'/idt', state:{next:'false'}}}> */}
                            <li className={this.state.chat ? 'chat selected': "chat"} onClick={() => {this.toggleClass("chat")}}>
                                Chat
                            </li>
                        {/* </Link> */}
                        {/* <Link to={{pathname:'/files', state:{next:'false'}}}> */}
                            <li className={this.state.files ? 'files selected': "files"} onClick={() => {this.toggleClass("files")}}>
                                Files
                            </li>
                        {/* </Link> */}
                        {/* <Link to={{pathname:'/more', state:{next:'false'}}}> */}
                            <li className={this.state.more ? 'more selected': "more"} onClick={() => {this.toggleClass("more")}}>
                                More
                            </li>
                        {/* </Link> */}
                    </ul>
                </header>
                {this.state.currentlyShowing==="chat" && <IDTcontent/>}
                {this.state.currentlyShowing==="files" && <FilesContent/> }
                {this.state.currentlyShowing==="more" && <MoreContent/> }
                
            </section>
        )
    }
}