import React from "react";

import styled from "styled-components";

import { useTranslation } from "react-i18next";

const HomeWrapper = styled.div`
  text-align: center;
  h1 {
    margin-top: 15px;
    margin-bottom: 15px;
  }
`;

const Home = () => {
  const { t, i18n } = useTranslation("common");
  return (
    <>
      <HomeWrapper>
        <h1>{t("home.title")}</h1>
        <p>{t("home.description")}</p>
      </HomeWrapper>
    </>
  );
};

export default Home;
