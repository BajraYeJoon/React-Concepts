import React from 'react'

function ChildCompo({messageHandler}) {
  return (
    //   Triggers the parent when button is clicked
    //ARROW FUNCTION TO PASS CHILD AS PARAMETER
    <div><button onClick={() => messageHandler('child')}>Message Parent</button></div>
  )
}

export default ChildCompo