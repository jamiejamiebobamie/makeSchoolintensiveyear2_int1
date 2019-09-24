import React, { Component } from 'react';
import Icon from './Icon'
import animalsData from './animals.js'

class Ecosystem extends Component {

    constructor(props){
        super(props)
        this.state = {
            width: this.props.width,
            height: this.props.height,
            zooLength: animalsData.length
            }
        // this.liftLocationsToLCA = this.liftLocationsToLCA.bind(this)
    }
    //
    // this.props.storeLocations()
    // liftLocationsToLCA(){
    //
    // }


    render(){
        const animals = animalsData.map( (animal) => (
            <Icon toggle={this.state.toggle} storeLocations={this.props.storeLocations} type={animal.type} size={animal.size} styleClass={animal.styleClass} x={animal.x} y={animal.y} color={animal.color} width={this.props.width} height={this.props.height} />
        ))
        return (
            <div>
                {animals}
            </div>
            )
    }
}

export default Ecosystem

//
// (< Icon toggle={this.state.toggle} storeLocations={this.props.storeLocations}  type="Twitter" size='100' styleClass='breatheFast' x='100' y='100' color='red' width={this.props.width} height={this.props.height} />),
// (< Icon toggle={this.state.toggle} storeLocations={this.props.storeLocations}  type="Bot" size='50' styleClass='breatheNormal' x='300' y='100' color='blue' width={this.props.width} height={this.props.height}/>),
// (< Icon toggle={this.state.toggle} storeLocations={this.props.storeLocations}  type="Confused" size='40' styleClass='breatheNormal' x='400' y='100' color='green' width={this.props.width} height={this.props.height}/>)
