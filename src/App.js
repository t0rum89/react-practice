import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        MyContext
        <Route path="/login" element={<Login />} />
        MyContextProvider
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </>
  );
}

export default App;
