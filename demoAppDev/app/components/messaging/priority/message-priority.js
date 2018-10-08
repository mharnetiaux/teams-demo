import React from "react";
import Modal from "react-modal";

class Important extends React.Component {

    constructor() {
        super();
        this.state = {
            showModal: false
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal () {
        this.setState({ showModal: true });
    }

    handleCloseModal () {
        this.setState({ showModal: false });
        document.getElementsByName("text-new")[0].focus();
    }

    componentDidUpdate(){
        if(this.state.showModal) {
            document.getElementById("container-new-message").classList.add("urgent");
        }
    }

    render() {
        return (
            <section className="priority-alert-type">
                <a className="priority-button" id="priority-button" onClick={this.handleOpenModal}></a>
                <Modal isOpen={this.state.showModal} className="content" overlayClassName="modal-backdrop">
                    <a className="mark-important" id="mark-important" onClick={this.handleCloseModal}></a>
                </Modal>
            </section>

        );
    }
}

export default Important;