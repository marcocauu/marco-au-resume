import React from "react";
import styled from "styled-components";

const StyledImg = styled.img`
  border-radius: 60px;
  height: 100%;
  width: 100%;
`;

const Icon = ({ iconLink }) => <StyledImg src={iconLink} />;

export { Icon };
