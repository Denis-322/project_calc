import React, { Component } from "react";
export default class Res extends Component{
    render(){
      return(
          <div className="result">
              <p >{this.props.result}</p>
              
          </div>
      );
    }
}
