import React from "react";

function ReactMemo() {
  console.log("Memo Compo");
  return <div>ReactMemo {name}</div>;
}

export default React.memo(ReactMemo);
