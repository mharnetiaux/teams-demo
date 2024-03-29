import React, {Component} from 'react';
import {Link} from "react-router-dom";
import { Redirect } from 'react-router';
import SVG from 'react-inlinesvg';
import UrgentModal from 'react-modal';
import PhoneIcon from '../../../icon/phone.svg';
import BackArrow from '../../../icon/back-arrow.svg';
import CameraIcon from '../../../icon/camera.svg';
import PhoneSendIcon from '../../../icon/phone-send.svg';
import SendIcon from '../../../icon/Send.svg';
import PhoneEmojiIcon from '../../../icon/phone-emoji.svg';
import PhoneLocationIcon from '../../../icon/phone-location.svg';
import PhoneEmailIcon from '../../../icon/phone-email.svg';
import PhoneAttachmentIcon from '../../../icon/phone-attachment.svg';
import PhoneImportantIcon from '../../../icon/phone-important.svg';
import PhoneImagesIcon from '../../../icon/phone-images.svg';
import CameraModal from './CameraModal';

import { store } from '../../store';

/// Overwrite inline styles provided by UrgentModal
UrgentModal.defaultStyles.overlay.backgroundColor = 'rgba(0, 0, 0, 0.5)';
let chatHistory = store.getState().chatHistory;

class SingleChat extends Component {
    constructor() {
        super(...arguments);
        this.backButton = this.backButton.bind(this);
        this.urgentMessage = this.urgentMessage.bind(this);
        this.typeWriter = this.typeWriter.bind(this);
        this.toggleCameraControls = this.toggleCameraControls.bind(this);
        this.toggleGalleryModal = this.toggleGalleryModal.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.state = {
            counter: 0,
            response: chatHistory[this.props.match.params.id].response,
            received: chatHistory[this.props.match.params.id].received,
            chatHistory: chatHistory,
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
        // window.Keyboard.hideFormAccessoryBar(true);
        document.getElementById("send").classList.add("send-fill");
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
        return this.state.chatHistory[this.props.match.params.id].received.map((item, key) => {
            return (
                <section className="message" id="message" key={key}>
                    <img className="profile-pic" src={item.pic}/>
                    <ul className={item.urgent ? "urgent" : null}>
                        <li className="name">{item.name}</li>
                        <li className="priority">{item.priority}</li>
                        <li className="content">{item.message}</li>
                    </ul>
                    {item.urgent ? <img src={item.urgentImg}/> : null}
                </section>
            )
        });
    }

    /// Return user input as message
    sendMessage() {
        const messageContainer = document.getElementById("messages"),
              textNode = document.createElement("section"),
              textAreaElement = document.getElementById("send-message");

        if(this.props.showImage){
            console.log("HELLOOOOOOOOOOOOOOOOOOOOOOO!");
            document.getElementById("imageNodeID").style.opacity = 1;
            this.props.toggleShowImage();

            document.getElementById("send").classList.remove("send-fill");
            textAreaElement.value = "";
            textAreaElement.style.height = "1rem";

            this.setState({
                counter: 0,
                response: {
                    message: "Need a consult."
                }
            });
            
        } else{ 
            textNode.classList.add("response");
            document.getElementById("send").classList.remove("send-fill");
            if(this.state.response.urgent) {
                textNode.innerHTML = '<span style="display:block; padding: 2px 4px 6px 0px;">URGENT!</span>';
                textNode.innerHTML += this.state.response.message;
            }
            else{
                textNode.textContent = this.state.response.message;
            }
            
            messageContainer.appendChild(textNode);
            textAreaElement.value = "";
            textAreaElement.style.height = "1rem";
            document.getElementById("input-message").classList.remove("urgent");

            if(this.state.response.urgent) {
                textNode.classList.add("urgent");
            }else {
                textNode.classList.remove("urgent");
            }

            //added back in
            this.setState({
                counter: 0
            });
        }
        
        textAreaElement.classList.remove("image-send-message");
        textAreaElement.style.cssText = `background: none`;
        textAreaElement.style.height = "1rem";
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

    componentDidMount() {
        //console.log(this.state.chatHistory[this.props.match.params.id].received);
        setTimeout(() => {
            document.getElementById("single-chat").classList.add("open");
        },50)
    }
    
    render() {
        if (this.state.redirect) {
            return <Redirect push to="/cameraOverlay"/>;
        }
        else {
            return (
                <section className="page single-chat" id="single-chat">
                    <header id="single-chat-header">
                        <h2 className="person">{this.state.chatHistory[this.props.match.params.id].name}</h2>
                        <ul className="icon-container">
                            <li className="back-arrow" onClick={this.backButton}><Link to='/'><SVG src={BackArrow}/></Link></li>
                            <li className="camera-icon"><SVG src={CameraIcon}/></li>
                            <li className="phone-icon"><SVG src={PhoneIcon}/></li>
                        </ul>
                        <ul className="chat-sub-nav">
                            <li className="recent">
                                <Link to={{pathname: '/', state: {next: 'false'}}}>Conversation</Link>
                            </li>
                            <li className="contacts">
                                <Link to={{pathname: '/', state: {next: 'false'}}}>Files</Link>
                            </li>
                        </ul>
                    </header>
                    <section className="message-received" id="messages">
                        {this.getMessage()}
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
                            <li id="send" className="send-gray" onClick={this.sendMessage}><SVG src={SendIcon}/></li>
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
                                    <h3>Important</h3>
                                    <span className="priority-content">Message will be marked as important</span>
                                </span>
                                <span className="priority urgent" onClick={this.urgentMessage}>
                                   <h3>Urgent</h3>
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