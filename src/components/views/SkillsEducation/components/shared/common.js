import styled from "styled-components";

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
  border: 1px solid #a179af;
  background-color: ${({ theme: { colors } }) => colors.plum};
`;

export { StyledDiv, StyledH2, StyledP, StyledHR };
