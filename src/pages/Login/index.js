import React, { useEffect, useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../../graphql/mutation";

function LoginPage() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [login, { data, loading, error }] = useMutation(LOGIN);

  useEffect(() => {
    if (token) {
      navigate("/products");
    }
  }, []);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  return (
    <>
      {error && <Alert variant={"danger"}>{JSON.parse(error.message).message} {console.log({error})}</Alert>}
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          login({
            variables: { email: form.email, password: form.password },
          }).then((res) => {
            localStorage.setItem("token", res.data.login);
            navigate("/products");
          });
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={loading}>
          Submit
        </Button>
      </Form>
    </>
  );
}

export default LoginPage;
