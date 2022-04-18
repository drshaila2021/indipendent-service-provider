import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";

import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

  //   const [user, loading, error] = useAuthState(auth, options);

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleEmailOnBlur = (event) => {
    setEmail(event.target.value);
    console.log(event.target.value);
  };
  const handlePasswordOnBlur = (event) => {
    setPassword(event.target.value);
    console.log(event.target.value);
  };
  if (user) {
    // navigate("/home");
    navigate(from, { replace: true });
  }
  let errorElement;
  if (error) {
    errorElement = <p className="text-danger">Error: {error.message}</p>;
  }

  const handleLogin = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
    console.log(email.password);
  };
  const resetPassword = async (event) => {
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email");
    } else {
      toast("please enter your email address");
    }
  };

  return (
    <div className=" mx-auto w-50">
      <h3>Please login here</h3>

      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onBlur={handleEmailOnBlur}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onBlur={handlePasswordOnBlur}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        {errorElement}
        {/* <ToastContainer></ToastContainer> */}
        {loading && <p>Loading....</p>}
        <Button variant="primary mb-3" type="submit">
          Submit
        </Button>
      </Form>
      <p>
        Don't have any account?
        <Link className="link-register mx-1" to="/register">
          Register Here
        </Link>
      </p>
      <p>
        Forget Password?{" "}
        <button
          className="btn btn-link text-primary pe-auto text-decoration-none"
          onClick={resetPassword}
        >
          Reset Password
        </button>{" "}
      </p>
      <p>Or</p>
      <SocialLogin></SocialLogin>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;
