import React,{Component} from 'react';
import SVG from 'react-inlinesvg';
import TakePhoto from '../../../icon/take-photo.svg';
import TakeVideo from '../../../icon/take-video.svg';
import PhotoLibrary from '../../../icon/photo-library.svg';

class CameraModal extends Component{
    constructor(props){
        super(props);
        this.startCameraAbove = this.startCameraAbove.bind(this);
        this.startCameraBelow = this.startCameraBelow.bind(this);
    }
    
    startCameraAbove() {
        window.StatusBar.hide();
        window.CameraPreview.startCamera({toBack: false, previewDrag: true, tapPhoto: true});
        this.props.toggleCameraControls();
    }

    startCameraBelow() {
        window.StatusBar.hide();
        window.CameraPreview.startCamera({camera: "front", tapPhoto: true, previewDrag: false, toBack: true});
        this.props.toggleCameraControls();
        let htmlElements = document.getElementsByTagName("html");
        htmlElements[0].style.backgroundColor = "transparent";
        setTimeout(() => {
            document.getElementById("appFooter").classList.add("hidden");
        } , 200);
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
                        <span className="camera"><SVG src={TakePhoto}/></span><a href="#"></a>
                        <span className="cm-btn-text" onClick={this.startCameraBelow}>Take photo</span>
                    </div>
                    <span className="separator"></span>
                    <div className="btn">
                        <span className="video"><SVG src={TakeVideo}/></span><a href="#"></a>
                        <span className="cm-btn-text">Take video</span>
                    </div>
                    <span className="separator"></span>
                    <div className="btn">
                        <span className="library"><SVG src={PhotoLibrary}/></span><a href="#"></a>
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
}

export default CameraModal