import * as React from "react"
import {Component} from "react";

import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import style from "./css/materialize.css";
import style2 from "./css/style.css";


class Button extends React.Component { 
        constructor(props) {
        super(props);
        this.state = { counter: 1 };
    }


    render() { 
   
     return <div>
        <h1>{this.state.counter}</h1>
        <button onClick={() => {console.log('coucou')}}>go</button>   
</div>
    };

}

ReactDOM.render(<Button />, document.getElementById("index"));
