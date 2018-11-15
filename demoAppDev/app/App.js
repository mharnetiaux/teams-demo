import './styles/app.less';
import React, {Component} from 'react';
import {render} from 'react-dom';
import DemoAppRouter from './Router/MainRoutes';
const date = new Date();

class App extends Component{
    constructor(){
            super();
            this.resizeForKeyboard = this.resizeForKeyboard.bind(this);
            this.setImgCameraSrc = this.setImgCameraSrc.bind(this);
            this.showKeyboard = this.showKeyboard.bind(this);
            this.toggleShowImage = this.toggleShowImage.bind(this);
            this.resizeForKeyboard = this.resizeForKeyboard.bind(this);
            this.setImgCameraSrc = this.setImgCameraSrc.bind(this);
            this.showKeyboard = this.showKeyboard.bind(this);
            this.toggleShowImage = this.toggleShowImage.bind(this);

            this.state = {
                kbShowing: false,
                imgCameraSrc: undefined,
                showImage: false,
                chatHistory: [
                    {
                        read: false,
                        name: "Ruth Franklin",
                        time: date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }),
                        message: "Darell Salyer's blood sugar is high ...",
                        priorityIcon: "/icon/urgent.svg",
                        priority: "- URGENT",
                        avatar: "/images/profile_1.png"
                    },
                    {
                        read: true,
                        name: "Bernadette Guibord",
                        time: "9:16 AM",
                        message: "Can you please send the file over ...",
                        priorityIcon: "/icon/urgent.svg",
                        priority: "",
                        avatar: "/images/profile_2.png"
                    },
                    {
                        read: true,
                        name: "Laurence Gilbertson",
                        time: "Yesterday",
                        message: "great, talk to you tomorrow?",
                        priorityIcon: "/icon/urgent.svg",
                        priority: "",
                        avatar: "/images/profile_3.png"
                    },
                    {
                        read: true,
                        name: "Cassandra Dunn",
                        time: "Thursday",
                        message: "Thank you!",
                        priorityIcon: "/icon/urgent.svg",
                        priority: "",
                        avatar: "/images/profile_4.png"
                    },
                    {
                        read: true,
                        name: "Pete. Krystal, Darren + 4",
                        time: "Monday",
                        message: "Rita: See attached Image",
                        priorityIcon: "/icon/urgent.svg",
                        priority: "",
                        avatar: "/images/profile_5.png"
                    },
                    {
                        read: true,
                        name: "Edmee Plant",
                        time: "5/20",
                        message: "The sales team are owning that problem.",
                        priorityIcon: "/icon/urgent.svg",
                        priority: "",
                        avatar: "/images/profile_5.png"
                    }
                ],
                shouldShowImageInsteadOfSendMessage: false
            };
        }

    resizeForKeyboard(){
        console.log("resizeForKeybord called!!!!");
        this.setState({
            kbShowing: !this.state.kbShowing
        });
    }

    setImgCameraSrc(value){
        console.log("SET IMG CAMERA SOURCE!!!!!!!!!");
        this.setState({
            imgCameraSrc: value
        });
    }

    toggleShowImage(){
        this.setState({
            showImage: true
        });
    }

    showKeyboard(){
        window.setTimeout(() =>{
            console.log("SHOWING KEYBOARD!!!!!!!!");
            // window.Keyboard.show(); doesn't work because iOS sucks, have to focus instead and change config.xml
            document.getElementById("send-message").focus();
            document.getElementById("send-message").style.cssText = `padding: 0px 0px 0px 0px; width:100%; height: 150px; background:url(${this.state.imgCameraSrc}) no-repeat; background-size: 150px 200px; background-position: 5% 5%;`;
            const a = document.getElementById("send-message");
            a.focus();
            a.style.cssText = `background:url(${this.state.imgCameraSrc}) no-repeat;`;
            a.classList.add("image-send-message");
            a.value = "";
            document.getElementById("send").classList.add("send");

            const messageContainer = document.getElementById("messages"),
                textNode = document.createElement("section"),
                imageNode = document.createElement("section");
            //add responses again
            textNode.classList.add("response");
            textNode.textContent = "Dr. Gilbertson, are you available?";
            messageContainer.appendChild(textNode);

            //add image
            imageNode.id = "imageNodeID";
            imageNode.classList.add("response-image");
            imageNode.style.cssText = `background:url(${this.state.imgCameraSrc}) no-repeat;  background-size: 300px 400px; background-position: 0% 0%; opacity:1;`;

            messageContainer.appendChild(imageNode);

        }, 0);
    }

    render(){
        return (
            <DemoAppRouter
                {...this.state}
                chatHistory = {this.state.chatHistory}
                resizeForKeyboard={this.resizeForKeyboard}
                showKeyboard={this.showKeyboard}
                setImgCameraSrc={this.setImgCameraSrc}
                toggleShowImage={this.toggleShowImage}
            />
        )
    }
}

render((
    <App />
), document.getElementById('root'));


