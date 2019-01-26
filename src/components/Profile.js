import React, { Component } from "react";
import logo from "../react-router.png";
import "../App.css";

/* Importe o Link do React-Router para poder usá-lo 
para redirecionar ao link especificado passado por parametro*/
import { Link } from "react-router-dom";

export default class Profile extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">This is a Profile Page</h1>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              {/* Aqui é o mesmo conceito sobre como utilizar o Link do react-router-dom. 
              Apenas informe para onde ir */}
              <Link to="/" className="App-link">
                Let's go back to the home page
              </Link>
            </p>
            <h3>Or</h3>
            <p>
              <Link to="/about" className="App-link">
                Let's go back to the About page
              </Link>
            </p>
          </header>
        </div>
      </div>
    );
  }
}
