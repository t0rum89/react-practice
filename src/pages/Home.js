import React from "react";

import styled from "styled-components";

const HomeWrapper = styled.div`
  text-align: center;
  h1 {
    margin-top: 15px;
    margin-bottom: 15px;
  }
`;

const Home = () => {
  return (
    <>
      <HomeWrapper>
        <h1>Home</h1>
        <p>This is demo app with login and registration</p>
      </HomeWrapper>
    </>
  );
};

export default Home;
