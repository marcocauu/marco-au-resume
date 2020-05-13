import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 414px) {
    display: none;
  }
`;

const StyledP = styled.p`
  font-style: italic;
`;

const StyledImg = styled.img`
  max-height: 70%;
  max-width: 70%;
`;

const Image = ({ text, path }) => (
  <StyledDiv>
    <StyledImg src={path} />
    <StyledP>{text}</StyledP>
  </StyledDiv>
);

Image.propTypes = {
  text: PropTypes.string,
  path: PropTypes.string.isRequired,
};

export { Image };
