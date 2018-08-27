import * as React from "react"
import {Component} from "react";

import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Button extends React.Component {


    
  
  handleClick  ()  {
  console.log('coucou')
  };
  
  render() {
    return (
      <button onClick={this.handleClick}>
        A
      </button>
    );
  }
}
ReactDOM.render(<Button />, document.getElementById("index"));
