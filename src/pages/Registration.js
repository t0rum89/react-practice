import React, { useContext } from "react";
import Form from "../components/Form";
import Input from "../components/Input";
import Button from "../components/Button";

import { MyContext, MyContextProvider } from "../DataContext";

import styled from "styled-components";
import { validationSchema } from "../schemaForRegistration";

import { Link } from "react-router-dom";

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
    margin-bottom: 10px;
  }
`;

const Registration = () => {
  const { values, setValue, errors, buttonHandler } = useContext(MyContext);
  const handleChange = (e) => setValue(e.target.name, e.target.value);
  return (
    <>
      <RegistrationWrapper>
        <h1>Registration</h1>
        <Form>
          <Input
            value={values.username}
            text="Username"
            type="text"
            placeholder="Enter username"
            name="username"
            description={errors.username}
            onChange={handleChange}
            error={!!errors.username}
          />
          <Input
            value={values.email}
            text="Email address"
            type="email"
            placeholder="Enter e-mail"
            name="email"
            description={errors.email}
            error={!!errors.email}
            onChange={handleChange}
          />
          <Input
            value={values.password}
            text="Password"
            type="password"
            placeholder="Enter password"
            name="password"
            description={errors.password}
            error={!!errors.password}
            onChange={handleChange}
          />
          <Input
            value={values.password2}
            text="Confirm password"
            type="password"
            placeholder="Confirm password"
            name="password2"
            description={errors.password2}
            onChange={handleChange}
            error={!!errors.password2}
          />
        </Form>
        <Button text="Registration" onClick={buttonHandler} />
        <Link to="/login">
          <Button text="Already have an account?" />
        </Link>
      </RegistrationWrapper>
    </>
  );
};

const RegistrationContainer = (props) => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    password2: "",
  };
  return (
    <MyContextProvider
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      <Registration {...props} />
    </MyContextProvider>
  );
};

export default RegistrationContainer;
