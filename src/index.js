import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import About from "./components/About";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Registrations from "./components/Registrations";

// BrowserRouter teremos as rotas para os componentes a partir desta chamada. Deste modo ele ficara em volta de todos os outros componentes.
// Switch funciona como se fosse a condicional 'switch/case'. Determina qual rota será redirecionada conforme a selecionada.
// Route é a rota que receberá qual o caminho e qual o componente que deve ser chamado.

// O path="/" pode ser usado junto com o exact para garantir que se a rota tiver somente "/" ele vai ser renderizado.
ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/about" component={About} />
      <Route path="/registrations" component={Registrations} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
serviceWorker.unregister();
