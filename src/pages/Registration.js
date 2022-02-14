import React from "react";
import Page from "../components/Page";
import Button from "../components/Button";
import styled from "styled-components";

const RegistrationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Registration = () => {
  return (
    <>
      <RegistrationWrapper>
        <h1>Registration</h1>
        <Page />
        <Button text="Registration" />
        <Button text="Already have an account?" />
      </RegistrationWrapper>
    </>
  );
};

export default Registration;
