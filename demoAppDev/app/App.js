import './styles/app.less';
import React, {Component} from 'react';
import {render} from 'react-dom';
import reducer from './reducers';
import { createStore } from 'redux';

import DemoAppRouter from './router/MainRoutes';
const date = new Date();

import { store } from './store';

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

            this.state = {
                kbShowing: false,
                imgCameraSrc: undefined,
                showImage: false,
                activityHistory: [
                    {
                        read: false,
                        type: "",
                        name: "Ruth replied",
                        time: date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }),
                        message: "Priority messages chat demonst...",
                        avatar: "/images/profile_1.png"
                    },
                    {
                        read: false,
                        type: "",
                        name: "Bernadette replied",
                        time: "9:16 AM",
                        message: "Image annotation in chat demon...",
                        avatar: "/images/profile_2.png"
                    },
                    {
                        read: false,
                        type: "",
                        name: "Missed call from Laurence",
                        time: "Yesterday",
                        message: "That sounds right",
                        avatar: "/images/profile_3.png",
                        missed: true
                    },
                    {
                        read: false,
                        type: "",
                        name: "Cassandra replied",
                        time: "Thursday",
                        message: "No urgency",
                        avatar: "/images/profile_4.png"
                    },
                    {
                        read: false,
                        type: "",
                        name: "Edmee replied",
                        time: "5/20",
                        message: "The sales team are owning that problem.",
                        avatar: "/images/profile_6.png"
                    }
                ]
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
        console.log("HELLOOOOOOOOOOOOOOOOOOOOOOO! showing image");
        this.setState((prevState) => {
            return { 
                showImage: !prevState.showImage
            }
        });
    }

    showKeyboard(){
        window.setTimeout(() =>{
            console.log("SHOWING KEYBOARD!!!!!!!!");
            // window.Keyboard.show(); doesn't work because iOS sucks, have to focus instead and change config.xml
            // document.getElementById("send-message").focus();
            // document.getElementById("send-message").style.cssText = `padding: 0px 0px 0px 0px; width:100%; height: 150px; background:url(${this.state.imgCameraSrc}) no-repeat; background-size: 50px 80px; background-position: 5% 5%;`;
            const a = document.getElementById("send-message");
            a.style.cssText = `padding: 0px 0px 0px 0px; width:100%; height: 150px; background:url(${this.state.imgCameraSrc}) no-repeat; background-size: 100px 160px; background-position: 5% 5%; caret-color: transparent;`;
            a.classList.add("image-send-message");
            a.value = "";
            document.getElementById("send").classList.add("send-fill");
            
            window.setTimeout(() =>{
                a.focus();
            }, 200);

            const messageContainer = document.getElementById("messages"),
                textNode = document.createElement("section"),
                imageNode = document.createElement("section");
            //add responses again
            textNode.classList.add("response");
            textNode.textContent = "Dr. Gilbertson, are you available?";
            messageContainer.appendChild(textNode);

            //add image
            messageContainer.appendChild(imageNode);

            imageNode.id = "imageNodeID";
            imageNode.classList.add("response-image");
            imageNode.style.cssText = `background:url(${this.state.imgCameraSrc}) no-repeat; background-size: 180px 270px; background-position: 0% 0%;`;
            imageNode.style.opacity = 0;
            
            this.toggleShowImage();

        }, 0);
    }

    render(){
        return (
            <DemoAppRouter
                {...this.state}
                chatHistory = {store.getState().chatHistory}
                activityHistory = {this.state.activityHistory}
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


