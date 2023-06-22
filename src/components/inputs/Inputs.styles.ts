'use client'
import styled from 'styled-components'

export const PrimaryInput = styled.input`
  width: 352px;
  border-radius: 8px;
  padding: 9px 50px 9px 16px;
  border: none;

  background-color: var(--bg-secondary);

  font-family: inherit;
  font-size: 14px;
  line-height: 22px;
  color: var(--text-dark);
`

export const InputContainer = styled.div`
  position: relative;
  width: 352px;
  
  svg {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
  }
`
