import React from "react";
import PropTypes from "prop-types";

import { SessionProvider } from "./providers";
import { Router } from "./views";
import "../App.css";
import language from "../resources/language/en.json";
import theme from "../resources/theme/theme.json";

const App = ({ basename }) => (
  <SessionProvider basename={basename} language={language} theme={theme}>
    <Router />
  </SessionProvider>
);

App.propTypes = {
  basename: PropTypes.string.isRequired,
};

export { App };
