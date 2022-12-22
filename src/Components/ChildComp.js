import React from 'react'
import ParentComp from './ParentComp'

export const ChildComp = (props) => {
  return (
    <div>
        
            <center>
            <h2>ChildComp</h2>
            <button onClick={props.sendevent}>Click Me</button>
            </center>
        
    </div>
  )
}
