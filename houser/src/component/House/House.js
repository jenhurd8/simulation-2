import React from "react";
import "./House.css";

export default function House(props) {
  return (
    <div className="house">
      <div className="houseImage">{props.img}</div>
      <div className="houseInfo">
        <button onClick={props.deleteHandler}> X </button>
        <p>Property Name:{props.name}</p>
        <p>Address:{props.address}</p>
        <p>City:{props.city}</p>
        <p>State:{props.state}</p>
        <p>Zip:{props.zip}</p>
        <p>Monthly Mortgage:{props.mortgage}</p>
        <p>Desired Rent:{props.rent}</p>
      </div>
    </div>
  );
}
