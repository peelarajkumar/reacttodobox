import React from 'react'
import { useState } from 'react'

export default function Righnav(props) {

    const [hed,setHed] = useState("Hello World")


  return (
    <div>
        <h2>This is Right Nav - Functional Component</h2>
        <h3> "The value from hooks" {hed} </h3>
        <h3> "Example of props" {props.name}</h3>
    </div>
  )
}
