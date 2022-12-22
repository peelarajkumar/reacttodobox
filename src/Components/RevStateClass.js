import React, { Component } from "react";


export default class RevStateClass extends Component {

    state ={
        cartoon:"Tom and Jerry",
        disney:"Kick Buttowski"
    }

    country ={
        hotstar :"Hotstar disney",
        netfix:"The Businees "
    }

changeNames(car,dis){

    this.setState({
        cartoon:car,
        disney:dis
    })
}

ChangeCountry(){
    this.setState({
        hotstar :"Ind Vs Pak",
        netfix:"Proposal "
    })
}

    render(){

      

        return(<div>
            <h2>This is Classcomponent and The state values are</h2>
            <h4> {this.state.cartoon}</h4>
            <h4>{this.state.disney}</h4>
            <h5>The value from Porps</h5>
            <h4>{this.props.new}</h4>
            <h6>{this.props.children}</h6>


           <center>
            <h4>{this.state.cartoon}</h4>
            <h4>{this.state.disney}</h4>
            <button onClick={()=>{this.changeNames("Power Rangers","Phinead & Ferb")}}>Change Me</button>
            
<h4>{this.country.hotstar}</h4>
<h4>{this.country.netfix}</h4>
<button onClick={()=>{this.ChangeCountry()}}>Change Country</button>
</center>
            
            </div>)
    }


}