import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.div`
  width: 55rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.background};
`;

export const HeaderStyled = styled.div`
  width: 100%;
  height: 8rem;
  background: ${({ theme }) => theme.colors.background};
`;

export const BodyStyled = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.background};
`;