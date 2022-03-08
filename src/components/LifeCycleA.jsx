import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Bajra'
      }
      console.log("A constructor")
    }

    static getDerivedStateFromProps(props, state) {
        console.log("A derived state")
        return null

    }
     

    componentDidMount(){
      console.log("A mounted")
    }

    shouldComponentUpdate() {
        console.log("A compo update")
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("A snapshot")
        return null
    }

    componentDidUpdate(){
        console.log("A updated")
    }

    namechange = () => {
        this.setState({
            name : "hie"
        })
    }
 
    render() {
        console.log("A render")
    return (
        
      <div><h1>LifeCycle A</h1>
      <button onClick={this.namechange}>Change</button>
      <LifeCycleB />

      </div>
    )
  }
}

export default LifeCycleA