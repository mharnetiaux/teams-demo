import React, {Component} from 'react';
import {Link} from "react-router-dom";
import SVG from 'react-inlinesvg';
import PhoneIcon from '../../../icon/phone.svg';
import BackArrow from '../../../icon/back-arrow.svg';
import CameraIcon from '../../../icon/camera.svg';

class SingleChat extends Component {

    constructor() {
        super(...arguments);
        this.toggleClass = this.toggleClass.bind(this);
        this.state = {
            conversation: true,
            files: false
        };
    }

    toggleClass() {
        this.setState(
        {
            conversation: !this.state.conversation,
            files: !this.state.files
        });
    };

    render() {
        return(
            <section className="single-chat">
                <header>
                    <h2 className="person"> Ruth Franklin</h2>
                    <ul className="icon-container">
                        <li className="back-arrow"><Link to={{pathname:'/chat', state:{prev:'true'}}}><SVG src={BackArrow}/></Link></li>
                        <li className="camera-icon"><SVG src={CameraIcon}/></li>
                        <li className="phone-icon"><SVG src={PhoneIcon}/></li>
                    </ul>
                    <ul className="chat-sub-nav">
                        <li className={this.state.conversation ? 'recent selected': "recent"} onClick={this.toggleClass}>
                            <Link to={{pathname:'/chat-content', state:{next:'false'}}}>Conversation</Link>
                        </li>
                        <li className={this.state.files ? 'contacts selected': "contacts"} onClick={this.toggleClass}>
                            <Link to={{pathname:'/chat-content', state:{next:'false'}}}>Files</Link>
                        </li>
                    </ul>
                </header>
            </section>
        );
    }
}

export default SingleChat;