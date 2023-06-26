'use client'
import { styled } from "styled-components";

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 256px);
  grid-column-gap: 32px;
  grid-row-gap: 22px;
  max-width: 100%;
  margin-top: 32px;
`