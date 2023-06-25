import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 5rem;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  border-top: 1px solid ${({ theme }) => theme.colors.line};

  p {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.background};
    padding: 0.5rem 1rem;
    font-weight: bold;
  }

  button {
    width: 2rem;
    height: 2rem;
    background-color: ${({ theme }) => theme.colors.background};
    border: none;
    border-radius: 0.5rem;
    margin: 0 0.1rem;
    color: ${({ theme }) => theme.colors.text};
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: 0.2s;
    
    &.active {
      border: 1px solid ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.primary};
      font-weight: bold;
    }
  }
`;