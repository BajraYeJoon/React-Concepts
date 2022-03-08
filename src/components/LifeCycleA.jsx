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
 
    render() {
        console.log("A render")
    return (
        
      <div><h1>LifeCycle A</h1>
      <LifeCycleB />

      </div>
    )
  }
}

export default LifeCycleA