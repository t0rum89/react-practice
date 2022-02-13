import React, { useContext, useState } from "react";
import { createContext } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({
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
