'use client'
import { styled } from "styled-components"



export const ProductContainer = styled.div`
  display: flex;
  background-color: white;
  gap: 31px;
  border-radius: 8px;
  width: 736px;
  height: 211px;
  flex-shrink: 0;
`

export const ProductImage = styled.img`
  display: flex;
  width: 256px;
  height: 211px;
  flex-shrink: 0;
  border-radius: 8px 0 0 8px;
`


export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 16px 24px 0px;
  
    > span{
    color: var(--darker-text);
    font-size: 12px;  
    font-weight: 400;
    line-height: 150%;
  }
`


export const ProductTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  width: 100%;
  
  h3{
    color: var(--darker-text);
    font-size: 20px;
    font-weight: 300;
    line-height: 150%;
  }

  button{
    border: none;
    background-color: transparent;
    cursor: pointer;
    display: flex;
  }
`

export const ProductDescription = styled.span`
  margin-bottom: 25px;
`

export const ProductCountAndPrice = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: flex-end;

  > p{

    color: var(--darker-text-2);
    font-size: 16px;
    font-weight: 600;
    line-height: 150%;
  }

  select{
    width: 65px;
    height: 40px;
    flex-shrink: 0;
    border-radius: 8px;
    border: 1.5px solid var(--select-border);
    background-color: var(--bg-secondary);
    color: var(--text-dark);
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    text-transform: uppercase;
  }
`

