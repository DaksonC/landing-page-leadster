import { styled } from "styled-components";

export const Container = styled.footer`
  width: 100%;
  height: 30rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.colors.background};
`;

export const Content = styled.div`
  width: 50rem;
  height: 30rem;
  background: ${(props) => props.theme.colors.background};
`;

export const HeaderStyled = styled.div`
  width: 100%;
  height: 5rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: ${(props) => props.theme.colors.background};

  p {
    font-size: 0.7rem;
    color: ${(props) => props.theme.colors.line};
    background: ${(props) => props.theme.colors.background};
  }

  @media (max-width: 768px) {
    p {
      font-size: 0.5rem;
    }
  }
`;

export const Image = styled.img`
  width: auto;
  height: auto;
  margin-bottom: 0.3rem;
  background: transparent;

  @media (max-width: 768px) {
    width: 130px;
    height: 30px;
  }
`;

export const BodyStyled = styled.div`
  width: 100%;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  background: ${(props) => props.theme.colors.background};

  .links,
  .cases,
  .materials,
  .social-media {
    height: 100%;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    background: ${(props) => props.theme.colors.background};
  }
  
  h1 {
    font-size: 1rem;
    padding-bottom: 1rem;
    color: ${(props) => props.theme.colors.text};
    background: ${(props) => props.theme.colors.background};
  }
  
  p {
    font-size: 0.8rem;
    color: ${(props) => props.theme.colors.line};
    background: ${(props) => props.theme.colors.background};
    
    span {
      background: ${(props) => props.theme.colors.background};
      color: ${(props) => props.theme.colors.text};
    }
  }
  
  button {
    border: none;
    background: transparent;
    font-size: 0.8rem;
    color: ${(props) => props.theme.colors.line};
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme.colors.primary};
    }
  }

  .social-media {
    button {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      background: ${(props) => props.theme.colors.secondary};
    }
    
    .social-media__icon {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      gap: 0.5rem;
      background: transparent;
    }
  }

  @media (max-width: 768px) {
    height: auto;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;

    .links,
    .cases,
    .materials,
    .social-media {
      gap: 0.5rem;
      padding-left: 0.5rem;
    }

    h1 {
      margin-top: 0.7rem;
    }
  }
`;

export const FooterStyled = styled.div`
  width: 100%;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  background: ${(props) => props.theme.colors.background};

  p {
    font-size: 0.8rem;
    color: ${(props) => props.theme.colors.line};
    background: ${(props) => props.theme.colors.background};

    a {
      text-decoration: none;
      color: ${(props) => props.theme.colors.primary};
      background: ${(props) => props.theme.colors.background};
    }
  }

  @media (max-width: 768px) {
    p {
      font-size: 0.5rem;
    }
  }
`;