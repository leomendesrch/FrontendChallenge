"use client"
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { CartIcon } from "../cartIcon/cartIcon";
import { CartCount, Container } from "./cartControl.style";

export function CartControl(){
  const {value} = useLocalStorage('cart-items')

  return(
    <Container>
      <CartIcon />
      {value.length && <CartCount>{value.length}</CartCount>}
    </Container>
  )
}