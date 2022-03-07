import React, { Component } from 'react';
import ChildCompo from './ChildCompo';

class ParentCompo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: "Your Message is acknowledged!!!!"
      }
      this.messageParent = this.messageParent.bind(this)
    }

//   The method is triggered after the prop passed to the child is clicked
   messageParent(childName) {
           alert(`thank you ${this.state.message} from ${childName}`)
   }
   
   render()   {
    return (
      <div>
          {/* METHOD IS PASSED AS PROP */}
         <ChildCompo messageHandler={this.messageParent}/>

      </div>
    )
  }
}
export default ParentCompo