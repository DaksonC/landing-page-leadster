import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 50rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.colors.background};
`;