import React from 'react'
import { useState } from 'react'

export const Revision = (props) => {
const [name,setName] = useState('Hello Hooks');
const [age,setAge] = useState('My age is 23');

  return (
    <div>
        <center>
            <h2>Example of functional component with props and usestate hook</h2>
        <div>The State object has the player {name}</div>
        <div> {age}</div>
        <center>The value is coming from Props - {props.nick}</center>
        </center>
    
    </div>
  )
}
