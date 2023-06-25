import { styled } from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.overlay};
`;

export const ModalContainer = styled.div`
  position: fixed;
  z-index: 1001;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 27rem;
  height: auto;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 1rem;
  border-top: 0.5rem solid ${({ theme }) => theme.colors.primary};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

export const ModalHeader = styled.div`  
  padding: 2rem;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 1rem 1rem 0 0;

  button {
    position: absolute;
    top: 0.4rem;
    right: 0.5rem;
    background: transparent;
    border: none;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text};

    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.colors.error};
    }
  }

  h4 {
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.background};

    span {
      color: ${({ theme }) => theme.colors.primary};
      background: ${({ theme }) => theme.colors.background};
    }
  }
`;

export const ModalBody = styled.div`
  width: 100%;
  height: 100%;

  .loading {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary};
    background: transparent;
  }
`;

export const ModalFooter = styled.div`
  padding: 2rem 0.5rem;
  border-radius: 0 0 1rem 1rem;
  background: ${({ theme }) => theme.colors.background};
  
  h5 {
    padding: 0.2rem 0;
    margin: 0.2rem 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.line};
    background: ${({ theme }) => theme.colors.background};
  }

  p {
    font-size: 0.8rem;
    padding: 0.2rem 0;
    background: ${({ theme }) => theme.colors.background};
  }

  .download__icons{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    margin: 0.5rem 0 0 0;

    @media (max-width: 768px) {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;
    }
  }

  .spreadsheet,
  .document,
  .presentation {
    width: 15rem;
    height: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 0.2rem;
    padding-left: 0.5rem;
    border-radius: 0.5rem;
    border: none;

    button {
      width: 100%;
      height: 1.5rem;
      border: none;
      border-radius: 0 0.5rem 0.5rem 0;
      font-size: 0.7rem;
      font-weight: 600;
      padding: 0.1rem 0.5rem;
      transition: all 0.2s ease-in-out;

      &:hover {
        cursor: pointer;
        opacity: 0.8;
      }
    }

    @media (max-width: 768px) {
      margin: 0.2rem 0;
    }
  }

  .spreadsheet {
    background: ${({ theme }) => theme.colors.greenDark};

    button {
      color: ${({ theme }) => theme.colors.greenDarkest};
      background: ${({ theme }) => theme.colors.greenLight};
    }
  }

  .document {
    background: ${({ theme }) => theme.colors.blue};

    button {
      color: ${({ theme }) => theme.colors.blueDarkest};
      background: ${({ theme }) => theme.colors.blueLight};
    }
  }

  .presentation {
    background: ${({ theme }) => theme.colors.yellowDark};

    button {
      color: ${({ theme }) => theme.colors.yellowDarkest};
      background: ${({ theme }) => theme.colors.yellowLight};
    }
  }
`;

export const ModalContainerDownload = styled.div`
  position: fixed;
  z-index: 1002;
  bottom: 0;
  left: 0;
  padding: 1rem 0.5rem;

  .download__icons{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
  }

  .spreadsheet,
  .document,
  .presentation, 
  .folder {
    width: 10rem;
    height: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.2rem;
    padding-left: 0.5rem;
    border-radius: 0.5rem;
    border: none;

    button {
      width: 100%;
      height: 1.5rem;
      border: none;
      border-radius: 0 0.5rem 0.5rem 0;
      font-size: 0.7rem;
      font-weight: 600;
      padding: 0.1rem 0.5rem;
      transition: all 0.2s ease-in-out;

      &:hover {
        cursor: pointer;
        opacity: 0.8;
      }
    }
  }

  .spreadsheet {
    background: ${({ theme }) => theme.colors.greenDark};

    button {
      color: ${({ theme }) => theme.colors.greenDarkest};
      background: ${({ theme }) => theme.colors.greenLight};
    }
  }

  .document {
    background: ${({ theme }) => theme.colors.blue};

    button {
      color: ${({ theme }) => theme.colors.blueDarkest};
      background: ${({ theme }) => theme.colors.blueLight};
    }
  }

  .presentation {
    background: ${({ theme }) => theme.colors.yellowDark};

    button {
      color: ${({ theme }) => theme.colors.yellowDarkest};
      background: ${({ theme }) => theme.colors.yellowLight};
    }
  }

  .folder {
    background: ${({ theme }) => theme.colors.purpleDark};

    button {
      color: ${({ theme }) => theme.colors.purpleDarkest};
      background: ${({ theme }) => theme.colors.purpleLight};
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;