import React from "react";

//destructuring 
const Props = ({name, subName}) => {
// const {name, subName} = props another way to destructuring in FC
  return (
    <div>
      <h1>
        Hi {name} aka {subName}{" "}
      </h1>
      {/* {props.children} */}
    </div>
  );
};

export default Props;
