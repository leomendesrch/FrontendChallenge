'use client'
import { CartPageWrapper } from "@/components/pageWrapper/PageWrapper";
import { BackButton } from "@/components/backButton/backButton";
import CartItem from "@/components/cartItem/cartItem";

import { useLocalStorage } from "@/hooks/useLocalStorage";
import { CheckoutButton, CheckoutContainer, CheckoutDelivery, CheckoutDivision, CheckoutHelp, CheckoutInfo, CheckoutPrice, CheckoutTitle, CheckoutTotal, Container, ProductsContainer, YourCartContainer } from "./cartPage.style";

import { FormatCents } from "@/utils/format-price";

import { ProductsInCart } from "@/types/products";

export default function CartPage(){
  const { value, updateLocalStorage } = useLocalStorage<ProductsInCart[]>('cart-items', [])

  function calculateTotal(){
    return value.reduce((prevValue, item) => prevValue += item.price_in_cents * item.quantity, 0)
  }

  function handleUpdateQuantity(id: string, quantity: number){
    const newValue = value.map(item => {
      if(item.id !== id) return item
      return {...item, quantity: quantity}
    })
    updateLocalStorage(newValue)
  }

  function handleDelete(id: string){
    const newValue = value.filter(item => id !== item.id)
    updateLocalStorage(newValue)
  }
  
  const ValorTotal = FormatCents(calculateTotal())
  const DeliveryFee = 4000
  const TotalValueWDelivery = FormatCents(calculateTotal() + DeliveryFee)

  return(
    <CartPageWrapper>
      <Container>
        <BackButton navigate="/"/>
        <YourCartContainer>
          <h2>Seu carrinho</h2>
          <p>Total ({value.length} produtos) <span>{ValorTotal}</span></p>
        </YourCartContainer>
        <ProductsContainer>
          {value.map((item) => (<CartItem product={item} handleUpdateQuantity={handleUpdateQuantity} handleDelete={handleDelete} key={item.id}/>))}
        </ProductsContainer>
      </Container>
      <CheckoutContainer>
        <CheckoutInfo>
          <CheckoutTitle>Resumo do pedido</CheckoutTitle>
          <CheckoutPrice>
            <p>Subtotal de produtos</p>
            <p>{ValorTotal}</p>
          </CheckoutPrice>
          <CheckoutDelivery>
            <p>Entrega</p>
            <p>{FormatCents(DeliveryFee)}</p>
          </CheckoutDelivery>
          <CheckoutDivision />
          <CheckoutTotal>
            <p>Total</p>
            <p>{TotalValueWDelivery}</p>
          </CheckoutTotal>
          <CheckoutButton>FINALIZAR A COMPRA</CheckoutButton>
        </CheckoutInfo>
        <CheckoutHelp>
          <a>Ajuda</a>
          <a>reembolsos</a>
          <a>entregas e frete</a>
          <a>trocas e devoluções</a>
        </CheckoutHelp>
      </CheckoutContainer>
    </CartPageWrapper>
  )
}
