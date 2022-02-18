import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { createGlobalStyle } from "styled-components";

import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

import common_en from "./locales/en/translation.json";
import common_fr from "./locales/en/translation.json";
import common_he from "./locales/en/translation.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      common: common_en,
    },
    fr: {
      common: common_fr,
    },
    he: {
      common: common_he,
    },
  },
});

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
    <I18nextProvider i18n={i18next}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </I18nextProvider>
  </>,
  document.getElementById("root")
);
