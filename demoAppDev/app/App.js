import './styles/app.less';
import React, {Component} from 'react';
import {render} from 'react-dom';
import {Route, Switch, HashRouter} from 'react-router-dom';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import Header from "./components/Nav";
import Footer from "./components/Footer";
import Chat from './components/Chat';
import Activity from './components/Activity';
import Teams from './components/Teams';
import Meetings from './components/Meetings';
import Calls from './components/Calls';
import Contact from './components/messaging/message-home';
import Message from './components/messaging/message-contact';
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
                                        <Route exact path="/" component={Activity}/>
                                        <Route path="/chat" component={Chat}/>
                                        <Route path="/contact" component={Contact}/>
                                        <Route path="/message" component={Message}/>
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


