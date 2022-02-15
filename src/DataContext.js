import React, { useContext, useState } from "react";

const MyContext = React.createContext({});

const Provider = ({ children, initialValues = {}, initialErrors = {} }) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const setValue = (name, value) => {
    setValues({ ...values, [name]: value });
  };

  console.log(values);

  return (
    <MyContext.Provider
      value={{
        values,
        setValues,
        errors,
        setErrors,
        setValue,
        isValid,
        setIsValid,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export const MyContextProvider = Provider;
