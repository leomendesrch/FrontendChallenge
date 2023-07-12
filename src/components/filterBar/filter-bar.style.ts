'use client'
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-end;
  gap: 24px;

  @media (min-width: ${({theme}) => theme.mobileBreakPoint}){
    align-items: center;
  }

  @media (min-width: ${({theme}) => theme.tabletBreakPoint}){
    align-items: flex-end;
  }

  @media (min-width: ${({theme}) => theme.desktopBreakPoint}){
    align-items: flex-end;
  }
`

export const FiltersContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  
  @media (min-width: ${({theme}) => theme.mobileBreakPoint}){
  flex-direction: column;
  gap: 10px
  }

  @media (min-width: ${({theme}) => theme.tabletBreakPoint}){
  flex-direction: row;
  gap: 0;
  }

  @media (min-width: ${({theme}) => theme.desktopBreakPoint}){
  flex-direction: row;
  gap: 0;
  }
`