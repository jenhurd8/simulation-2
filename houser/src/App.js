import React, { Component } from "react";
import Header from "./component/Header/Header.js";
import "./App.css";
import routes from "./routes.js";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="link-wrap">
          <Link to="/" className="links">
            Dashboard
          </Link>
          <br />
          <Link to="/wizard" className="links">
            Wizard
          </Link>
        </div>
        {routes}
      </div>
    );
  }
}

export default App;
