import React, {Component} from 'react';

import './CreateAnimal.css'


class CreateAnimal extends Component {
    constructor(props){
        super(props)

        this.state={
            meter: .7,
            buttonDown: false,
            colorMenuToggled: false,
            selectedColor: 'blue',
            locationX: 0,
            locationY: 0,
            reload: false,
        }

        // this._onPressButton = this._onPressButton.bind(this);
        // this._onReleaseButton = this._onReleaseButton.bind(this);
        // this.reload = this.reload.bind(this);
        // this.pickColor = this.pickColor.bind(this);
        // this._parseBool = this._parseBool.bind(this);
        this.getRGB = this.getRGB.bind(this);

        this.colors = []

        for (let i = 0; i < 255; i+=5){
            for (let j = 0; j < 255; j+=5){
                this.colors.push( { x:i*this.props.width/255, y:j*this.props.height/255 } )
            }
        }
        //

        this.pattern = this.colors.map( (coordinate) => (
                    <div
                        className="pattern"
                        style={{left:coordinate.x, top:coordinate.y, width:10*this.props.width/255, height:10*this.props.height/255, color:'transparent', backgroundColor: this.getRGB((coordinate.x/(this.props.width/255)), (coordinate.y/(this.props.width/255)))}}></div>
                ))
    }
    //
    // depletePaint(){
    //     if ( this.state.meter >= .01 ){
    //         let current_Amount = this.state.meter
    //         // this.setState( {meter: current_Amount-.001});
    //         this.setState( {meter: current_Amount-.00001});
    //
    //     } else {
    //         this.setState( {meter: 0});
    //     }
    // }
    //
    // reload(){
    //     this.setState({reload:false})
    //     this.setState({meter: .7})
    // }
    //
    // dispayPercentage(){
    //     let percentage = parseInt(this.state.meter / .7 * 100)
    //     return percentage.toString()
    // }
    //
    // pickColor(){
    //     this.setState({colorMenuToggled: !this.state.colorMenuToggled})
    // }
    //
    // _parseBool(){
    //     if (this.state.colorMenuToggled){
    //         return 'color Menu Toggled'
    //     } else {
    //         return 'color Menu not Toggled'
    //     }
    // }
    //
    // _onPressButton() {
    //   this.setState({buttonDown:true})
    // }
    //
    // _onReleaseButton() {
    //     this.setState({buttonDown:false})
    //     if (!this.state.reload) {
    //         this.setState({reload:true})
    //     }
    // }

    // style={{'background-color':this.state.selectedColor}}

    //
    // <div className='colorPicker'>
    //
    //     <button onPressIn={undefined} onPressOut={undefined} underlayColor="white">
    //         <div className='colorBlock'>
    //           <h1 className='text'>click and drag to select a color</h1>
    //         </div>
    //     </button>
    // </div>

    getRGB(x,y) {
        let R = 255-x
        let G = 255-y
        let B = x - y

        if ( x > this.props.width/2 ) {
            B = x + y
        }

        if (R < 0) {
            R = 0
        } else if (R > 255) {
            R = 255
        }

        if (G < 0) {
            G = 0
        } else if (G > 255) {
            G = 255
        }

        if (B < 0) {
            B = 0
        } else if (B > 255) {
            B = 255
        }
        return `rgb(${R},${G},${B})`
    }

    render(){
        setTimeout(() => {console.log(this.colors)}, 4000)


        return (
            <div className='container'>
            <div clasName="radialTransparency"></div>
                <div className="backgroundPattern">
                    {this.pattern}
                </div>
            </div>
        )
    }
}

export default CreateAnimal
