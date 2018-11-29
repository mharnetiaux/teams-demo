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
                {idtMoreItem}
                <div className="idt-add-new">
                    <span className="idt-add-new-svg"><SVG src={PlusIcon}/></span>
                    <span className="idt-add-new-text">Add new</span>
                </div>
            </section>
        
        )
    }
}