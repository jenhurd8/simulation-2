import React from "react";
import { Component } from "react";
import House from "../House/House.js";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      houses: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:3001/api/houses/").then(response => {
      console.log("response.data: ", response.data);
      this.setState({
        houses: response.data
      });
    });
  }

  render() {
    console.log("dashboard", this.state.houses);
    let list = this.state.houses.map((element, index) => {
      return (
        <div key={index}>
          <p>House</p>
        </div>
      );
    });

    return (
      <div className="dashboard">
        <div>
          <House />
          {list}
        </div>
        <Link to="/wizard">
          <button className="addProperty"> Add New Property</button>
        </Link>
      </div>
    );
  }
}
