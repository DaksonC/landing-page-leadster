import { styled } from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.colors.background};

  @media (max-width: 768px) {
    height: 4rem;
  }
`;

export const Image = styled.img`
  width: auto;
  height: auto;
  margin: 0 20px;
  background: ${(props) => props.theme.colors.background};

  @media (max-width: 768px) {
    width: 130px;
    height: 30px;
  }
`;