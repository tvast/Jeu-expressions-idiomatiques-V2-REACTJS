import * as React from "react"
import {Component} from "react";

import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import style from "./css/materialize.css";
import style2 from "./css/style.css";
import Button from '@material-ui/core/Button';

class Foo extends Component {
  handleClick() {
    console.log('Click happened');}
initValue () {
  let quotes = 
  [
  {fr : "Etre sage comme une image", es :"Ser más bueno que el santo", ot:"Miguel de Cervantes"},
  {fr:"Une histoire sans queue ni tête",es:"Una historia sin pies ni cabeza",ot:"Salvador Dali"},
  {fr:"En un clin d’oeil",es:"En un abrir y cerrar de ojos",ot:"Pablo Picasso"},
  {fr:"En avoir l’eau à la bouche",es:"Hacerse la boca agua",ot:"Pedro Almodóvar"},
  {fr:"Filer à l’anglaise",es:"Irse a la francesa",ot:"Pablo Neruda"},
  {fr:"Apprendre par coeur",es:"Saberse de memoria",ot:"Octavio Paz"},
  {fr:"Passer une nuit blanche",es:"Pasar la noche en vela",ot:"Isabel Allende"},
  {fr:"Aller comme un gant",es:"Encajar perfectamente",ot:"Frida Kahlo"},
  {fr:"Etre comme un coq en pâte",es:"Tener una vida de reyes",ot:"Hemingway"},
  {fr:"Ce n’est pas la mer à boire !",es:"No es para tanto !",ot:"Che Guevara"},

  {fr : "Avoir quelqu’un dans le nez", es :"No soportar a una persona", ot:"Miguel de Cervantes"},
  {fr:"Perdre la face",es:"Perder la cara",ot:"Salvador Dali"},
  {fr:"Faire d’une pierre, deux coups",es:"Matar dos pájaros de un tiro",ot:"Pablo Picasso"},
  {fr:"Avoir du cran",es:"Tener las agallas",ot:"Pedro Almodóvar"},
  {fr:"Ne pas être sorti de l’auberge",es:"No salimos de una que nos metemos en otra",ot:"Pablo Neruda"},
  {fr:"Apprendre par coeur",es:"Saberse de memoria",ot:"Octavio Paz"},
  {fr:"Passer une nuit blanche",es:"Pasar la noche en vela",ot:"Isabel Allende"},
  {fr:"Aller comme un gant",es:"Encajar perfectamente",ot:"Frida Kahlo"},
  {fr:"Etre comme un coq en pâte",es:"Tener una vida de reyes",ot:"Hemingway"},
  {fr:"Ce n’est pas la mer à boire !",es:"No es para tanto !",ot:"Che Guevara"},

  ];



  let x = quotes.length ;
  let y = Math.floor((Math.random() * x) + 0);
  document.getElementById("start").innerHTML = quotes[y].fr;

  saveTraduce.push(quotes[y].es);
  console.log(saveTraduce);
        // document.getElementById("othor").innerHTML = quotes2[y].ot;

      };



      showAnswer() {
        let reponse = document.getElementById("reponseIn").value

        if (reponse == saveTraduce[0]) {
          document.getElementById("reponseOut").innerHTML ="bravo"
        }
        else {
          document.getElementById("reponseOut").innerHTML =saveTraduce[0]
        }
      };

