import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 8px;
`

export const NumberPages = styled.div`
  display: flex;
  gap: 2px;
`

export const Arrows = styled.div`
  display: flex;
  gap: 4px;
`

export const PageIcon = styled.div<{ selected: boolean }>`
  width: 32px;
  height: 32px;
  display: flex;
  border: ${({selected}) => selected? '1px solid var(--orange-low)' : 'none'};
  border-radius: 8px;
  background-color: ${({selected}) => selected? 'transparent' : 'var(--text-white-2)'} ;
  color: ${({selected}) => selected? 'var(--orange-low)' : 'var(--text-dark)'};

  justify-content: center;
  align-items: center;

  font-size: 16px;
  font-style: inherit;
  font-weight: 400;
  line-height: 150%;

  cursor: pointer;
`

export const ArrowIcon = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  border-radius: 8px;
  background-color: var(--text-white-2);
  color: var(--text-dark);

  justify-content: center;
  align-items: center;

  font-size: 16px;
  font-style: inherit;
  font-weight: 400;
  line-height: 150%;

  cursor: pointer;
`

