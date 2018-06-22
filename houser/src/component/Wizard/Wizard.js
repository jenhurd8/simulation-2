import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Wizard extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zip: 0
    };
  }

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitHandler = e => {
    const { name, address, city, state, zip } = this.state;
    axios
      .post("http://localhost:3001/api/houses/", {
        name,
        address,
        city,
        state,
        zip
      })
      .then(response => {
        this.setState({
          name,
          address,
          city,
          state,
          zip
        });
      });
  };

  render() {
    return (
      <div>
        <h1>Add New Listing</h1>
        <Link to="/">
          <button className="cancel">Cancel</button>
        </Link>
        <div className="wizardInputs">
          <form onSubmit={this.onSubmitHandler}>
            Property Name<br />
            <input
              name="name"
              value={this.state.name}
              onChange={this.onChangeHandler}
              placeholder="Name"
            />
            <br />
            <br />
            Address<br />
            <input
              name="address"
              value={this.state.address}
              onChange={this.onChangeHandler}
              placeholder="Address"
            />
            <br />
            <br />
            City
            <input
              name="city"
              value={this.state.city}
              onChange={this.onChangeHandler}
              placeholder="City"
            />
            State
            <input
              name="state"
              value={this.state.state}
              onChange={this.onChangeHandler}
              placeholder="State"
            />
            Zip
            <input
              name="zip"
              value={this.state.zip}
              onChange={this.onChangeHandler}
              placeholder="Zip Code"
            />
            <br />
            <button>Complete</button>
          </form>
        </div>
      </div>
    );
  }
}
