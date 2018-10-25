import React, {Component} from 'react';

export default class CanvasElement extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            saveX: undefined,
            saveY: undefined,
            istouching : false
        }
        this.handleTouchEnd = this.handleTouchEnd.bind(this);
        this.handleTouchStart = this.handleTouchStart.bind(this);
        this.handleTouchMove = this.handleTouchMove.bind(this);
        this.startDrawing = this.startDrawing.bind(this);
        this.moved = this.moved.bind(this);
    }

    componentDidMount() {
        const canvas = this.refs.elementCanvas;
        const ctx = canvas.getContext("2d");
        const img = this.refs.imageCanvas;
        // let dataURL = undefined;        

        img.onload = () => {
            ctx.drawImage(img, 0, 0);      
            
            canvas.addEventListener("touchstart", this.handleTouchStart, false);
            canvas.addEventListener("touchend", this.handleTouchEnd, false);
            // el.addEventListener("touchcancel", handleCancel, false);
            canvas.addEventListener("touchmove", this.handleTouchMove, false);

        }
    }
    render() {
        return (
            <div class="canvas-div">
                <canvas ref="elementCanvas" width={375} height={500} id="canvasElement"></canvas>
                <img ref="imageCanvas" src={this.props.myImage} className="hidden-canvas"></img>
            </div>
        )
    }
  
    startDrawing(ev) {
        let CanvasElement = document.getElementById("canvasElement");
        let canvasPosition = CanvasElement.getBoundingClientRect();
       
        this.setState({saveX : ev.touches[0].pageX - canvasPosition.x});
        this.setState({saveY : ev.touches[0].pageY - canvasPosition.y});
    }
    moved(ev) {
        let CanvasElement = document.getElementById("canvasElement");
        let canvasPosition = CanvasElement.getBoundingClientRect();
       
        let ctx = CanvasElement.getContext('2d');
        let currentX = ev.touches[0].pageX - canvasPosition.x;
        let currentY = ev.touches[0].pageY - canvasPosition.y;
       
        ctx.lineJoin = 'round';
        ctx.strokeStyle = this.props.currentColor;
        ctx.lineWidth = 5;
       
        ctx.beginPath();
        ctx.moveTo(this.state.saveX, this.state.saveY);
        ctx.lineTo(currentX, currentY);
        ctx.closePath();
       
        ctx.stroke();
        this.setState({saveX : currentX});
        this.setState({saveY : currentY});
        this.saveX = currentX;
        this.saveY = currentY;
    }
    handleTouchStart(evt) {
        console.log("handleTouchStart!!!!!!!!!!!!!!!!!!");
        evt.preventDefault();
        this.setState({istouching : true});
        this.startDrawing(evt);
    }
    handleTouchEnd(evt) {
        console.log("handleTouchEnd!!!!!!!!!!!!!!!!!!");
        this.setState({istouching : false});
    }
    handleTouchMove(evt) {
        console.log("handleTouchMove!!!!!!!!!!!!!!!!!!");
        this.moved(evt);
    }
}