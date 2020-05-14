import React, { useContext } from "react";
import styled from "styled-components";

import { DivCentered } from "../../common";
import { Skills, Education } from "./components";
import { SessionContext } from "../../providers";

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
  const { language } = useContext(SessionContext);
  return (
    <StyledDivCentered height={110} darkMode>
      <Skills title={language.skillTitle} skills={language.skills} />
      <Education
        title={language.educationTitle}
        major={language.majorTitle}
        concentration={language.concentrationTitle}
        education={language.schools}
      />
    </StyledDivCentered>
  );
};

export { SkillsEducation };
