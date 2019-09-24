import React, {Component} from 'react';

import Ecosystem from './Ecosystem'
import CreateAnimal from './CreateAnimal'
import './App.css';

class App extends Component {


    constructor(props){
        super(props)
        this.state = {width: 0, height: 0, toggle: true, storedLocations: []}
        //https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.toggle = this.toggle.bind(this);
        this.storeLocations = this.storeLocations.bind(this);
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
        this.setState({toggle: !this.state.toggle})
    }

    storeLocations(idAndLocation) {
        let locations = [...this.state.storedLocations]
        locations.push(idAndLocation)
        this.setState({storedLocation: locations})
    }

render(){
    // setTimeout(() => {console.log(this.state)}, 4000)
    return (
      <div className="App">
      <button onClick={this.toggle}>hello</button>
       {this.state.toggle ?
          < Ecosystem
            toggle={this.state.toggle}
            storeLocations={this.storeLocations}
            width={window.innerWidth-100}
            height={window.innerHeight-100} />
         :
         < CreateAnimal
             width={window.innerWidth}
             height={window.innerHeight}
         />
         }
      </div>
    )
}

}

export default App;
