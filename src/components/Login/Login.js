import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="container border border-3 border-dark my-5 py-4 shadow-lg rounded-3">
      <h1 className="fw-bolder fs-2 text-danger">LOG IN</h1>
      <Form className="p-4 login-form">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Link
          className="text-white border bg-danger px-3 py-2 rounded-3"
          style={{ textDecoration: "none" }}
          to="/"
        >
          Submit
        </Link>
      </Form>
    </div>
  );
};

export default Login;
