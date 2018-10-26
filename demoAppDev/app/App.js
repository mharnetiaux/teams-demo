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
import Contact from './components/messaging/message-home';
import Message from './components/messaging/message-contact';
import IDTcontent from './components/idt/IDTContent';
import moreContent from './components/idt/moreContent';
import filesContent from './components/idt/filesContent';
import IDTpatientList from './components/idt/PatientList';
import CameraOverlayScreen from './components/CameraOverlayScreen';
const supportsHistory = 'pushState' in window.history;


const App = ({}) => (
    <HashRouter forceRefresh={!supportsHistory}>
        <Route
            render={({ location }) => {
                const {pathname} = location;
                return (
                    <TransitionGroup>
                        <Header/>
                        <CSSTransition key={pathname} classNames="page" timeout={{exit:700,enter:700}}>
                            <Route
                                location={location}
                                render={() => (
                                    <Switch>
                                        <Route path="/calls" component={Calls}/>
                                        <Route path="/meetings" component={Meetings}/>
                                        <Route path="/teams" component={Teams}/>
                                        <Route exact path="/activity" component={Activity}/>
                                        <Route path="/" component={Chat}/>
                                        <Route path="/chat-content" component={SingleChat}/>
                                        <Route path="/contact" component={Contact}/>
                                        <Route path="/message" component={Message}/>
                                        <Route path="/IDT" component={IDTcontent} />
                                        <Route path="/more" component={moreContent} />
                                        <Route path="/idt-patient-list" component={IDTpatientList}/>
                                        <Route path="/files" component={filesContent} />
                                        <Route path="/cameraOverlay" component={CameraOverlayScreen} />
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

render((
    <App />
), document.getElementById('root'));


