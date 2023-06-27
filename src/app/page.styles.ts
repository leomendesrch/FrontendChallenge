import { styled } from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 34px 160px;
  min-height: 100vh;
  background-color: var(--bg-primary);

  @media (min-width: ${({theme}) => theme.mobileBreakPoint}){
  padding: 34px 24px;
  }

  @media (min-width: ${({theme}) => theme.tabletBreakPoint}){
  padding: 34px 24px;
  }

  @media (min-width: ${({theme}) => theme.desktopBreakPoint}){
  padding: 34px 160px;
  }
`


