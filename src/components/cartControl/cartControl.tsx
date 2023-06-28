"use client"
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { CartIcon } from "../icons/cartIcon";
import { CartCount, Container } from "./cartControl.style";

export function CartControl(){
  const {value} = useLocalStorage('cart-items', [])
  
  return(
    <Container>
      <CartIcon />
      {value.length > 0 && <CartCount>{value.length}</CartCount>}
    </Container>
  )
}