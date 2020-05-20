import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { DivCentered, H1Centered } from "../../common";

const StyledH1 = styled(H1Centered)`
  border-top: ${({
    theme: {
      colors: { plum },
    },
  }) => `0.1em solid ${plum}`};
  border-bottom: ${({
    theme: {
      colors: { plum },
    },
  }) => `0.1em solid ${plum}`};
  padding: 0.25em;
  font-style: italic;
  color: ${({
    darkMode,
    theme: {
      colors: { beige },
    },
  }) => (darkMode ? beige : "inherit")};
`;

const HeaderSeparator = ({ headerText, darkMode }) => (
  <DivCentered height={50} darkMode={darkMode}>
    <StyledH1 fontSize={7} darkMode={darkMode}>
      {headerText}
    </StyledH1>
  </DivCentered>
);

HeaderSeparator.propTypes = {
  headerText: PropTypes.string.isRequired,
  darkMode: PropTypes.bool,
};

HeaderSeparator.defaultProps = {
  darkMode: false,
};

export { HeaderSeparator };
