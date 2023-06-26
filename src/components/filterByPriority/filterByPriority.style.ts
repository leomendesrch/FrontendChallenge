"use client"
import { styled } from "styled-components";

export const FilterContainer = styled.div`
  display: flex;
  position: relative;
  z-index: 1;
`

export const FilterText = styled.button`
  display: flex;
  color: var(--text-dark);
  text-align: center;
  font-size: 14px;
  line-height: 22px;
  font-family: inherit;
  border: none;
  height: 24px;
  background-color: transparent;
  cursor: pointer;
  gap: 8px;
`

export const PriorityFilter = styled.ul`
  width: 167px;
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: 12px 16px;
  border-radius: 4px;
  list-style: none;
  top: 100%;
  right: 0;
  li + li {
    margin-top: 4px;
  }
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.10);
  z-index: 1;
  background-color: white;
`
export const PriorityFilterText = styled.li`
  color: var(--text-dark);
  font-size: 14px;
  font-family: inherit;
  line-height: 22px;
  cursor: pointer;
`