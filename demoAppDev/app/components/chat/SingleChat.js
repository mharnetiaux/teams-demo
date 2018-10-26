import React, {Component} from 'react';
import {Link} from "react-router-dom";
import { Redirect } from 'react-router';
import SVG from 'react-inlinesvg';
import UrgentModal from 'react-modal';
import PhoneIcon from '../../../icon/phone.svg';
import BackArrow from '../../../icon/back-arrow.svg';
import CameraIcon from '../../../icon/camera.svg';
import PhoneSendIcon from '../../../icon/phone-send.svg';
import PhoneEmojiIcon from '../../../icon/phone-emoji.svg';
import PhoneLocationIcon from '../../../icon/phone-location.svg';
import PhoneEmailIcon from '../../../icon/phone-email.svg';
import PhoneAttachmentIcon from '../../../icon/phone-attachment.svg';
import PhoneImportantIcon from '../../../icon/phone-important.svg';
import PhoneImagesIcon from '../../../icon/phone-images.svg';
import CameraModal from './CameraModal';

UrgentModal.defaultStyles.overlay.backgroundColor = 'rgba(0, 0, 0, 0.5)';

class SingleChat extends Component {

    constructor() {
        super(...arguments);
        this.toggleClass = this.toggleClass.bind(this);
        this.typeWriter = this.typeWriter.bind(this);
        this.toggleCameraControls = this.toggleCameraControls.bind(this);
        this.toggleGalleryModal = this.toggleGalleryModal.bind(this);
        this.getMessageBody = this.getMessageBody.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.state = {
            conversation: true,
            files: false,
            counter: 0,
            message: {
                received: [
                    {
                        name: "Ruth F.",
                        pic: "/images/profile-small.png",
                        priority: "URGENT!",
                        message: "Darell Salyer's blood sugar is high. I'm updating his diagnosis to prediabetic. Need to evaluate treatment plan.",
                        urgent: true,
                        urgentImg: "/images/urgent_red.png"
                    }
                ],
                response: [
                    {
                        message: "Might be the dexamethasone. Will order additional tests.",
                        read: true,
                        readIcon: "/images/message.read.png"
                    },
                    {
                        message: "Order a CT scan of Darell Salyer's left lung before today's IDT.",
                        read: true,
                        readIcon: "/images/message.read.png"
                    }
                ]
            },
            showGalleryModal: false,
            history: "",
            modalIsOpen: false
        };
    }
    
    openModal() {
        this.setState({modalIsOpen: true});
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    /// Switch class on element
    toggleClass() {
        this.setState(
            {
                conversation: !this.state.conversation,
                files: !this.state.files
            });
    };

    /// Pass string to tell input what to write
    typeWriter(event) {
        event.preventDefault();
        const messageObj = this.state.message.response.map(item => {
                return item.message;
            }),
            message = messageObj.toString(),
            send = document.getElementById("send").classList.add("send");
        
        if (this.state.counter < message.length) {
            document.getElementById("send-message").value += message.charAt(this.state.counter);
            this.state.counter++;
            this.adjustHeight();
        }
    }
    
    /// Adjust height of input depending on size of content
    adjustHeight() {
        const a = document.getElementById("send-message");
        a.style.height = (a.scrollHeight > a.clientHeight) ? (a.scrollHeight - 34) + "px" : "1px";
    }

    /// Read state object containing array of objects
    getMessages() {
        return this.state.message.received.map((item, key) => {
            return (
                <section className="message" key={key}>
                    <img className="profile-pic" src={item.pic}/>
                    <ul className={"message-content" + item.urgent ? "urgent" : null}>
                        <li className="name">{item.name}</li>
                        <li className="priority">{item.priority}</li>
                        <li className="content">{item.message}</li>
                    </ul>
                    <img className={"urgent" + " " + item.urgent ? "yes" : "no"} src={item.urgentImg}/>
                </section>
            )
        });
    }

    /// Return user input as message
    getMessageBody() {
        const elementSendMessage = document.getElementById("send-message");
        const text = elementSendMessage.value;
        document.getElementById("send").classList.remove("send");
        elementSendMessage.value = "";
        elementSendMessage.style.height = "1rem";

        this.setState({
            history: text
        }, () => {
            const responseMessage = this.state.history;
            const message = document.createElement("section");
            message.classList.add("response");
            message.textContent = responseMessage;
            document.getElementById("messages").appendChild(message);
        });
    }

    /// Shows/hides the bottom modal that pulls up the camera when clicked
    toggleGalleryModal() {
        console.log(`toggling modal gallery: ${this.state.showGalleryModal}`);
        this.setState((prevState) => {
            return {
                showGalleryModal: !prevState.showGalleryModal
            }
        });
    }

    toggleCameraControls() {
        this.setState({redirect: true});
    }

    render() {
        if (this.state.redirect) {
            return <Redirect push to="/cameraOverlay"/>;
        }
        else {
            return (
                <section className="single-chat">
                    <header id="single-chat-header">
                        <h2 className="person"> Ruth Franklin</h2>
                        <ul className="icon-container">
                            <li className="back-arrow"><Link to={{pathname: '/', state: {prev: 'true'}}}><SVG
                                src={BackArrow}/></Link></li>
                            <li className="camera-icon"><SVG src={CameraIcon}/></li>
                            <li className="phone-icon"><SVG src={PhoneIcon}/></li>
                        </ul>
                        <ul className="chat-sub-nav">
                            <li className={this.state.conversation ? 'recent selected' : "recent"}
                                onClick={this.toggleClass}>
                                <Link to={{pathname: '/chat-content', state: {next: 'false'}}}>Conversation</Link>
                            </li>
                            <li className={this.state.files ? 'contacts selected' : "contacts"}
                                onClick={this.toggleClass}>
                                <Link to={{pathname: '/chat-content', state: {next: 'false'}}}>Files</Link>
                            </li>
                        </ul>
                    </header>
                    <section className="message-received" id="messages">
                        {this.getMessages()}
                        <span id="scroll"></span>
                    </section>
                    <section className="input-message">
                        <form>
                            <textarea placeholder="Send a message" id="send-message"
                                      onKeyDown={this.typeWriter}></textarea>
                        </form>
                    </section>
                    <footer className="footer-2">
                        <ul className="footer-icons">
                            <li onClick={this.toggleGalleryModal}><SVG src={PhoneImagesIcon}/></li>
                            <li onClick={this.openModal} id="important"><SVG src={PhoneImportantIcon}/></li>
                            <li><SVG src={PhoneAttachmentIcon}/></li>
                            <li><SVG src={PhoneEmailIcon}/></li>
                            <li><SVG src={PhoneLocationIcon}/></li>
                            <li><SVG src={PhoneEmojiIcon}/></li>
                            <li id="send" onClick={this.getMessageBody}><SVG src={PhoneSendIcon}/></li>
                        </ul>
                    </footer>
                    {this.state.showGalleryModal ?
                        <CameraModal
                            closeMe={this.toggleGalleryModal}
                            toggleCameraControls={this.toggleCameraControls}
                        />
                        : null
                    }
                    <UrgentModal
                        isOpen={this.state.modalIsOpen}
                        onAfterOpen={this.afterOpenModal}
                        onRequestClose={this.closeModal}
                    ></UrgentModal>
                </section>
            );
        }
    }
}
export default SingleChat;