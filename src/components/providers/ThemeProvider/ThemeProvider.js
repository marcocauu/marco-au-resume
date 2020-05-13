import React from "react";
import { ThemeProvider, ThemeContext } from "styled-components";
import PropTypes from "prop-types";

const Theme = ({ children, theme }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

Theme.propTypes = {
  theme: PropTypes.object.isRequired,
};

export { Theme as ThemeProvider, ThemeContext };
