import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Bajra'
      }
      console.log("B constructor")
    }

    static getDerivedStateFromProps(props, state) {
        console.log("B derived state")
        return null

    }

    componentDidMount(){
      console.log("B mounted")
    }
 
    render() {
        console.log("B render")
    return (
        
      <div>LifeCycleB</div>
    )
  }
}

export default LifeCycleB