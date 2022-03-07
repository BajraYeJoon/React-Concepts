import React from "react";

function FunctionEvent() {
  function handleClick() {
    console.log("clicked");
  }

  return (
    <div>
      <button onClick={handleClick}> Click here </button>
    </div>
  );
}

export default FunctionEvent;
