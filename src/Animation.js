import * as React from "react"
import {Component} from "react";

import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Animation extends React.Component {
  
  handleClick  ()  {
  console.log('coucou')
  };
  
  render() {
    return (
      <div class="hill2"></div>
<div class="hill1"></div>
<div class="ground"></div>
<div class="tree tree1">
  <div class="trunk">
    <div class="leftbranch"></div>
    <div class="rightbranch"></div>
  </div>
</div>
<div class="tree tree2">
  <div class="trunk">
    <div class="leftbranch"></div>
    <div class="rightbranch"></div>
  </div>
</div>
<div class="tree tree3">
  <div class="trunk">
    <div class="leftbranch"></div>
    <div class="rightbranch"></div>
  </div>
</div>

<div class="flex-container">
  <div class="diamond">
    <div class="top">
      <div class="trail">
        <div class="ball-left"></div>
        <div class="ball-right"></div>
      </div>
      <div class="trail">
        <div class="ball-left"></div>
        <div class="ball-right"></div>
      </div>
      <div class="trail">
        <div class="ball-left"></div>
        <div class="ball-right"></div>
      </div>
      <div class="trail">
        <div class="ball-left"></div>
        <div class="ball-right"></div>
      </div>
      <div class="trail">
        <div class="ball-left"></div>
        <div class="ball-right"></div>
      </div>
      <div class="trail">
        <div class="ball-left"></div>
        <div class="ball-right"></div>
      </div>
      <div class="trail">
        <div class="ball-left"></div>
        <div class="ball-right"></div>
      </div>
      <div class="trail">
        <div class="ball-left"></div>
        <div class="ball-right"></div>
      </div>
      <div class="trail">
        <div class="ball-left"></div>
        <div class="ball-right"></div>
      </div>
      <div class="trail">
        <div class="ball-left"></div>
        <div class="ball-right"></div>
      </div>
      <div class="trail">
        <div class="ball-left"></div>
        <div class="ball-right"></div>
      </div>
    </div>
    <div class="bottom">
      <div class="trail">
        <div class="ball-left"></div>
        <div class="ball-right"></div>
      </div>
      <div class="trail">
        <div class="ball-left"></div>
        <div class="ball-right"></div>
      </div>
      <div class="trail">
        <div class="ball-left"></div>
        <div class="ball-right"></div>
      </div>
      <div class="trail">
        <div class="ball-left"></div>
        <div class="ball-right"></div>
      </div>
      <div class="trail">
        <div class="ball-left"></div>
        <div class="ball-right"></div>
      </div>
      <div class="trail">
        <div class="ball-left"></div>
        <div class="ball-right"></div>
      </div>
      <div class="trail">
        <div class="ball-left"></div>
        <div class="ball-right"></div>
      </div>
      <div class="trail">
        <div class="ball-left"></div>
        <div class="ball-right"></div>
      </div>
      <div class="trail">
        <div class="ball-left"></div>
        <div class="ball-right"></div>
      </div>
      <div class="trail">
        <div class="ball-left"></div>
        <div class="ball-right"></div>
      </div>
    </div>
  </div>
</div>
    );
  }
}

export default Animation; 
