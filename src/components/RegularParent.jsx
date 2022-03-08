import React, { Component } from 'react'
import PureChild from './PureChild'
import ReactMemo from './ReactMemo'
import RegularChild from './RegularChild'

class RegularParent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'bajra'
      }
    }

    componentDidMount() {
        setInterval(() => {
             this.setState({
                 name: 'bajra'
             })

        },2000)
    }
  render() {
      console.log("Parent Comp...")
    return (
      <div>RegularParent
        {/* <RegularChild name={this.state.name}/>
        <PureChild name={this.state.name}/> */}

        <ReactMemo name={this.state.name}/>

      </div>
    )
  }
}

export default RegularParent