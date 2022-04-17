import React from "react";
import { Button } from "react-bootstrap";

const Service = (props) => {
  const { name, price } = props.service;
  return (
    <div>
      <img src="" alt="" />
      <p>Service Name:{name}</p>
      <p>Price: {price} </p>
      <Button>Checkout</Button>
    </div>
  );
};

export default Service;
