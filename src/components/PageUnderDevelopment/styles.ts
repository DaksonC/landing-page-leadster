import { styled } from "styled-components";

export const Container = styled.div`
  color: ${({ theme }) => theme.colors.text};
  background-color: transparent;
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;