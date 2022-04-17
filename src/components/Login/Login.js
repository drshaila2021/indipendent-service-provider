import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

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
    navigate("/home");
  }
  const handleLogin = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
    console.log(email.password);
  };

  return (
    <div className=" mx-auto w-50">
      <h3>Please login here</h3>

      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onBlur={handleEmailOnBlur}
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onBlur={handlePasswordOnBlur}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <p>
        Don't have any account?
        <Link className="link-register" to="/register">
          Register Here
        </Link>
      </p>
    </div>
  );
};

export default Login;