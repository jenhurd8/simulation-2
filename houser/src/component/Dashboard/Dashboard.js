import React from "react";
import { Component } from "react";
import House from "../House/House.js";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        Dashboard:
        <div>
          House component in Dashboard <House />
        </div>
      </div>
    );
  }
}
