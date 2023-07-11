"use client"
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { CartIcon } from "../icons/cartIcon";
import { CartCount, Container } from "./cartControl.style";
import { useRouter } from "next/navigation";

export function CartControl(){
  const {value} = useLocalStorage('cart-items', [])
  const router = useRouter()

  const handleNavigateToCart = () => {
    router.push('/cart')
  }

  return(
    <Container onClick={handleNavigateToCart}>
      <CartIcon />
      {value.length > 0 && <CartCount>{value.length}</CartCount>}
    </Container>
  )
}