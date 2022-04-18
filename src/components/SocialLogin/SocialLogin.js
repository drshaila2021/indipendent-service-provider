import React from "react";
import { Button } from "react-bootstrap";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import google from "../../Images/goole.png";
const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  let errorElement;
  if (error) {
    errorElement = (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }

  if (user) {
    navigate("/home");
  }

  return (
    <div>
      <Button onClick={() => signInWithGoogle()}>
        <img style={{ width: "30px" }} src={google} alt="" srcset="" />
        Google Sign In
      </Button>
      {errorElement}
    </div>
  );
};

export default SocialLogin;
