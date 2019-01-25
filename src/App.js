import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">This is a Home Page</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <Link to="/about" className="App-link">
              Let's go to About Page ;D
            </Link>
          </p>
        </header>
      </div>
    );
  }
}

export default App;
