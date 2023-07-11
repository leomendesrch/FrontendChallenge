'use client'
import styled from 'styled-components'

export const PrimaryInput = styled.input`
  width: 100%;
  border-radius: 8px;
  padding: 9px 50px 9px 16px;
  border: none;

  background-color: var(--bg-secondary);

  font-family: inherit;
  font-size: 12px;
  line-height: 20px;
  color: var(--text-dark);

  @media(min-width: ${({theme}) => theme.mobileBreakPoint}){
    padding: 6px 45px 6px 10px;
    line-height: 10px;
    font-size: 12px;
    text-overflow: ellipsis;
  }

  @media(min-width: ${({theme}) => theme.tabletBreakPoint}){
  line-height: 22px;
  font-size: 14px;
  padding: 9px 50px 9px 16px;
  }

  @media(min-width: ${({theme}) => theme.desktopBreakPoint}){
  line-height: 22px;
  font-size: 14px;
  padding: 9px 50px 9px 16px;
  }

`

export const InputContainer = styled.div`
  position: relative;
  width: 250px;
  
  svg {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
  }

  @media(min-width: ${({theme}) => theme.mobileBreakPoint}){
    width: 125px;
  }

  @media(min-width: ${({theme}) => theme.tabletBreakPoint}){
    width: 275px;
  }

  @media(min-width: ${({theme}) => theme.desktopBreakPoint}){
    width: 352px;
  }
`
