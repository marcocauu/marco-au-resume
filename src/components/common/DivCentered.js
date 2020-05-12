import styled from "styled-components";

const DivCentered = styled.div`
  height: ${(props) => `${props.height}vh`};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export { DivCentered };
