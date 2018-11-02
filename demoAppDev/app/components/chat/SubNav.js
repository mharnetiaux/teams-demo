import React, {Component} from 'react';
import {Link} from "react-router-dom";

class SubNav extends Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {
        return(
           <ul className="chat-sub-nav">
               <li className={this.state.results ? 'recent selected': "recent"}>
                   <Link to='/'>Recent</Link>
               </li>
               <li className={this.state.contacts ? 'contacts selected': "contacts"}>
                   <Link to="/">Contact</Link>
               </li>
           </ul>
        );
    }
}

export default SubNav;