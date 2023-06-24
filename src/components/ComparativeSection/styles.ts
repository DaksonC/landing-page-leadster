import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 48rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  gap: 3rem;

  @media (max-width: 1024px) {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export const Image = styled.img`
  width: auto;
  height: auto;
  padding: 0 2rem;
  background: transparent;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  h3 {
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors.text};
  }

  h2 {
    font-size: 2.5rem;
    font-weight: bold;
    margin: 0.1rem 0;
    color: ${(props) => props.theme.colors.text};
  }

  p {
    margin-bottom: 0.5rem;
    color: ${(props) => props.theme.colors.text};

    span {
      font-weight: bold;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 0 2rem;
  }
  
  @media (max-width: 1024px) {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export const Text = styled.div`
  padding-right: 2rem;
  border-bottom: 2px solid ${(props) => props.theme.colors.line};

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h3 {
      font-size: 0.9rem;
    }

    h2 {
      font-size: 1.5rem;
    }

    p {
      font-size: 0.7rem;
    }
  }
`;

export const DemoButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  border: none;
  margin-top: 1rem;

  button {
    width: 12rem;
    height: 3rem;
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.background};
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 1.5rem;
    text-transform: uppercase;
  }
`;

export const ImageRDStration = styled.img`
  width: 8rem;
  height: auto;
  margin-left: 0.7rem;
  background: transparent;

  @media (max-width: 768px) {
    width: 7rem;
    height: auto;
  }
`;

export const ImageCardAndStarContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 0.7rem 0;

  p {
    font-size: 0.7rem;
    margin: 0 0.3rem;
    color: ${(props) => props.theme.colors.text};
  }

  h4 {
    padding: 0 0.5rem;
    color: ${(props) => props.theme.colors.text};
  }
`;

export const ImageCard = styled.img`
  width: 0.8rem;
`;

export const ImageStar = styled.img`
  width: 4rem;
`;