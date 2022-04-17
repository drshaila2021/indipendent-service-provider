import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = (props) => {
  const { name, price, picture } = props.service;
  return (
    <div className="service">
      <img src={picture} alt="" />
      <h4>Name: {name}</h4>
      <h4>Price: {price}</h4>
      <Link to="/login">
        <button className="btn btn-primary">Checkout</button>
      </Link>
    </div>
  );
};

export default Service;
