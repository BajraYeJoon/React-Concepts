import React, { Component } from 'react'
import higherOrder from './higherOrder'

class Clicker extends Component {
  render() {
      // Destructuring the props for children to access it
      const {moveHandler ,count} = this.props
    return (
      <div>
          <button onClick={moveHandler}>{this.props.name} Clicked {count}</button>
      </div>
    )
  }
}

export default higherOrder(Clicker, 5)