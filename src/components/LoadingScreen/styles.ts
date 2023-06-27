import { styled } from "styled-components";

export const LoadingScreenContainer = styled.div`
  width: 100vw;
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  position: absolute;
  top: 50%;
  left: 0;
  background: transparent;

  h1{
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ImageLoadingContent = styled.div`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  border: 4px solid ${({ theme }) => theme.colors.background};
  border-top: 4px solid ${({ theme }) => theme.colors.primary};
  background: transparent;
  animation: spin 0.99s infinite linear;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(359deg);
    }
  }
`;

export const BackgroundIsActiveLoading = styled.div`
  width: 100vw;
  height: 100vh;
  background: transparent;
`;
