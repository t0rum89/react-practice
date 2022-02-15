import React from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  input {
    height: 25px;
  }
`;

const Input = ({ text, name, type, placeholder }) => {
  return (
    <InputWrapper>
      <>
        <label htmlFor={name}>
          <b>{text}</b>
        </label>
        <br />
        <input type={type} placeholder={placeholder} name={name} />
      </>
    </InputWrapper>
  );
};

export default Input;
