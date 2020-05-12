import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledBody = styled.div`
  background-color: ${({ theme: { colors } }) => colors.beige};
  font-family: ${({ theme: { fontFamily } }) => fontFamily.robotoMono};
`;

const Body = ({ children }) => <StyledBody>{children}</StyledBody>;

Body.propTypes = {
  children: PropTypes.node.isRequired,
};

Body.defaultProps = {
  backgroundColor: "white",
};

export { Body };
