import React from "react";
import ReactDOM from "react-dom";
import style from "./css/intro.css"

const Index = () => {
  return <div className={style.introStyle}>Hello React!</div>;
};

ReactDOM.render(<Index />, document.getElementById("index"));