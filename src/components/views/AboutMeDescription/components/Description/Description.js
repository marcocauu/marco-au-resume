import React, { useContext } from "react";
import styled from "styled-components";

import { SessionContext } from "../../../../providers";

const StyledDiv = styled.div`
  width: 50%;
  padding: 2em;

  @media (max-width: 375px) {
    width: 100%;
  }
`;

const DescriptionBody = (descriptionArray) => {
  return descriptionArray.map((description, index) => {
    return <p key={index}>{description}</p>;
  });
};

const Description = () => {
  const { language } = useContext(SessionContext);
  return <StyledDiv>{DescriptionBody(language.description)}</StyledDiv>;
};

export { Description };
