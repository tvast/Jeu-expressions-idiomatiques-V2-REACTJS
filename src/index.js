import React from "react";
import ReactDOM from "react-dom";
// import style from "./css/intro.css";
import style from "./css/materialize.css";
import style2 from "./css/style.css";
import Button from '@material-ui/core/Button';


const Index = () => {
  return (<div className={style.introStyle}>Hello React!
	
<div className={style2.hill2}></div>
<div className={style2.hill1}></div>
<div className={style2.ground}></div>
 <div className={style2.tree,style2.tree1}>
   <div className={style2.trunk}>
  <div className={style2.leftbranch}></div>
   <div className={style2.rightbranch}></div>
  </div>
 </div>
 <div className={style2.tree, style2.tree2}>
  <div className={style2.trunk}>
    <div className={style2.leftbranch}></div>
    <div className={style2.rightbranch}></div>
  </div>
</div>
<div className={style2.tree, style2.tree3}>
  <div className={style2.trunk}>
    <div className={style2.leftbranch}></div>
    <div className={style2.rightbranch}></div>
  </div>
</div>



<div className={style.section} id="index-banner">
    <div className={style.container}>
      <br/><br/>
      <h1 className={style.header, style.center, style.whitetext}>Découvrez les traductions des	 expressions françaises</h1>
      <div className={style.row, style.center, style.whitetext}>
        <h5 className={style.header, style.col, style.whitetext, style.s12, style.light}
        >écrivez la bonne traduction de ces expressions idiomatiques</h5>
      </div>
      <div className={style.row , style.center}>
        <Button variant="contained" color="primary">
      Hello World
    </Button>
      </div>
      <br/><br/>

    </div>
  </div>
  </div>

 );

}; 

ReactDOM.render(<Index />, document.getElementById("index"));