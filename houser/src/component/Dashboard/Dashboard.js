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
          <House
            name={this.state.houses[index].name}
            address={this.state.houses[index].address}
            city={this.state.houses[index].city}
            state={this.state.houses[index].state}
            zip={this.state.houses[index].zip}
            img={this.state.houses[index].img}
            mortgage={this.state.houses[index].mortgage}
            rent={this.state.houses[index].rent}
          />
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
