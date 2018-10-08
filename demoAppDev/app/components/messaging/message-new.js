import React from "react";

class NewMessage extends React.Component {

    constructor() {
        super();

        this.state = {
            text: 'Consult needed ICU',
            counter: 0
        };

        this.typeWriter = this.typeWriter.bind(this);

    }

    // Pass string to tell input what to write
    typeWriter(event) {
        event.preventDefault();
        if (this.state.counter < this.state.text.length) {
            document.getElementsByName("text-new")[0].value += this.state.text.charAt(this.state.counter);
            this.state.counter++;
        }else {
            document.getElementById("message-send").classList.remove("hide");
        }
    }
    
    render() {
        return (
            <input type="text" name="text-new" className="input-new-message" id="input-new-message" placeholder="Type a new message" onKeyDown={this.typeWriter}/>
        );
    }
}

export default NewMessage;