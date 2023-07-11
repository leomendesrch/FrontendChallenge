'use client'
import { styled } from "styled-components";

export const YourCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 22px;

  > p{
    color: var(--darker-text);
    font-size: 16px;
    font-weight: 300;
    line-height: 150%;
    margin-bottom: 23px;
    span{
      font-weight: 500;
    }
  }

  h2{
    color: var(--darker-text);
    font-size: 24px;
    font-family: inherit;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    text-transform: uppercase;
    margin-bottom: 6px;
  }


`

export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 736px;
`

export const CheckoutContainer = styled.div`
  max-height: 750px;
  display: flex;
  flex-direction: column;
  margin-left: 32px;
  margin-top: 15px;
  background-color: white;
  padding: 16px 24px 24px 24px;
  justify-content: space-between;
  align-items: flex-start;
`
export const CheckoutInfo = styled.div`
  width: 352px;
  background-color: white;
`

export const CheckoutHelp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  a{
    color: var(--text-dark);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    text-decoration-line: underline;
    text-transform: uppercase;
  }
`

export const CheckoutTitle = styled.h2`
  color: var(--darker-text);
  font-size: 20px;
  font-weight: 600;
  line-height: 150%;
  text-transform: uppercase;
  margin-bottom: 29px;
`

export const CheckoutPrice = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  p{
  color: var(--darker-text);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  }
`

export const CheckoutDelivery = styled(CheckoutPrice)`
  margin-bottom: 24px;
`

export const CheckoutTotal = styled(CheckoutPrice)`
  p{
    font-weight: 600;
  }
  margin-bottom: 40px;
`

export const CheckoutDivision = styled.div`
  height: 1px;
  width: 100%;
  background-color: var(--shapes);
  margin-bottom: 8px;

`

export const CheckoutButton = styled.button`
  width: 100%;
  text-align: center;
  justify-content: center;
  font-family: inherit;
  box-sizing: border-box;
  padding: 10px 0;
  border: none;
  border-radius: 5px;
  background-color: #58bc54;
  color: var(--text-white);
  font-size: 16px;
  font-weight: 500;
  line-height: 150%;
  text-transform: uppercase;
`