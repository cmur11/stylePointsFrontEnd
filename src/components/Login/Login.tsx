import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Login.css";
function Login() {
  const [valid, setValid] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const mockUsers = [
    {
      id: "1",
      email: "conor@gmail.com",
      password: "test123",
    },
    {
      id: "2",
      email: "conor2@gmail.com",
      password: "test2",
    },
    {
      id: "3",
      email: "abc@gmail.com",
      password: "testabc",
    },
  ];
  const validate = (e: any) => {
    e.preventDefault();

    // this should exist on server
    const user = mockUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      console.log("in valid", user);
      setValid(true);
      setErrorMessage("");
    } else {
      setValid(false);
      console.log("invalid");
      setErrorMessage("Invalid email or password");
    }
  };
  return (
    <div className="container">
      <h1>Sign in</h1>
      <Form className="login-form" onSubmit={(e) => validate(e)}>
        <div>
          <input
            type="email"
            required
            id="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            required
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {!valid && <div className="error-message">{errorMessage}</div>}

        <Button variant="primary" type="submit" className="btn-block">
          Submit
        </Button>
      </Form>
      <div>
        Don't have an account?
        <Link to="/signup">Sign up </Link>
      </div>
    </div>
  );
}

export default Login;
