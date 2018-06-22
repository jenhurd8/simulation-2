import React from "react";
import "./House.css";

export default function House(props) {
  return (
    <div className="house">
      <p>{props.name}</p>
      <p>{props.address}</p>
      <p>{props.city}</p>
      <p>{props.state}</p>
      <p>{props.zip}</p>
      <p>{props.img}</p>
      <p>{props.mortgage}</p>
      <p>{props.rent}</p>
    </div>
  );
}
