import { styled } from "styled-components";

export const LoadingScreenContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ImageLoading = styled.img`
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(359deg);
    }
  }

  animation: spin 4s infinite linear;

  @media (max-width: 768px) {
    width: 10rem;
  }
`;
