import styled from "styled-components";

const H1Centered = styled.h1`
  position: absolute;
  font-size: ${({ fontSize }) => `${fontSize}vw`};
  text-align: center;
  margin-block-start: 0;
`;

export { H1Centered };
