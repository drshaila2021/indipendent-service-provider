import React from "react";
import banner from "../../Images/banner.jpg";
import Services from "../Services/Services";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <img className="d-block w-100" src={banner} alt="" srcset="" />
      <h3 className="text-center mb-5">Services</h3>
      <Services></Services>
    </div>
  );
};

export default Home;
