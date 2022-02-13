import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { DataProvider } from "./DataContext";
import styled, { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`;

ReactDOM.render(
  <>
    <Global />
    <DataProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </DataProvider>
  </>,
  document.getElementById("root")
);
