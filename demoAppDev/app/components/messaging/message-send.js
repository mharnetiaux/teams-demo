import React from "react";
import {Link} from "react-router-dom";


class SendMessage extends React.Component {

    constructor() {
        super();
    }
    
    render() {
        return (
            <Link to={{pathname:'/message', state:{next:'true'}}} className="message-send hide" id="message-send"/>
        );
    }
}

export default SendMessage;