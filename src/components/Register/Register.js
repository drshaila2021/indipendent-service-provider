import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();

  const handleEmailOnBlur = (event) => {
    setEmail(event.target.value);
    console.log(event.target.value);
  };
  const handlePasswordOnBlur = (event) => {
    setPassword(event.target.value);
    console.log(event.target.value);
  };
  const handleCreateUser = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(email, password);
    console.log(email.password);
    navigate("/home");
  };

  return (
    <div>
      <div className="mx-auto w-50">
        <h3>Please Register Here</h3>

        <Form onSubmit={handleCreateUser}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onBlur={handleEmailOnBlur}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onBlur={handlePasswordOnBlur}
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <Button variant="primary mb-3" type="submit">
            Submit
          </Button>
        </Form>
        <p>
          Already have any account?
          <Link className="link-register mx-1" to="/login">
            Login Here
          </Link>
        </p>
        <h4>Or</h4>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Register;
