import { styled } from "styled-components";

export const Container = styled.div`
  min-height: 100%;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  background-color: ${({ theme }) => theme.colors.background};

  @media (max-width: 320px) {
    grid-template-columns: repeat(1, 1fr);

  }
`;