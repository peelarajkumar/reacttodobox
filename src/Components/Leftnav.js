import React, { Component } from 'react'

export default class Leftnav extends Component {
    navitems ={
        home:"Home",
        about:"About",
        cust:"Contact us",
        page:"Reach us"
    }
  render() {
  
    return (
      <div>
        <h4>

            <ul>Menu
                <li>{this.navitems.home}</li>
                <li>{this.navitems.about}</li>
                <li>{this.navitems.page}</li>
                <li>{this.navitems.cust}</li>
            </ul>
        </h4>
        
      </div>
    )
  }
}
