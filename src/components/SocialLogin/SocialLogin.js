import React from "react";
import { Button } from "react-bootstrap";
import google from "../../Images/goole.png";
const SocialLogin = () => {
  return (
    <div>
      <Button>
        <img style={{ width: "30px" }} src={google} alt="" srcset="" />
        Google Sign In
      </Button>
    </div>
  );
};

export default SocialLogin;
