import React from "react";

class MessageSearch extends React.Component {

    constructor() {
        super();

        this.state = {
            text: 'Sylvia McCarthy',
            counter: 0
        };

        this.typeWriter = this.typeWriter.bind(this);

    }

    // Pass string to tell input what to write
    typeWriter(event) {
        event.preventDefault();
        if (this.state.counter < this.state.text.length) {
            document.getElementsByName("text")[0].value += this.state.text.charAt(this.state.counter);
            this.state.counter++;
        }
    }

    // React - life-cycle method
    componentDidMount() {
        document.getElementById("search").focus();
    }

    render() {
        return (
            <input type="text" name="text" className="search" id="search" onKeyDown={this.typeWriter}/>
        );
    }
}

export default MessageSearch;