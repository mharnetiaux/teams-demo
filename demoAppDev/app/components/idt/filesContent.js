import React, {Component} from 'react';
import {Link} from "react-router-dom";
import SVG from 'react-inlinesvg';
import PhoneImagesIcon from '../../../icon/phone-images.svg';
import BackArrow from '../../../icon/back-arrow.svg';
import CloseHeader from '../../../icon/close-header.svg';
import ShareIOS from '../../../icon/share-ios.svg';

export default class filesContent extends Component{
    constructor(){
        super(...arguments);
        let date = new Date();
        this.toggleClass = this.toggleClass.bind(this);
        this.backButton = this.backButton.bind(this);
        this.redirectFile = this.redirectFile.bind(this);
        this.state = {
            redirect: true,
            chat: false,
            files: true,
            more: false,
            idtFileItems: [
                {
                    name: "Patients admission notes",
                    time: date.toLocaleString('en-US', { month: 'numeric', day: 'numeric' }),
                    message: "40 KB Modified by Alvin Tao on ",
                    avatar: "/images/Folder.png",
                },
                {
                    name: "Bedside forms template",
                    time: date.toLocaleString('en-US', { month: 'numeric', day: 'numeric' }),
                    message: "40 KB Modified by Alvin Tao on ",
                    avatar: "/images/Folder.png",
                },
                {
                    name: "Referral templates",
                    time: date.toLocaleString('en-US', { month: 'numeric', day: 'numeric' }),
                    message: "40KB Modified by Alvin Tao on ",
                    avatar: "/images/Folder.png",
                },
                {
                    name: "Competitor Analysis.xlsx",
                    time: date.toLocaleString('en-US', { month: 'numeric', day: 'numeric' }),
                    message: "Modified by Alvin Tao on ",
                    avatar: "/images/Excel App.png",
                },
                {
                    name: "Bug Bash.docx",
                    time: date.toLocaleString('en-US', { month: 'numeric', day: 'numeric' }),
                    message: "Modified by Alvin Tao on ",
                    avatar: "/images/Word App.png",
                },
                {
                    name: "SalyerDarrellScan.png",
                    time: date.toLocaleString('en-US', { month: 'numeric', day: 'numeric' }),
                    message: "Modified by Alvin Tao on ",
                    svg: "PhoneImagesIcon",
                },
                {
                    name: "FluAwarenessPoster.png",
                    time: date.toLocaleString('en-US', { month: 'numeric', day: 'numeric' }),
                    message: "Modified by Alvin Tao on ",
                    svg: "PhoneImagesIcon",
                },
                {
                    name: "WilkersJohn.png",
                    time: date.toLocaleString('en-US', { month: 'numeric', day: 'numeric' }),
                    message: "Modified by Alvin Tao on ",
                    svg: "PhoneImagesIcon",
                },
                {
                    name: "RobeyVernScan.png",
                    time: date.toLocaleString('en-US', { month: 'numeric', day: 'numeric' }),
                    message: "Modified by Alvin Tao on ",
                    svg: "PhoneImagesIcon",
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

    /// Add selected class to previous page
    backButton() {
        setTimeout(() => {
            document.getElementsByClassName("page")[0].classList.add("page-selected");
        },100)
    }
    redirectFile() {
        this.setState((prevState) => {
            return {
                redirect: !prevState.redirect
            }
        });
    }

    render() {
        const idtFileItem = this.state.idtFileItems.map(((item, key)=>{
            return (
                // <Link to={{pathname:'/idt-patient-list', state:{prev:'true'}}} key={key}>
                    <section className="idt-files" key={key}>
                        <span className="idt-files-container">
                            {item.avatar ? <img src={item.avatar} alt="file picture"/> : <SVG src={PhoneImagesIcon}/>}
                        </span>
                        <ul onClick={this.redirectFile}>
                            <li className={"message-info"}><span>{item.name}</span></li>
                            <li className="message-info"><span className="message">{item.message}{item.time}</span></li>
                        </ul>
                    </section>
                // </Link>
            );
        }));

        if (this.state.redirect) {
            return (
                <section className="idt-chat">
                    <header>
                        <h2 className="header-center header-center-purple">IDT</h2>
                        <h1 className="header-center header-center-under">Contoso Hospital</h1>
                        <ul className="icon-container">
                            <li className="back-arrow" onClick={this.backButton}><Link to={{pathname: '/teams', state: {prev: 'true'}}}><SVG
                                src={BackArrow}/></Link></li>
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
                    {idtFileItem}
                </section>
            )
        } else{
            return (
            <section className="idt-chat">
                <header>
                    <h2 className="header-center">SalyerDarrellScan.png</h2>
                    <h1 className="header-center header-center-under">Contoso Hospital / IDT</h1>
                    <ul className="icon-container">
                        <li className="back-close" onClick={this.redirectFile}><SVG
                                src={CloseHeader}
                                />
                        </li>
                    </ul>
                </header>
                <div style={{background: "white", height: "100%"}}>
                    <img style={{width: "100%", transform: "translateY(80%)"}}src={"/images/Scan.png"} alt="scan"></img>
                </div>
                <footer className="footer-2" id="single-chat-footer-2">
                    <ul className="footer-icons">
                        <li className="share-ios"><SVG src={ShareIOS}/></li>
                    </ul>
                </footer>
            </section>
            )
        }
    }
}