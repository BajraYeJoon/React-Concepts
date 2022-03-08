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

      shouldComponentUpdate() {
          console.log("B compo update")
          return true
      }
  
      getSnapshotBeforeUpdate(prevProps, prevState) {
          console.log("B snapshot")
          return null
      }
  
      componentDidUpdate(){
          console.log("B updated")
      }
 
    render() {
        console.log("B render")
    return (
        
      <div>LifeCycleB</div>
    )
  }
}

export default LifeCycleB