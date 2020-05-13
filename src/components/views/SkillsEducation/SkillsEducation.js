import React from "react";
import styled from "styled-components";

import { DivCentered } from "../../common";
import { Skills, Education } from "./components";

const StyledDivCentered = styled(DivCentered)`
  justify-content: flex-start;
  align-items: flex-start;
  align-content: space-evenly;
  padding: 2em 12em 2em 12em;

  @media (max-width: 414px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0em;
  }
`;

const SkillsEducation = () => {
  return (
    <StyledDivCentered height={110} darkMode>
      <Skills />
      <Education />
    </StyledDivCentered>
  );
};

export { SkillsEducation };
