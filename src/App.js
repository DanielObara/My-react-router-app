import React, { Component } from "react";
import logo from "./react-router.png";
import "./App.css";

/* Importe o Link do React-Router para poder usá-lo para redirecionar ao link especificado passado por parametro*/
import { Link } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">This is a Home Page</h1>
          <img src={logo} className="App-logo img" alt="logo" />
          <p>
            {/* Aqui é o mesmo conceito sobre como utilizar o Link do react-router-dom. Apenas informe para onde ir */}
            <Link to="/about" className="App-link">
              Let's go to About Page ;D
            </Link>
          </p>
          <h3>Or</h3>
          <p>
            <Link to="/registrations" className="App-link">
              Let's go back to the registrations page
            </Link>
          </p>
        </header>
      </div>
    );
  }
}
