import { styled } from "styled-components";

export const CardContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  margin-top: 1rem;
  cursor: pointer;

  h3 {
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.background};
    font-size: 0.9rem;
    padding: 1rem;
  }

  &:hover {
    h3 {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const ImagePreview = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  object-fit: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem 1rem 0 0;
`;

export const IconPlay = styled.div`
  display: none;
  position: absolute;
  top: calc(50% - (3rem /2));
  left: calc(50% - (3rem /2));  
  font-size: 3rem;
  background: transparent;
  color: ${({ theme }) => theme.colors.line};
`;

export const IconPlayContainer = styled.div`
  position: relative;
  background: transparent;

  &:hover {
    ${IconPlay} {
      display: block;
    }
  }
`;

export const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 10.5rem;
  border-radius: 1rem 1rem 0 0;
  background-color: rgba(0, 0, 255, 0.3);
  opacity: 0;
  transition: opacity 0.5s ease-in-out;

  ${IconPlayContainer}:hover & {
      opacity: 1;
  }
`;


