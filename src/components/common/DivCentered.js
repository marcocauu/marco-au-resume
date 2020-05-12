import styled from "styled-components";

const DivCentered = styled.div`
  height: ${({ height }) => `${height}vh`};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ darkMode, theme: { colors } }) =>
    darkMode ? colors.darkPlum : "inherit"};
`;

export { DivCentered };
