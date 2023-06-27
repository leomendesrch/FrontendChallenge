'use client'
import { styled } from "styled-components";

export const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;

    @media (min-width: ${({theme}) => theme.mobileBreakPoint}){
      gap: 10px;
    }

    @media (min-width: ${({theme}) => theme.tabletBreakPoint}){
      gap: 24px;
    }

    @media (min-width: ${({theme}) => theme.desktopBreakPoint}){
      gap: 24px;
    }
  }

  @media (min-width: ${({theme}) => theme.mobileBreakPoint}){
  gap: 10px;
  }

  @media (min-width: ${({theme}) => theme.desktopBreakPoint}){
  padding: 20px 160px;
  }
`

export const Logo = styled.a`
  color: var(--logo-color);
  font-size: 24px;
  line-height: 150%;
  cursor: pointer;

  @media (min-width: ${({theme}) => theme.mobileBreakPoint}){
  font-size: 22px;
  }

  @media (min-width: ${({theme}) => theme.tabletBreakPoint}){
  font-size: 33px;
  }

  @media (min-width: ${({theme}) => theme.desktopBreakPoint}){
  font-size: 40px;
  }

`