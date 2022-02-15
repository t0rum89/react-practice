import React from "react";
import Form from "../components/Form";
import Input from "../components/Input";
import Button from "../components/Button";

import { MyContextProvider } from "../DataContext";

import styled from "styled-components";

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    margin-top: 15px;
    margin-bottom: 15px;
  }

  input {
    margin-bottom: 15px;
  }
`;

const Login = ({ email, password }) => {
  return (
    <>
      <LoginWrapper>
        <h1>Login</h1>
        <Form>
          <Input
            value={email}
            text="Email address"
            type="email"
            placeholder="Enter e-mail"
            name="email"
          />
          <Input
            value={password}
            text="Password"
            type="password"
            placeholder="Enter password"
            name="password"
          />
        </Form>
        <Button text="Login" />
        <Button text="Create an account" />
      </LoginWrapper>
    </>
  );
};

const LoginContainer = (props) => {
  const initialValues = {};
  return (
    <MyContextProvider initialValues={initialValues}>
      <Login {...props} />
    </MyContextProvider>
  );
};

export default LoginContainer;
