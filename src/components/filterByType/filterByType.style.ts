'use client'
import { styled } from "styled-components";

interface FilterItemProps{
  selected: boolean
}

export const FilterList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  list-style: none;

  @media (min-width: ${({theme}) => theme.mobileBreakPoint}){
  gap: 20px;
  }

  @media (min-width: ${({theme}) => theme.tabletBreakPoint}){
  gap: 40px;
  }

  @media (min-width: ${({theme}) => theme.desktopBreakPoint}){
  gap: 40px;
  }
`
export const FilterItem = styled.li<FilterItemProps>`
  color: ${props => props.selected? 'var(--darker-text)' : 'var(--text-dark)'};
  text-align: center;
  text-transform: uppercase;
  font-size: 16px;
  font-family: inherit;
  line-height: 22px;
  font-weight: ${props => props.selected? '600' : '400'};
  border-bottom: ${props => props.selected? '4px solid var(--orange-low)' : ''};
  cursor: pointer;

  @media (min-width: ${({theme}) => theme.mobileBreakPoint}){
  font-size: 13px;
  }

  @media (min-width: ${({theme}) => theme.tabletBreakPoint}){
  font-size: 16px;
  }

  @media (min-width: ${({theme}) => theme.desktopBreakPoint}){
  font-size: 16px;
  }
`