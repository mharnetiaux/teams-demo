import React, {Component} from 'react';
import {Link} from "react-router-dom";

class SubNav extends Component {

    constructor() {
        super(...arguments);
        this.toggleClass = this.toggleClass.bind(this);
        this.state = {
            results: true,
            contacts: false
        };
    }

    toggleClass() {
        this.setState(
            {
                results: !this.state.results,
                contacts: !this.state.contacts
            });
    };

    render() {
        return(
           <ul className="chat-sub-nav">
               <li className={this.state.results ? 'recent selected': "recent"} onClick={this.toggleClass}>
                   <Link to={{pathname:'/chat', state:{next:'false'}}}>Recent</Link>
               </li>
               <li className={this.state.contacts ? 'contacts selected': "contacts"} onClick={this.toggleClass}>
                   <Link to={{pathname:'/chat', state:{next:'false'}}}>Contact</Link>
               </li>
           </ul>
        );
    }
}

export default SubNav;