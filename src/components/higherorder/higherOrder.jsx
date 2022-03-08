import React from 'react';

// Higher Order COmponent to reuse the same functionality over different component
// the whole component is wrapped around the wrapper and inside contains the regular class component that contains the methods
// or logic 
// as arrow function take two parameters, second parameter can be passed as the custom
// argument
const higherOrder = (WrappedComponent, customIncrement) =>{ 
    class HigherOrder extends React.Component {

        constructor(props) {
          super(props)
        
          this.state = {
             count : 0,
          }


        }

        moveHandler = () => {
            this.setState((prevState) => {
                return {count: prevState.count + customIncrement}
            })
        }
       render() {
           return (
            //    the initial state and the updation state is passed down as props ot the child
            //if there is any props that needs to be passed . spread operator must be used in the wrapped component
               <WrappedComponent count={this.state.count} moveHandler={this.moveHandler} {...this.props}/>
           )
       }
    } 
    return HigherOrder
}

export default higherOrder