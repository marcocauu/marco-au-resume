import React, { useContext } from "react";
import styled from "styled-components";

import { SessionContext } from "../../../../providers";

const StyledDiv = styled.div`
  width: 50%;
  padding: 2em 2em 2em 8em;

  @media (max-width: 414px) {
    width: 75%;
    padding: 1em;
  }
`;

const StyledH2 = styled.h2`
  color: ${({ theme: { colors } }) => colors.plum};
  font-style: italic;
  letter-spacing: 0.3em;
  font-weight: bold;

  @media (max-width: 414px) {
    font-size: 0.75em;
  }
`;

const StyledP = styled.p`
  color: ${({ theme: { colors } }) => colors.beige};
  font-weight: ${({ bold }) => (bold ? "bold" : "initial")};

  @media (max-width: 414px) {
    font-size: 0.75em;
  }
`;

const SkillBody = (skillTitle, skills) => (
  <>
    <StyledH2>{skillTitle.toUpperCase()}</StyledH2>
    {skills.map((skill, index) => (
      <>
        <StyledP style={{ color: "white" }} key={index} bold>
          {`${skill.title}:`}
        </StyledP>
        <StyledP>{skill.frameworks.join(", ")}</StyledP>
      </>
    ))}
  </>
);

const Skills = () => {
  const { language } = useContext(SessionContext);
  return (
    <StyledDiv>{SkillBody(language.skillTitle, language.skills)}</StyledDiv>
  );
};

export { Skills };
