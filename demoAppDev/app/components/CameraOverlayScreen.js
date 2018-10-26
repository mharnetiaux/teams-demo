import React, { Component } from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types'
import CanvasElement from './CanvasElement'

const colors = ['#CF021A', '#0DAC37', '#1E5EFE', '#FFF600', '#FFFFFF', '#000000'];

const CameraColorModal = (props) => {
    return (
        <div className="camera-color-modal">
            <div className="camera-color-modal-inner">
                <div className={`btn RedSelector`} onClick={(e) => {e.stopPropagation; e.preventDefault; props.changeColor('#CF021A')}}>
                    <span></span>
                    <a></a>
                </div>
                <div className={`btn GreenSelector`} onClick={(e) => {e.stopPropagation; e.preventDefault; props.changeColor('#0DAC37')}}>
                    <span></span>
                    <a></a>
                </div>
                <div className={`btn BlueSelector`} onClick={(e) => {e.stopPropagation; e.preventDefault; props.changeColor('#1E5EFE')}}>
                    <span></span>
                    <a></a>
                </div>
                <div className={`btn YellowSelector`} onClick={(e) => {e.stopPropagation; e.preventDefault; props.changeColor('#FFF600')}}>
                    <span></span>
                </div>
                <div className={`btn WhiteSelector`} onClick={(e) => {e.stopPropagation; e.preventDefault; props.changeColor('#FFFFFF')}}>
                    <span></span>
                </div>
                <div className={`btn BlackSelector`} onClick={(e) => {e.stopPropagation; e.preventDefault; props.changeColor('#000000')}}>
                    <span></span>
                </div>
            </div>
        </div>
    )
};

class CameraOverlayScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            showPhotoControls: true,
            currentColor: colors[0],
            showColorModal: false
        }
        this.cameraTakePicture = this.cameraTakePicture.bind(this);
        this.togglePhotoControls = this.togglePhotoControls.bind(this);
        this.stopCamera = this.stopCamera.bind(this);
        this.redirectCamera= this.redirectCamera.bind(this);
        this.setImg = this.setImg.bind(this);
        this.setCanvasImage = this.setCanvasImage.bind(this);
        this.changeColors = this.changeColors.bind(this);
        this.toggleColorModal = this.toggleColorModal.bind(this);
    }
    render() {
        if (this.state.redirect) {
            return <Redirect push to="/chat-content"/>
        }
        else{
            return (
                <section className="idt-chat">
                    <header></header>
                    <div className="app" id="cameraBackground">
                    {this.state.showPhotoControls ?
                        <div className="camera-controls">
                            <div className="block1">
                                <div className={`btn Close`} onClick={(event) => { this.stopCamera(); this.redirectCamera();}}>
                                    <span></span>
                                </div>
                                <div className={`btn ReverseAndPower`}>
                                    <span></span>
                                </div>
                            </div>
                            <div className="block2">
                                <div className={`btn OvalTakePhoto`} onClick={this.cameraTakePicture}>
                                    <span></span>
                                </div>
                                <div className="camera-controls-text">
                                    <span>DOCUMENT</span>
                                    <span><b>PHOTO</b></span>
                                    <span>WHITEBOARD</span>
                                    <span>BUS</span>
                                </div>
                            </div>
                        </div>
                        : null
                    }
                    {!this.state.showPhotoControls ?
                    //revtogglekey icon
                        <div class="canvas-container">
                            <CanvasElement myImage={this.props.imgCameraSrc} setImg={this.props.setImgSrc} currentColor={this.state.currentColor}></CanvasElement>
                            <div className="camera-controls">
                                <div className="block1 blackBlock">
                                    <div className={`btn Close`} onClick={this.redirectCamera}>
                                        <span></span>
                                    </div>
                                    <div className={`btn AnnotationControls`} onClick={this.toggleColorModal}>
                                        <span></span>
                                    </div>
                                </div>
                                <div className="block2 blackBlock">
                                    <div className={`btn CameraIcon`}>
                                        <span></span>
                                    </div>
                                    <div className={`btn DoneIcon`} onClick={this.setCanvasImage}>
                                        <span className="doneSpan">Done <span className="doneSpan2">></span></span><span></span><div className="arrowy righty"></div>
                                    </div>
                                </div>
                            </div>
                            {this.state.showColorModal ? 
                                <CameraColorModal
                                    closeMe={this.toggleColorModal}
                                    changeColor={this.changeColors}
                                />
                                : null
                            }
                        </div>
                        : null
                    }
                    
                    </div>
                </section>
            );
        }
    }
    togglePhotoControls() {
        console.log(`toggling photo controls`);
        this.setState({
          showPhotoControls: !this.state.showPhotoControls
        });
      }
    cameraTakePicture(event) {         
        let imageSrcData = undefined;
        window.CameraPreview.takePicture({width:500, height: 800, quality: 50}, onSuccess, onFail);
        function onSuccess(imageData) { 
            console.log("GOT PICTURE!!!!!!!!");
            imageSrcData = 'data:image/jpeg;base64,' +imageData;       
        }  
        function onFail(error) { 
           console.log('Failed because: ' + error); 
        } 
        this.togglePhotoControls();

        window.setTimeout(() => {
            this.stopCamera();
            this.setImg(imageSrcData);
        }, 1500);        
    }
    setImg(val) {
        console.log("calling setImg");
        // this.props.setImgSrc(val);
    }
    setCanvasImage() {
        let canvas = document.getElementById("canvasElement");
        console.log("calling setCanvasImage and canvas is: "+canvas);
        
        let dataURL = canvas.toDataURL();
        this.setImg(dataURL);
        this.redirectCamera();
        
    }
    stopCamera() {
        window.CameraPreview.stopCamera();
    }
    redirectCamera() {
        this.setState({redirect: true});
        window.StatusBar.show();
    }
    changeColors(newColor) {
        this.setState({currentColor: newColor});
    }
    toggleColorModal() {
        console.log(`toggling modal camera-color: ${this.state.showColorModal}`);
        this.setState((prevState) => {
          return {
            showColorModal: !prevState.showColorModal
          }
        });
    }
}

// CameraOverlayScreen.propTypes = {
//     setImgCameraSrc: PropTypes.func.isRequired
// }

export default CameraOverlayScreen;