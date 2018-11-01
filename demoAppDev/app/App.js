import './styles/app.less';
import React, {Component} from 'react';
import {render} from 'react-dom';
import {Route, Switch, HashRouter} from 'react-router-dom';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Chat from './components/Chat';
import SingleChat from './components/chat/SingleChat';
import Activity from './components/Activity';
import Teams from './components/Teams';
import Meetings from './components/Meetings';
import Calls from './components/Calls';
import IDTcontent from './components/idt/IDTContent';
import moreContent from './components/idt/moreContent';
import filesContent from './components/idt/filesContent';
import IDTpatientList from './components/idt/PatientList';
import CameraOverlayScreen from './components/CameraOverlayScreen';
const supportsHistory = 'pushState' in window.history;


const DemoApp = (props) => (
    <HashRouter forceRefresh={!supportsHistory}>
        <Route
            render={({ location }) => {
                const {pathname} = location;
                return (
                    <TransitionGroup>
                        <Header/>
                        <CSSTransition key={pathname} classNames="page" id="appPage" timeout={{exit:700,enter:700}}>
                            <Route
                                location={location}
                                render={() => (
                                    <Switch>
                                        <Route path="/calls" component={Calls}/>
                                        <Route path="/meetings" component={Meetings}/>
                                        <Route path="/teams" component={Teams}/>
                                        <Route path="/activity" render={routeProps => <Activity {...routeProps} activityClassName={props.activityClassName} setStateOfChat={props.setStateOfChat}/> }/>
                                        <Route exact path="/" component={Chat}/>
                                        <Route path="/chat-content" render={routeProps => <SingleChat {...routeProps} stateOfChat={props.stateOfChat} currentContact={props.currentContact}/>} />
                                        <Route path="/IDT" component={IDTcontent} />
                                        <Route path="/more" component={moreContent} />
                                        <Route path="/idt-patient-list" component={IDTpatientList}/>
                                        <Route path="/files" component={filesContent} />
                                        <Route path="/cameraOverlay" render={routeProps => <CameraOverlayScreen {...routeProps} showKeyboard={props.showKeyboard} imgCameraSrc={props.imgCameraSrc} setImgSrc={props.setImgCameraSrc}/>} />
                                    </Switch>
                                )}
                            />

                        </CSSTransition>
                        <Footer/>
                    </TransitionGroup>
                );
            }}
        />
    </HashRouter>
);

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
          kbShowing: false,
          imgCameraSrc: undefined,
          showImage: false,
          stateOfChat: "StateOne",
          currentContact: "Ruth Franklin"
        }
        this.resizeForKeyboard = this.resizeForKeyboard.bind(this);
        this.setImgCameraSrc = this.setImgCameraSrc.bind(this);
        this.showKeyboard = this.showKeyboard.bind(this);
        this.toggleShowImage = this.toggleShowImage.bind(this);
        this.setStateOfChat = this.setStateOfChat.bind(this);
    }
    render(){
        return <DemoApp 
            {...this.state} 
            resizeForKeyboard={this.resizeForKeyboard}
            showKeyboard={this.showKeyboard} 
            setImgCameraSrc={this.setImgCameraSrc}
            toggleShowImage={this.toggleShowImage}
            setStateOfChat={this.setStateOfChat}
        />
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
        }, 0);
    }
    setStateOfChat(arr){
        this.setState({
            stateOfChat: arr[0],
            currentContact: arr[1]
        });
    }
    // setStateOfChat(){
    //     console.log("SETSTATE!");
    // }
}

render((
    <App />
), document.getElementById('root'));


