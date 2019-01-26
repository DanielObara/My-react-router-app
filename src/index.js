import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/* Não se esqueça de importar seus componentes para poder chamá-los na rota (Route) */
import Home from "./components/Home";
import About from "./components/About";
import Profile from "./components/Profile";

/* 
|BrowserRouter| teremos as rotas para os componentes a partir desta chamada. 
  Deste modo ele ficara em volta de todos os outros componentes.
  
|Switch| funciona como se fosse a condicional 'switch/case'. 
  Determina qual rota será redirecionada conforme a selecionada.
  
|Route| é a rota que receberá qual o nome do caminho e qual o componente que deverá ser chamado.

O path="/" pode ser usado junto com o exact para garantir que se a rota tiver somente "/" ele vai ser renderizado.
*/
ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/profile" component={Profile} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
serviceWorker.unregister();
