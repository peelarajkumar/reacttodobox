import React, { Component } from 'react'
import { RemoteChild } from './RemoteChild'

export default class ScreenParent extends Component {
state={
    sports:"Hotstar",
    kids:"Disney"
}

changeChannel(){
    this.setState({
        sports:"Sunnext",
        kids:"Cartoon"
    })
}

  render() {
    return (
      <div> <center>
        <h2>This is a ScreenParent</h2>
        <h3>This Screen Plays the channels {this.state.sports} and {this.state.kids}</h3>
        <RemoteChild changeIt={this.changeChannel.bind(this)}></RemoteChild>
        </center>
      </div>
     
    )
  }
}
