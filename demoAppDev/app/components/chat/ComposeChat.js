import React, {Component} from 'react';
import {Link} from "react-router-dom";
import { Redirect } from 'react-router';
import SVG from 'react-inlinesvg';
import UrgentModal from 'react-modal';
import BackArrow from '../../../icon/back-arrow.svg';
import CameraModal from './CameraModal';
import { store } from '../../store';
import PhoneImagesIcon from "../../../icon/phone-images.svg";
import PhoneImportantIcon from "../../../icon/phone-important.svg";
import PhoneAttachmentIcon from "../../../icon/phone-attachment.svg";
import PhoneEmailIcon from "../../../icon/phone-email.svg";
import PhoneLocationIcon from "../../../icon/phone-location.svg";
import PhoneEmojiIcon from "../../../icon/phone-emoji.svg";
import SendIcon from "../../../icon/Send.svg";

/// Overwrite inline styles provided by UrgentModal
UrgentModal.defaultStyles.overlay.backgroundColor = 'rgba(0, 0, 0, 0.5)';
let composeHistory = store.getState().composeHistory;

class ComposeChat extends Component {
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
        this.toggleContacts = this.toggleContacts.bind(this);
        this.state = {
            counter: 0,
            name: "John Snow,",
            message: composeHistory.message,
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
        document.getElementById("send").classList.add("send-fill");
        document.getElementById("single-chat-footer-2").classList.add("open");
        if(this.state.counter <= this.state.name.length){
            document.getElementById("send-message").value += this.state.name.charAt(this.state.counter);
            this.state.counter++;
            this.adjustHeight();
        }
    }


    /// Open/Close individual Team Menu
    toggleContacts() {
        const contact = document.getElementsByClassName("contact"),
              inputCompose = document.getElementById("send-message"),
              inputComposeContainer = document.getElementById("to-message"),
              footer = document.getElementById("single-chat-footer-2"),
              inputSendMessage = document.getElementById("input-message");

        for(let name of contact) {
            name.onclick = () => {
               this.setState({
                   name: name.innerHTML
               }, () => {
                   inputCompose.value = this.state.name + ",";
                   inputComposeContainer.classList.add("open");
                   document.getElementsByClassName("contact-list")[0].classList.remove("open");
                   footer.classList.add("open");
                   inputSendMessage.classList.add("open");
                   inputCompose.focus();
               })
            }
        }
    }

    /// Adjust height of <textarea> depending on size of content
    adjustHeight() {
        const a = document.getElementById("send-message");
        a.style.height = (a.scrollHeight > a.clientHeight) ? (a.scrollHeight - 34) + "px" : "1px";
    }
    
    /// Return user input as message
    sendMessage() {
        const messageContainer = document.getElementById("messages"),
            textNode = document.createElement("section"),
            textAreaElement = document.getElementById("send-message");

        if(this.props.showImage){
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
        this.toggleContacts();

        setTimeout(() => {
            document.getElementById("single-chat").classList.add("open");
        },50);

        setTimeout(() => {
            document.getElementById("send-message").focus();
        },100);

        setTimeout(() => {
            document.getElementsByClassName("contact-list")[0].classList.add("open");
        },500);
    }

    render() {
        if (this.state.redirect) {
            return <Redirect push to="/cameraOverlay"/>;
        }
        else {
            return (
                <section className="page single-chat compose" id="single-chat">
                    <header id="single-chat-header">
                        <h2 className="person new-chat">New Chat</h2>
                        <ul className="icon-container">
                            <li className="back-arrow" onClick={this.backButton}><Link to='/'><SVG src={BackArrow}/></Link></li>
                        </ul>
                    </header>
                    <section className="to-message" id="to-message">
                        <form>
                            <label>To:</label>
                            <textarea placeholder="Start typing name or group" id="send-message" onKeyDown={this.typeWriter}></textarea>
                        </form>
                    </section>
                    <section className="contact-list">
                        <h3>Suggestions</h3>
                        <ul>
                            <li className="contact">John Snow</li>
                        </ul>
                    </section>
                    <section className="input-message" id="input-message">
                        <form>
                            <textarea placeholder="Send a message" id="send-message"></textarea>
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

export default ComposeChat;