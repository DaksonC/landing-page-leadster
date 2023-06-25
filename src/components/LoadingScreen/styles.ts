import { styled } from "styled-components";

export const LoadingScreenContainer = styled.div` 
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
