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

/// Overwrite inline styles provided by UrgentModal
UrgentModal.defaultStyles.overlay.backgroundColor = 'rgba(0, 0, 0, 0.5)';

class SingleChat extends Component {
    constructor() {
        super();
        this.backButton = this.backButton.bind(this);
        this.urgentMessage = this.urgentMessage.bind(this);
        this.typeWriter = this.typeWriter.bind(this);
        this.toggleCameraControls = this.toggleCameraControls.bind(this);
        this.toggleGalleryModal = this.toggleGalleryModal.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.state = {
            conversation: true,
            files: false,
            counter: 0,
            response: {
                message: this.props.chatResponseMessage,
                read: true,
                urgent: false
            },
            received: [
                {
                    name: "Ruth F.",
                    pic: "/images/profile-small.png",
                    priority: "URGENT!",
                    message: "Darell Salyer's blood sugar is high. I'm updating his diagnosis to prediabetic. Need to evaluate treatment plan.",
                    urgent: true,
                    urgentImg: "../../../icon/urgent.svg"
                }
            ],
            stateOfChat: this.props.stateOfChat,
            showGalleryModal: false,
            modalIsOpen: false
        };
    }

    /// Modal that closes when Important is selected
    openModal() {
        this.setState({modalIsOpen: true});
        const contentBody = document.getElementById("single-chat");
        contentBody.classList.add("urgent-open");
    }

    /// Modal that opens when Important is selected
    closeModal() {
        this.setState({modalIsOpen: false});
        const contentBody = document.getElementById("single-chat");
        contentBody.classList.remove("urgent-open");
    }

    /// Pass string to tell input what to write on keyDown() event
    typeWriter(event) {
        event.preventDefault();
        document.getElementById("send").classList.add("send");
        if(this.state.counter < this.state.response.message.length){
            document.getElementById("send-message").value += this.state.response.message.charAt(this.state.counter);
            this.state.counter++;
            this.adjustHeight();
        }
    }
    
    /// Adjust height of <textarea> depending on size of content
    adjustHeight() {
        const a = document.getElementById("send-message");
        a.style.height = (a.scrollHeight > a.clientHeight) ? (a.scrollHeight - 34) + "px" : "1px";
    }

    /// Read state object containing array of objects
    getMessage() {
        return this.state.received.map((item, key) => {
            return (
                <section className="message" id="message" key={key}>
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
    sendMessage() {
        const messageContainer = document.getElementById("messages"),
              textNode = document.createElement("section"),
              textAreaElement = document.getElementById("send-message");

        textNode.classList.add("response");
        document.getElementById("send").classList.remove("send");
        textNode.textContent = this.state.response.message;
        messageContainer.appendChild(textNode);
        textAreaElement.value = "";
        textAreaElement.style.height = "1rem";
        document.getElementById("input-message").classList.remove("urgent");

        if(this.state.response.urgent) {
            textNode.classList.add("urgent");
        }else {
            textNode.classList.remove("urgent");
        }

        this.setState({
            counter: 0,
            response: {
                message: "Order a CT scan of Darell Salyer's left lung before today's IDT."
            }
        });
    }

    /// Mark message as URGENT
    urgentMessage(event){
        event.preventDefault();
        const responseWrapper = document.getElementById("input-message"),
              reminder = document.createElement("span"),
              title = document.createElement("span");
        responseWrapper.classList.add("urgent");
        title.textContent = "URGENT!";
        reminder.textContent = "Notify recipient every 2 min for 20 min";
        responseWrapper.appendChild(title);
        responseWrapper.appendChild(reminder);

        this.setState({
            response: {
                message: this.state.response.message,
                urgent: !this.state.response.urgent
            }
        });

        this.closeModal();
    }

    /// Shows/Hides the bottom modal that pulls up the camera when clicked
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

    /// Add selected class to previous page
    backButton() {
        setTimeout(() => {
            document.getElementsByClassName("page")[0].classList.add("page-selected");
        },100)
    }

    componentDidMount(){
        setTimeout(()=>{
            document.getElementById("single-chat").classList.add("open");
        },50)
    }
    
    render() {
        if (this.state.redirect) {
            return <Redirect push to="/cameraOverlay"/>;
        }
        else {
            return (
                <section className="single-chat" id="single-chat">
                    <header id="single-chat-header">
                        <h2 className="person"> {this.props.currentContact}</h2>
                        <ul className="icon-container">
                            <li className="back-arrow" onClick={this.backButton}><Link to='/'><SVG src={BackArrow}/></Link></li>
                            <li className="camera-icon"><SVG src={CameraIcon}/></li>
                            <li className="phone-icon"><SVG src={PhoneIcon}/></li>
                        </ul>
                        <ul className="chat-sub-nav">
                            <li className={this.state.conversation ? 'recent selected' : "recent"}>
                                <Link to={{pathname: '/chat-content', state: {next: 'false'}}}>Conversation</Link>
                            </li>
                            <li className={this.state.files ? 'contacts selected' : "contacts"}>
                                <Link to={{pathname: '/chat-content', state: {next: 'false'}}}>Files</Link>
                            </li>
                        </ul>
                    </header>
                    <section className="message-received" id="messages">
                        {this.state.stateOfChat==="StateOne" &&
                            this.getMessage()
                        }
                        <span id="scroll"></span>
                    </section>
                    <section className="input-message" id="input-message">
                        <form>
                            <textarea placeholder="Send a message" id="send-message" onKeyDown={this.typeWriter}></textarea>
                        </form>
                    </section>
                    <footer className="footer-2" id="single-chat-footer-2">
                        <ul className="footer-icons">
                            <li onClick={this.toggleGalleryModal}><SVG src={PhoneImagesIcon}/></li>
                            <li onClick={this.openModal} id="important"><SVG src={PhoneImportantIcon}/></li>
                            <li><SVG src={PhoneAttachmentIcon}/></li>
                            <li><SVG src={PhoneEmailIcon}/></li>
                            <li><SVG src={PhoneLocationIcon}/></li>
                            <li><SVG src={PhoneEmojiIcon}/></li>
                            <li id="send" onClick={this.sendMessage}><SVG src={PhoneSendIcon}/></li>
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
                        className="urgent-modal"
                        isOpen={this.state.modalIsOpen}
                        onRequestClose={this.closeModal}
                    >
                        <section className="priority-type">
                            <h2>Priority</h2>
                            <span className="priority-modal-container">
                                <span className="priority important">
                                    <h3>IMPORTANT</h3>
                                    <span className="priority-content">Message will be marked as important</span>
                                </span>
                                <span className="priority urgent" onClick={this.urgentMessage}>
                                   <h3>URGENT</h3>
                                    <span className="priority-content">Notify recipient every 2 minutes for 20 minutes</span>
                                </span>
                            </span>
                        </section>
                    </UrgentModal>
                </section>
            );
        }
    }
}

export default SingleChat;