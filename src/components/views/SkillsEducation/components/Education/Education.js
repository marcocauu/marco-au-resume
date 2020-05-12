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

const StyledHR = styled.hr`
  width: 50%;
  margin-left: 0px;
  border: 2px solid #a179af;
  background-color: ${({ theme: { colors } }) => colors.plum};
`;

const EducationBody = (educationTitle, schools) => (
  <>
    <StyledH2>{educationTitle.toUpperCase()}</StyledH2>
    {schools.map((school, index) => (
      <>
        <StyledP key={index} bold>
          {school.name} {school.yearAttended}
        </StyledP>
        <StyledP key={index}>{school.major}</StyledP>
        <StyledP key={index}>{school.concentration}</StyledP>
        {index !== schools.length - 1 && <StyledHR />}
      </>
    ))}
  </>
);

const Education = () => {
  const { language } = useContext(SessionContext);
  return (
    <StyledDiv>
      {EducationBody(language.educationTitle, language.schools)}
    </StyledDiv>
  );
};

export { Education };
