import React from "react";
import PropTypes from "prop-types";

import { HeaderSeparator } from "../views/HeaderSeparator";
import { DivCentered } from "./DivCentered";

const Section = ({ headerText, darkMode, contentHeight, children }) => (
  <>
    <HeaderSeparator headerText={headerText} darkMode={darkMode} />
    <DivCentered height={contentHeight} darkMode={darkMode}>
      {children}
    </DivCentered>
  </>
);

Section.propTypes = {
  headerText: PropTypes.string.isRequired,
  darkMode: PropTypes.bool,
  contentHeight: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};

Section.defaultProps = {
  darkMode: false,
  contentHeight: 100,
};

export { Section };
