import React, { useContext } from "react";

import { SessionContext } from "../../../../providers";
import { StyledDiv, StyledH2, StyledP, StyledHR } from "../shared";

const EducationBody = (language) => (
  <>
    <StyledH2>{language.educationTitle.toUpperCase()}</StyledH2>
    {language.schools.map((school, index) => (
      <div key={index}>
        <StyledP bold>{school.name}</StyledP>
        <StyledP>{school.yearAttended}</StyledP>
        <StyledP>
          {language.major} {school.major}
        </StyledP>
        <StyledP>
          {language.concentration} {school.concentration}
        </StyledP>
        {index !== language.schools.length - 1 && <StyledHR />}
      </div>
    ))}
  </>
);

const Education = () => {
  const { language } = useContext(SessionContext);
  return <StyledDiv>{EducationBody(language)}</StyledDiv>;
};

export { Education };
