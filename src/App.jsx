import React, { Component } from "react";
import Class from "./components/Class";
import Function from "./components/Function";
import Props from "./components/Props";
import "./app.css";
import State from "./components/State";
import Setstate from "./components/Setstate";
class App extends Component {
  render() {
    return (
      <div>
        {/* Uncomment to uncover */}

        {/*  1.   <Function />
             2.  <Class message="hello"/>
             3. < Props name="mark" subName="M">
          <p>This is children</p>
        </>
        <Props name="yejoon" subName="Y">
          <button>Dummy Button</button>
        </Props>
        <Props name="alfred" subName="A" /> */}

        {/*  4.   <State /> */}

        <Setstate />
      </div>
    );
  }
}

export default App;
