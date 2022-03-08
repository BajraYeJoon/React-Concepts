import React, { PureComponent } from 'react'

class PureChild extends PureComponent {
  render() {
      console.log("purecomp")
    return (
      <div>PureChild {this.props.name}</div>
    )
  }
}

export default PureChild