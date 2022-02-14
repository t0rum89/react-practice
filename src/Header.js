import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: orangered;
  color: white;
  padding: 10px;

  & a {
    color: white;
    text-decoration: none;
    outline: none;
    margin-right: 20px;
  }

  & a:last-child {
    margin-right: 0px;
  }
`;

const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <h1>My App</h1>
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
