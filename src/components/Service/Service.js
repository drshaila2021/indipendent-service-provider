import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = (props) => {
  const { name, price, picture, des } = props.service;
  return (
    <div className="service text-center py-3">
      <img src={picture} alt="" />
      <h4>Service Name: {name}</h4>
      <p>Description:{des}</p>
      <p>Price: ${price}</p>
      <Link to="/checkout">
        <button className="btn btn-primary">Checkout</button>
      </Link>
    </div>
  );
};

export default Service;
