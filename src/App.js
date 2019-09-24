import React, {Component} from 'react';

import Ecosystem from './Ecosystem'
import CreateAnimal from './CreateAnimal'
import './App.css';

class App extends Component {


    constructor(props){
        super(props)
        this.state = {
                width: 0,
                height: 0,
                toggle: true,
                zoo: [],
                holdingCage:undefined}
        //https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.toggle = this.toggle.bind(this);
        this.storeLocations = this.storeLocations.bind(this);
        this.create = this.create.bind(this);
        // this.sendNewToEcosystem = this.sendNewToEcosystem.bind(this);
    }

    componentDidMount() {
      this.updateWindowDimensions();
      window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
      this.setState({ width: window.innerWidth, height: window.innerHeight });
      // console.log(this.state, window.innerWidth)
    }

    toggle(){
        // need to send a callback down to update all locations in the App's zoo
        this.setState({toggle: !this.state.toggle})
    }

    storeLocations(idAndLocation) {
        let locations = [...this.state.storedLocations]
        locations.push(idAndLocation)
        this.setState({storedLocation: locations})
    }
    // {type: 'Angry', size: '100', styleClass: 'breatheFast', x: '200', y: '300', color: 'pink'},
    create(x,y,color){
        this.setState({holdingCage: {type:'Bot',id:Math.random(), x:x,y:y,color:color,size:250*Math.random()+250*Math.random(), styleClass:'breatheNormal'}, toggle: true})
    }

    addToZoo(){
        const newAnimal = this.state.holdingCage
        const newAnimals = [...this.state.zoo, newAnimal]
        this.setState({zoo: newAnimals, holdingCage:undefined})
    }


render(){
    // setTimeout(() => {
        // console.log(this.state)
        if (this.state.holdingCage){
            this.addToZoo()
        }
    // }, 1000)

    return (
      <div className="App">
      <button onClick={this.toggle}>hello</button>
       {this.state.toggle ?
          < Ecosystem
            toggle={this.state.toggle}
            storeLocations={this.storeLocations}
            width={window.innerWidth-100}
            height={window.innerHeight-100}
            holdingCage = {this.state.holdingCage}
            zoo={this.state.zoo}
            />
         :
         < CreateAnimal
             width={window.innerWidth}
             height={window.innerHeight}
             create={this.create}
         />
         }
      </div>
    )
}

}

export default App;
