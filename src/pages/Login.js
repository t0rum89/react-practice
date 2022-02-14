import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Login = () => {
  const navigate = useNavigate();

  return (
    <>
      <LoginWrapper>
        <h1>Login</h1>
        <Input
          text="Email address"
          type="email"
          placeholder="Enter e-mail"
          name="email"
        />
        <Input
          text="Password"
          type="password"
          placeholder="Enter password"
          name="password"
        />
        <Button
          onClick={() => {
            navigate("/registration");
          }}
          text="Login"
        />
        <Button text="Create an account" />
      </LoginWrapper>
    </>
  );
};

export default Login;
