import React, { useContext, useState } from "react";
import { createContext } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const setValues = (values) => {
    setData((prevData) => ({
      ...prevData,
      ...values,
    }));
  };

  return (
    <DataContext.Provider value={{ data, setValues }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);

// --------------------

import React, { useState } from "react";
import { createContext } from "react";

export const MyContext = React.createContext({});

const Provider = ({ children, initialValues = {}, initialErrors = {} }) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialErrors);
  const []

  const setValue = (name, value) => {
    setValues({ ...values, [name]: value });
  };
  console.log(values);
  return (
    <MyContext.Provider value={{ values, setValues,errors,setErrors, setValue }}>
      {children}
    </MyContext.Provider>
  );
};

export const MyContextProvider = Provider;
