import React, { useContext } from "react";
import Form from "../components/Form";
import Input from "../components/Input";
import Button from "../components/Button";

import { MyContext, MyContextProvider } from "../DataContext";

import styled from "styled-components";
import { validationSchema } from "../schemaForLogin";
import { Link } from "react-router-dom";

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

const Login = () => {
  const { values, setValue, errors, buttonHandler } = useContext(MyContext);
  const handleChange = (e) => setValue(e.target.name, e.target.value);
  return (
    <>
      <LoginWrapper>
        <h1>Login</h1>
        <Form>
          <Input
            value={values.email}
            text="Email address"
            type="email"
            placeholder="Enter e-mail"
            name="email"
            description={errors.email}
            onChange={handleChange}
            error={!!errors.email}
          />
          <Input
            value={values.password}
            text="Password"
            type="password"
            placeholder="Enter password"
            name="password"
            description={errors.password}
            onChange={handleChange}
            error={!!errors.password}
          />
        </Form>
        <Button text="Login" onClick={buttonHandler} />
        <Link to="/registration">
          <Button text="Create an account" />
        </Link>
      </LoginWrapper>
    </>
  );
};

const LoginContainer = (props) => {
  const initialValues = {
    email: "",
    password: "",
  };
  return (
    <MyContextProvider
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      <Login {...props} />
    </MyContextProvider>
  );
};

export default LoginContainer;
