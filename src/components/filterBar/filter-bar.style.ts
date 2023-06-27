'use client'
import { styled } from "styled-components";

export const FilterContainer = styled.div`
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