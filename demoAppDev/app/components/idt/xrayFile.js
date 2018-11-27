import React, {Component} from 'react';
import SVG from 'react-inlinesvg';
import {Link} from "react-router-dom";
import CloseHeader from '../../../icon/close-header.svg';
import ShareIOS from '../../../icon/share-ios.svg';

export default class xrayFile extends Component{
    constructor(){
        super();
        this.state = {
        };
    }

    render() {
        return (
            <section className="idt-chat">
                <header>
                    <h2 className="header-center">SalyerDarrellScan.png</h2>
                    <h1 className="header-center header-center-under">Contoso Hospital / IDT</h1>
                    <ul className="icon-container">
                        <Link to={{pathname:'/idt', state:{prev:'true'}}}>
                            <li className="back-close"><SVG
                                src={CloseHeader}
                                />
                            </li>
                        </Link>
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

