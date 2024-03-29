import React, {Component} from 'react';
import SVG from 'react-inlinesvg';
import PhoneImagesIcon from '../../../icon/phone-images.svg';
import { Redirect } from 'react-router-dom'

export default class filesContent extends Component{
    constructor(){
        super(...arguments);
        let date = new Date();
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
                <section className="idt-scroll">
                    {idtFileItem}
                </section>
            )
        } 
        else{
            return (
                <Redirect to='/xrayFile'/>
            );
        }
    }
}