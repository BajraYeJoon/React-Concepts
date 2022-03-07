import React, { Component } from "react";
import Class from "./components/Class";
import Function from "./components/Function";
import Props from "./components/Props";
import "./app.css";
import State from "./components/State";
class App extends Component {
  render() {
    return (
      <div>
        {/* Uncomment to uncover */}
        
        {/* <Function />
        <Class message="hello"/>
        <Props name="mark" subName="M">
          <p>This is children</p>
        </Props>
        <Props name="yejoon" subName="Y">
          <button>Dummy Button</button>
        </Props>
        <Props name="alfred" subName="A" /> */}

        <State />
      </div>
    );
  }
}

export default App;
