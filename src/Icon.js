
import React, {Component} from 'react'

import Appearance from './Appearance'



class Icon extends Component {
    constructor(props){
        super(props)

        // i need to plug these values into this.state.content and change these values dynamically during gameplay
        this.state = { type: this.props.type,
                       styleClass: this.props.styleClass,
                       size: this.props.size,
                       x: this.props.x,
                       y: this.props.y,
                       destinationX: Math.random()*this.props.height,
                       destinationY: Math.random()*this.props.height,
                       color: this.props.color,
                       id: props.id,
                       doOnce: true,
                        }
                        // console.log(Math.random(), this.props.width)
    }

    setNewLocation(){
        if (this.state.destinationX - this.state.x < 10 && this.state.destinationY - this.state.y < 10 && this.state.doOnce) {
            console.log('arrived')
            let x = Math.random()*this.props.width
            let y = Math.random()*this.props.height
            this.setState({destinationX:x, destinationY:y, doOnce: false})
            setTimeout( () => {this.setState({doOnce: true})}, 5000);
        }
    }

    moveToLocation(){
        if (this.state.destinationX !== this.state.x && this.state.destinationY !== this.state.y) {
            let moveX = this.state.x + ((this.state.destinationX - this.state.x) / this.state.destinationX)*5
            let moveY = this.state.y + ((this.state.destinationY - this.state.y) / this.state.destinationY)*5
            this.setState({x:moveX, y:moveY})
        }
    }

    render(){
        setTimeout(
            () => {this.setNewLocation()}, 10000);

        setTimeout(
            () => {this.moveToLocation()}, 40);


        // if(!this.props.toggle && this.state.doOnce){
        //     this.props.storeLocations({id:this.state.id, x: this.state.x, y: this.state.y})
        //     this.setState({doOnce:!this.state.doOnce})
        // }

        return (
            < Appearance type={this.state.type} styleClass={this.state.styleClass} size={this.state.size} color={this.props.color} x={this.state.x} y={this.state.y} />
        )
    }
}

//
// <Instagram size='40' />
// <Snapchat size='40' />
// <Twitter size='40' />
//
// <Angry size='40' />
// <Confused size='40' />
// <Bot size='40' />
// <Cool size='40' />
// <HappyBeaming size='40' />
// <HappyHeartEyes size='40' />
export default Icon
