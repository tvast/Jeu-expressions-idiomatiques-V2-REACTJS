import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import style from "./css/materialize.css";
import style2 from "./css/style.css";
import Button from '@material-ui/core/Button';

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
);

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div className={style.introStyle}>Hello React!
  
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
      <h1 className={style.header, style.center, style.whitetext}>Découvrez les traductions des  expressions françaises</h1>
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

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

export default BasicExample;

ReactDOM.render(<BasicExample />, document.getElementById("index"));
