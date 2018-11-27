import React, {Component} from 'react';
import {Link} from "react-router-dom";
import SVG from 'react-inlinesvg';
import PlusIcon from '../../../icon/plus-add-new.svg';
import FollowIcon from "../../../icon/follow-icon.svg";
import BackArrow from '../../../icon/back-arrow.svg';

export default class moreContent extends Component{
    constructor(){
        super(...arguments);
        let date = new Date();
        // this.toggleClass = this.toggleClass.bind(this);
        // this.backButton = this.backButton.bind(this);
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

    /// Add selected class to previous page
    // backButton() {
    //     setTimeout(() => {
    //         document.getElementsByClassName("page")[0].classList.add("page-selected");
    //     },100)
    // }

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
                        <span className="idt-patient-arrow">
                            <img src={"/images/RightArrowPatients.png"} alt="arrow picture"/>
                        </span>
                    </section>
                </Link>
            );
        }));

        return (
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
                {idtMoreItem}
                <div className="idt-add-new">
                    <span className="idt-add-new-svg"><SVG src={PlusIcon}/></span>
                    <span className="idt-add-new-text">Add new</span>
                </div>
            </section>
        
        )
    }
}