import React from "react";

const Input = (props) => {
  const { text, name, type, placeholder } = props;

  return (
    <>
      <label htmlFor={name}>
        <b>{text}</b>
      </label>
      <input type={type} placeholder={placeholder} name={name} />
    </>
  );
};

export default Input;
