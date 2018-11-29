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
                        read: true,
                        type: "",
                        name: "Pat E. mentioned you",
                        time: date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }),
                        message: "Priority messages chat demonstration.",
                        avatar: "/images/profile-pat-emerson.png",
                        icon: "AtIcon",
                        iconColor: false,
                        iconText: "Nurses"
                    },
                    {
                        read: true,
                        type: "",
                        name: "Babek S. +2 liked your message",
                        time: "8:16 AM",
                        message: "Image annotation in chat demonstration.",
                        avatar: "/images/profile_8.png",
                        icon: "LikeIcon",
                        iconColor: true,
                        iconText: "Friday Fundays"
                    },
                    {
                        read: true,
                        type: "",
                        name: "Laurence G. posted a message",
                        time: "Yesterday",
                        message: "Does anyone know if there's going to b...",
                        avatar: "/images/profile_3.png",
                        icon: "ChannelFollowIcon",
                        iconColor: true,
                        iconText: "Contoso Hospital/General"
                    },
                    {
                        read: true,
                        type: "",
                        name: "Bernadette G. replied to you",
                        time: "Wednesday",
                        message: "That's a great idea. We could also get it...",
                        avatar: "/images/profile_2.png",
                        icon: "ReplyIcon",
                        iconColor: true,
                        iconText: "ICU/Performance"
                    },
                    {
                        read: true,
                        type: "",
                        name: "Reta T. mentioned Designers",
                        time: "Tuesday",
                        message: "Don't forget the all hands taking place...",
                        avatar: "/images/profile_1.png",
                        icon: "ChannelIcon",
                        iconColor: false,
                        iconText: "ICU/Performance"
                    },
                    {
                        read: true,
                        type: "",
                        name: "Cassandra D. liked your message",
                        time: "11/23",
                        message: "I think Karin Blair will be able to help...",
                        avatar: "/images/profile_4.png",
                        icon: "LikeIcon",
                        iconColor: false,
                        iconText: "Chat with Cassandra Dunn"
                    },
                    {
                        read: true,
                        type: "",
                        name: "Edmee P. mentioned you",
                        time: "11/22",
                        message: "The sales team are owning that problem.",
                        avatar: "/images/profile_6.png",
                        icon: "AtIcon",
                        iconColor: true,
                        iconText: "Nurses"
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
            const a = document.getElementById("send-message");
            a.style.cssText = `padding: 0px 0px 0px 0px; width:100%; height: 150px; background:url(${this.state.imgCameraSrc}) no-repeat; background-size: 100px 160px; background-position: 5% 5%; caret-color: transparent;`;
            a.classList.add("image-send-message");
            a.value = "";
            document.getElementById("send").classList.add("send-fill");
            
            // window.Keyboard.show(); doesn't work because iOS sucks, have to focus instead and change config.xml
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


