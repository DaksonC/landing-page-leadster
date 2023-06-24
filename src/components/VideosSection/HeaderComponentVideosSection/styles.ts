import styled, { css } from "styled-components";

interface MenuProps {
  $isOpen: boolean;
}

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  background-color: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.line};

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0.2rem 0;
  }
`;

export const HamburguerButton = styled.button<MenuProps>`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 2rem;
  height: 2.2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  margin: 0.5rem 0;

  span {
    display: block;
    width: 100%;
    height: 5px;
    margin: 0.1rem 0;
    background-color: ${({ theme }) => theme.colors.text};
    border-radius: 2px;
    transition: all 0.3s ease-in-out;

    &:nth-child(2) {
      ${({ $isOpen }) => $isOpen && css({ opacity: 0 })};
    }
    
    &:nth-child(1),
    &:nth-child(3) {
      transform-origin: center;
      transition: transform 0.3s;
      ${({ $isOpen }) => $isOpen && css`
        &:first-child {transform: translateY(8px) rotate(45deg)}; 
        &:last-child {transform: translateY(-8px) rotate(-45deg)};
        background-color: ${({ theme }) => theme.colors.error};
      `};
    }
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const Menu = styled.div<MenuProps>`
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.background};
  padding-bottom: 1rem;

  button {
    width: auto;
    height: auto;
    color: ${({ theme }) => theme.colors.text};
    border: 1px solid ${({ theme }) => theme.colors.text};
    border-radius: 1rem;
    background-color: transparent;
    padding: 0.5rem 1rem;
    margin: 0 0.2rem;
    cursor: pointer;

    &:hover {
      border: 1px solid ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.primary};
    }

    &.active {
      border: none;
      color: ${({ theme }) => theme.colors.background};
      background-color: ${({ theme }) => theme.colors.primary};
    }
  }

  @media (max-width: 768px) {
    display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 1rem 0;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: auto;
    background-color: ${({ theme }) => theme.colors.background};
    border-bottom: 1px solid ${({ theme }) => theme.colors.line};
    z-index: 1;
  }
`;

export const Content = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: end;
  background-color: ${({ theme }) => theme.colors.background};
  padding-bottom: 1.3rem;

  p {
    color: ${({ theme }) => theme.colors.text};
    font-weight: bold;
    background-color: transparent;
    margin-right: 1rem;
  }

  select {
    width: auto;
    height: auto;
    color: ${({ theme }) => theme.colors.text};
    border: 1px solid ${({ theme }) => theme.colors.text};
    border-radius: 0.5rem;
    background-color: transparent;
    padding: 0.2rem 0.5rem;

    &:focus {
      outline: none;
      border: 1px solid ${({ theme }) => theme.colors.primary};
    }
  }
`;
