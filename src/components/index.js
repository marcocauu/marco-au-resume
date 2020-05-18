import React from "react";
import PropTypes from "prop-types";

import { SessionProvider, ThemeProvider } from "./providers";
import { Router } from "./views";
import language from "../resources/language/en.json";
import theme from "../resources/theme/theme.json";

const App = ({ basename }) => (
  <SessionProvider basename={basename} language={language}>
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  </SessionProvider>
);

App.propTypes = {
  basename: PropTypes.string.isRequired,
};

export { App };
