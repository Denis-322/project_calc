import React, { Component } from "react";
export default class Res extends Component{
    render(){
        let {result} = this.props.result;
      return(
          <div className="result">
              <p id="otvet">{result}</p>
              
          </div>
      );
    }
}