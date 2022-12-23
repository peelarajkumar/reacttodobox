import React, { Component } from 'react'

export default class ListClassComp extends Component {


  render() {
    const names =['hi','world']
    function changeList(){
        alert("Hello Method")
    }
    return (
      <div>
        
        <h2>Welcome to List Class Component</h2>
        <h3>{names[0] + names[1]}</h3>
        <button onClick={()=>changeList()}>Click Me</button>
        </div>

    )
  }
}
