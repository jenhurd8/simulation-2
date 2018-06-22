import React, { Component } from "react";
import Dashboard from "./component/Dashboard/Dashboard.js";
import Wizard from "./component/Wizard/Wizard.js";
import Header from "./component/House/House.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Dashboard />
        <Wizard />
        <Header />
      </div>
    );
  }
}

export default App;
