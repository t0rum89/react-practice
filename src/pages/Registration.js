import React from "react";
import Form from "../components/Form";
import Input from "../components/Input";
import Button from "../components/Button";

import { MyContextProvider } from "../DataContext";

import styled from "styled-components";

const RegistrationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  h1 {
    margin-top: 15px;
    margin-bottom: 15px;
  }

  input {
    margin-bottom: 15px;
  }
`;

const Registration = ({ username, email, password, password2 }) => {
  return (
    <>
      <RegistrationWrapper>
        <h1>Registration</h1>
        <Form>
          <Input
            value={username}
            text="Username"
            type="text"
            placeholder="Enter username"
            name="username"
          />
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
          <Input
            value={password2}
            text="Confirm password"
            type="password"
            placeholder="Confirm password"
            name="password2"
          />
        </Form>
        <Button text="Registration" />
        <Button text="Already have an account?" />
      </RegistrationWrapper>
    </>
  );
};

const RegistrationContainer = (props) => {
  const initialValues = {};
  return (
    <MyContextProvider initialValues={initialValues}>
      <Registration {...props} />
    </MyContextProvider>
  );
};

export default RegistrationContainer;
