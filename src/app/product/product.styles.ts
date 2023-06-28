'use client'
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  gap: 23.5px;
`

export const ProductContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  height: 580px;
  gap: 32px;
`

export const ProductImage = styled.img`
  width: 640px;
  height: 580px;
  flex-shrink: 0;
`

export const ProductInfo = styled.section`
  display: flex;
  flex-direction: column;
  width: 448px;
  h1{
    color: var(--darker-text);
    font-size: 16px;
    font-family: inherit;
    line-height: 150%;
    font-weight: 500;
    margin-bottom: 12px;
  }

  span{
    color: var(--darker-text);
    font-size: 32px;
    font-family: inherit;
    font-weight: 300;
    line-height: 150%;
    margin-bottom: 4px;
  }

  p{
    color: var(--darker-text-2);
    font-size: 20px;
    font-family: inherit;
    font-weight: 600;
    line-height: 150%;
    margin-bottom: 24px;
  }

  p:nth-of-type(2){
    color: var(--darker-text);
    font-size: 12px;
    font-family: inherit;
    line-height: 150%;
    margin-bottom: 58px;
  }

  div{
    h2{
      color: var(--text-dark);
      font-size: 16px;
      font-family: inherit;
      font-weight: 500;
      line-height: 150%;
      text-transform: uppercase;
      margin-bottom: 8px;
    }

    p{
      color: var(--darker-text);
      font-size: 14px;
      font-family: inherit;
      line-height: 150%;
      width: 448px;
    }
  }
`

export const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 580px;
  button{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 107px;
    flex-shrink: 0;
    border-radius: 4px;
    background-color: var(--blue-color);
    border: none;
    cursor: pointer;

    color: var(--text-white);
    text-align: center;
    font-size: 16px;
    font-family: inherit;
    font-weight: 500;
    line-height: 150%;
    text-transform: uppercase;
    gap: 8px;
}
`