     myFunction() {
        location.reload();
 
      };
  }



      const BasicExample = () => (
        <Router>
        <div>
        <ul>
        <li>
        <Link to="/">Accueil</Link>
        </li>
        <li>
        <Link to="/about">About</Link>
        </li>
        <li>
        <Link to="/topics">Jeu</Link>
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
        <div className={style.introStyle}>

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
        c'est partit !
        </Button>
        </div>
        <br/><br/>

        </div>
        </div>
        </div>
        );

        const Topics = ({ match }) => (
        <div>
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

        <div className={style2.flexContainer}>
        <div className={style2.diamond}>
        <div className={style2.top}>
        <div className={style2.trail}>
        <div className={style2.ballLeft}></div>
        <div className={style2.ballRight}></div>
        </div>
        <div className={style2.trail}>
        <div className={style2.ballLeft}></div>
        <div className={style2.ballRight}></div>
        </div>
        <div className={style2.trail}>
        <div className={style2.ballLeft}></div>
        <div className={style2.ballRight}></div>
        </div>
        <div className={style2.trail}>
        <div className={style2.ballLeft}></div>
        <div className={style2.ballRight}></div>
        </div>
        <div className={style2.trail}>
        <div className={style2.ballLeft}></div>
        <div className={style2.ballRight}></div>
        </div>
        <div className={style2.trail}>
        <div className={style2.ballLeft}></div>
        <div className={style2.ballRight}></div>
        </div>
        <div className={style2.trail}>
        <div className={style2.ballLeft}></div>
        <div className={style2.ballRight}></div>
        </div>
        <div className={style2.trail}>
        <div className={style2.ballLeft}></div>
        <div className={style2.ballRight}></div>
        </div>
        <div className={style2.trail}>
        <div className={style2.ballLeft}></div>
        <div className={style2.ballRight}></div>
        </div>
        <div className={style2.trail}>
        <div className={style2.ballLeft}></div>
        <div className={style2.ballRight}></div>
        </div>
        <div className={style2.trail}>
        <div className={style2.ballLeft}></div>
        <div className={style2.ballRight}></div>
        </div>
        </div>
        <div className="bottom">
        <div className={style2.trail}>
        <div className={style2.ballLeft}></div>
        <div className={style2.ballRight}></div>
        </div>
        <div className={style2.trail}>
        <div className={style2.ballLeft}></div>
        <div className={style2.ballRight}></div>
        </div>
        <div className={style2.trail}>
        <div className={style2.ballLeft}></div>
        <div className={style2.ballRight}></div>
        </div>
        <div className={style2.trail}>
        <div className={style2.ballLeft}></div>
        <div className={style2.ballRight}></div>
        </div>
        <div className={style2.trail}>
        <div className={style2.ballLeft}></div>
        <div className={style2.ballRight}></div>
        </div>
        <div className={style2.trail}>
        <div className={style2.ballLeft}></div>
        <div className={style2.ballRight}></div>
        </div>
        <div className={style2.trail}>
        <div className={style2.ballLeft}></div>
        <div className={style2.ballRight}></div>
        </div>
        <div className={style2.trail}>
        <div className={style2.ballLeft}></div>
        <div className={style2.ballRight}></div>
        </div>
        <div className={style2.trail}>
        <div className={style2.ballLeft}></div>
        <div className={style2.ballRight}></div>
        </div>
        <div className={style2.trail}>
        <div className={style2.ballLeft}></div>
        <div className={style2.ballRight}></div>
        </div>
        </div>
        </div>
        </div>

        <div className="container">
        <div className="section">

        <div className="row">
        <div className="input-field col s6">

        <h4  id="start" className="white-text">Etre sage comme une image</h4>
        </div>
        <div className="input-field col s6">

        <input id="reponseIn" type="text" className="validate white-text"/>
        <label className="active white-text" for="first_name2">réponse</label>
        </div>

        <div className="container center input-field col s12">
        <a id="triggerAnswer" onClick={this.showAnswer} className="waves-effect waves-light btn-large">Vérifier</a>
        <a onClick={myFunction} id="trigger" className="button ">suivant</a>

        <h4 className="white-text" id="reponseOut"></h4>
        <h2 id="traduce" className="subtitle">

        </h2>
        </div>

        </div>

        </div>

        </div>
        </div>
        );

        const About = () => (
        <h1>hello</h1>
        );

       

        const Topic = ({ match }) => (
        <div>
        <h3>{match.params.topicId}</h3>
        </div>
        );

        export default BasicExample;

        ReactDOM.render(<BasicExample />, document.getElementById("index"));
