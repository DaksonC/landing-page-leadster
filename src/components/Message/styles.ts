import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    width: 12rem;
    height: 2rem;
    border: 2px solid ${(props) => props.theme.colors.primary};
    border-radius: 1rem 1rem 1rem 0.2rem;
    color: ${(props) => props.theme.colors.primary};
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;

    &:hover {
      background: ${(props) => props.theme.colors.primary};
      color: ${(props) => props.theme.colors.background};
    }
  }

  h4 {
    color: ${(props) => props.theme.colors.text};
    font-size: 2.5rem;
    margin: 1rem 0;
  }

  h1 {
    color: ${(props) => props.theme.colors.primary};
    font-weight: bold;
    font-size: 5rem;
    padding: 0 0 0 2rem;
  }

  p {
    color: ${(props) => props.theme.colors.text};

    span {
      font-weight: bold;
    }
  }

  @media (max-width: 768px) {
    button {
      width: 10rem;
      height: 1.5rem;
      font-size: 0.6rem;
    }

    h4 {
      font-size: 1rem;
    }

    h1 {
      font-size: 2rem;
      padding: 0 0 0 1.3rem;
    }

    p {
      font-size: 0.7rem;
      text-align: center;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 0 0 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.line};
`;

export const Image = styled.img`
  position: relative;
  top: -2.5rem;
  left: -1.9rem;
  background: transparent;

  @media (max-width: 768px) {
    width: 1.8rem;
    position: relative;
    top: -1rem;
    left: -0.9rem;
  }
`;