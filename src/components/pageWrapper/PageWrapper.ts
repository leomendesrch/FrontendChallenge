'use client'
import { styled } from "styled-components";

export const PageWrapper = styled.div`
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

export const ProductPageWrapper = styled.div`
  padding: 26.5px 160px 89px 160px;
  min-height: calc(100vh - 100px);
  background-color: var(--bg-primary);
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media (min-width: ${({theme}) => theme.mobileBreakPoint}){
  
  }

  @media (min-width: ${({theme}) => theme.tabletBreakPoint}){
  
  }

  @media (min-width: ${({theme}) => theme.desktopBreakPoint}){
  padding: 26.5px 160px 89px 160px;
  }
`

export const CartPageWrapper = styled.div`
  min-height: 100vh;
  background-color: var(--bg-primary);
  display: flex;
  justify-content: center;

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