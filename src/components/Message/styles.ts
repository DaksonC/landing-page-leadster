import { styled } from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 1px solid red;

  button {
    width: 12rem;
    height: 2rem;
    border: 2px solid #2588FC;
    border-radius: 1rem 1rem 1rem 0.2rem;
    color: #2588FC;
    font-weight: bold;
    text-transform: uppercase;
  }

  h4 {
    color: #2C3D48;
    font-size: 2.5rem;
    margin: 1rem 0;
  }

  h1 {
    color: #2588FC;
    font-weight: bold;
    font-size: 5rem;
    padding: 0 0 0 2rem;
  }

  p {
    color: #2C3D48;

    span {
      font-weight: bold;
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
  border-bottom: 1px solid #D9D9D9;
`;

export const Image = styled.img`
  position: relative;
  top: -2.5rem;
  left: -1.9rem;
  background: transparent;
`;