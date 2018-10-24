import React,{Component} from 'react';

class CameraModal extends Component{
    constructor(props){
        super(props);
        
        this.startCameraAbove = this.startCameraAbove.bind(this);
        this.startCameraBelow = this.startCameraBelow.bind(this);
    }
    render(){
        return(
            <div className="camera-modal" onClick={this.props.closeMe}>
                <div className="camera-modal-inner" onClick={this.consoleThis}>
                    <div className="camera-inner-gallery">
                        {/* <div className="rectangle8"><img id="myImage" src={this.props.imgCameraSrc ? this.props.imgCameraSrc: myImage} alt="pic to replace"></img></div> */}
                        <div className="rectangle8"></div>
                        <div className="rectangle9"></div>
                        <div className="rectangle10"></div>
                        <div className="rectangle11"></div>
                    </div>
                    <div className="btn">
                        <span className="camera"></span><a href="#"></a>
                        <span className="cm-btn-text" onClick={this.startCameraBelow}>Take photo</span>
                    </div>
                    <span className="separator"></span>
                    <div className="btn">
                        <span className="video"></span><a href="#"></a>
                        <span className="cm-btn-text">Take video</span>
                    </div>
                    <span className="separator"></span>
                    <div className="btn">
                        <span className="library"></span><a href="#"></a>
                        <span className="cm-btn-text">Photo library</span>
                    </div>
                </div>
            </div>
        )   
    }
    consoleThis(event){
        event.stopPropagation();
        console.log(`event is ${event}`);
    }

    startCameraAbove(){
        window.StatusBar.hide();
        window.CameraPreview.startCamera({x: 0, y: 0, width: 400, height: 700, camera: "back", toBack: false, previewDrag: true, tapPhoto: true});
        this.props.toggleCameraControls();
    }
    startCameraBelow(){
        window.StatusBar.hide();
        window.CameraPreview.startCamera({x: 0, y: 0, width: 400, height:700, camera: "back", toBack: true, previewDrag: true, tapPhoto: true});
        this.props.toggleCameraControls();
    }
}

export default CameraModal