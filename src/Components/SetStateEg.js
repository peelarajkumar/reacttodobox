import React, { Component } from 'react'

export default class SetStateEg extends Component {

constructor(){
    super();
    this.state={
        col:"Captain",
        rank:1,
        pos:"Lead"
    }
}

changeRank(){
    this.setState({
        rank : this.state.rank+1,
        col:this.state.col+" Updated",
        pos:this.state.pos+" Changed"
    })
}

  render() {
    return (
      <div>
        <center>
        <h2>Example of SetState</h2>
        <h4>{this.state.col}</h4>
        <h4>{this.state.rank}</h4>
        <h4>{this.state.pos}</h4>
        {/* binding event handler - by bind(this) or arrow function */}
        <button onClick={this.changeRank.bind(this)}> Change Rank</button> 
        </center>

      </div>
    )
  }
}
