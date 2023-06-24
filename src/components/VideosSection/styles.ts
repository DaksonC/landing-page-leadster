import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 50rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.colors.background};
`;

export const Content = styled.div`
  width: 55rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.colors.background};
  /* border: 1px solid red; */
`;

export const HeaderStyled = styled.div`
  width: 100%;
  height: 8rem;
  /* border: 1px solid blue; */
`;

export const BodyStyled = styled.div`
  width: 100%;
  height: 34rem;
  /* border: 1px solid green; */
`;

export const Pagination = styled.div`
  width: 100%;
  height: 8rem;
  border: 1px solid yellow;
`;