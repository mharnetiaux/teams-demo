import {HashRouter as Router, Route, Switch, Link} from "react-router-dom";
import Calls from "../components/Calls";
import Meetings from "../components/Meetings";
import Teams from "../components/Teams";
import Activity from "../components/Activity";
import Chat from "../components/Chat";
import SingleChat from "../components/chat/SingleChat";
import ComposeChat from "../components/chat/ComposeChat";
import IDTcontent from "../components/idt/IDTContent";
import moreContent from "../components/idt/moreContent";
import IDTpatientList from "../components/idt/PatientList";
import IDTpage from "../components/idt/IDTpage";
import XrayFile from "../components/idt/xrayFile";
import filesContent from "../components/idt/filesContent";
import CameraOverlayScreen from "../components/CameraOverlayScreen";
import Footer from "../components/Footer";
import React from "react";

import { store } from '../store';

/// Move this out eventually
const Alert = () => {
    const alertType = {
        on: true,
        content: "URGENT! Darrell Salyer's blood sugar is hi...",
        image: "/icon/urgent-white.svg",
    };
    return(
        <Link id="alertContainer" className="alert-container" to='/'><section className={alertType.on ? "alert": "none"}><img src={alertType.image} width="20" height="20"/><span className="alert-message">{alertType.content}</span></section></Link>
    );
};

const DemoAppRouter = (props) => (
    <Router>
        <span>
        {/* {store.getState().callAlert && Alert()} */}
            <Route
                render={({ location }) => {
                    return (
                        <span>
                        <Switch location={location}>
                            <Route path="/calls" component={Calls}/>
                            <Route path="/meetings" component={Meetings}/>
                            <Route path="/teams" component={Teams}/>
                            <Route path="/activity" render={routeProps => <Activity {...routeProps} activityHistory={props.activityHistory}/>}/>
                            <Route exact path="/" render={() => <Chat chatHistory={props.chatHistory}/>} />
                            <Route path="/single-chat/:id" render={routeProps => <SingleChat {...routeProps} chatHistory={props.chatHistory} toggleShowImage={props.toggleShowImage} showImage={props.showImage}/>}/>
                            <Route path="/compose-chat/" render={routeProps => <ComposeChat {...routeProps} chatHistory={props.chatHistory} toggleShowImage={props.toggleShowImage} showImage={props.showImage}/>}/>
                            <Route path="/IDT" component={IDTpage} />
                            <Route path="/xrayFile" component={XrayFile} />
                            {/* <Route path="/more" component={moreContent} /> */}
                            <Route path="/idt-patient-list" component={IDTpatientList}/>
                            {/* <Route path="/files" component={filesContent} /> */}
                            <Route path="/cameraOverlay" render={routeProps => <CameraOverlayScreen {...routeProps} showKeyboard={props.showKeyboard} imgCameraSrc={props.imgCameraSrc} setImgSrc={props.setImgCameraSrc}/>} />
                        </Switch>
                        <Footer/>
                    </span>
                    );
                }}
            />
        </span>
    </Router>
);

export default DemoAppRouter;