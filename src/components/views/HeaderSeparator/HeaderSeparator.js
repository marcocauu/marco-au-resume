import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { DivCentered, H1Centered } from "../../common";

const StyledH1 = styled(H1Centered)`
  border-top: ${({ theme: { colors } }) => `0.1em solid ${colors.plum}`};
  border-bottom: ${({ theme: { colors } }) => `0.1em solid ${colors.plum}`};
  padding: 0.25em;
  font-style: italic;
  color: ${({ darkMode, theme: { colors } }) =>
    darkMode ? colors.beige : "inherit"};
`;

const HeaderSeparator = ({ headerText, darkMode }) => {
  return (
    <DivCentered height={50} darkMode={darkMode}>
      <StyledH1 fontSize={7} darkMode={darkMode}>
        {headerText}
      </StyledH1>
    </DivCentered>
  );
};

HeaderSeparator.propTypes = {
  headerText: PropTypes.string.isRequired,
};

HeaderSeparator.defaultProps = {
  darkMode: false,
};

export { HeaderSeparator };
