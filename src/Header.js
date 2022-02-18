import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "./components/Button";

import { useTranslation } from "react-i18next";

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: orangered;
  color: white;
  padding: 10px;

  a {
    color: white;
    text-decoration: none;
    outline: none;
    margin-right: 20px;
    cursor: pointer;
  }

  a:last-child {
    margin-right: 0px;
  }
`;

const Header = () => {
  const { i18n } = useTranslation("common");
  const test = (lang) => i18n.changeLanguage({ lang });

  return (
    <>
      <HeaderWrapper>
        <h1>My App</h1>
        <div>
          <Button onClick={test("en")} text="EN"></Button>
          <Button onClick={test("fr")} text="FR"></Button>
          <Button onClick={test("he")} text="HE"></Button>
        </div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/registration">Registration</Link>
        </nav>
      </HeaderWrapper>
    </>
  );
};

export default Header;
