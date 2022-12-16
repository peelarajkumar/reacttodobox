import React, { Component } from 'react'

export default class Classcomponent extends Component {
    state ={
        cname :"class component with state",
        name:"bunny",
        age:"24"
    }
    college = {
        name:"VITS"
    }
  render() {
    return (
      <div>
        <h1>Hello {this.state.cname}</h1>
        <h4>The contents " {this.state.name} is {this.state.age} " years old</h4>
        <h4>He studied in {this.college.name}</h4>
        <h3>{this.props.heroname}</h3>
        <h4>{this.props.children}</h4>
      </div>
    )
  }
}
