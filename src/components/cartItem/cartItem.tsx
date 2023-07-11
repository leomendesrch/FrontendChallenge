'use client'
import { ChangeEvent, HtmlHTMLAttributes, SelectHTMLAttributes } from "react";
import { TrashIcon } from "../icons/trash-icon";
import { ProductContainer, ProductCountAndPrice, ProductDescription, ProductImage, ProductInfo, ProductTitle } from "./cartItem.style";
import { ProductsInCart } from "@/types/products";
import { FormatCents } from "@/utils/format-price";

interface CartItemProps{
  product: ProductsInCart,
  handleUpdateQuantity: (id: string, quantity: number) => void
  handleDelete: (id: string) => void
}



export default function CartItem({ product, handleUpdateQuantity, handleDelete }: CartItemProps){

  function updateQuantity(e: ChangeEvent<HTMLSelectElement>){
    handleUpdateQuantity(product.id, Number(e.target.value))
  }

  function deleteItem(){
    handleDelete(product.id)
  }
  

  return(
      <ProductContainer>
        <ProductImage src={product.image_url}/>
        <ProductInfo>
          <ProductTitle>
            <h3>{product.name}</h3>
            <button onClick={deleteItem}>
              <TrashIcon />
            </button>
          </ProductTitle>

          <ProductDescription>Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto.</ProductDescription>
          
          <ProductCountAndPrice>
            <select defaultValue={product.quantity} onChange={updateQuantity}>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
            <p>{FormatCents(product.price_in_cents)}</p>
          </ProductCountAndPrice>
        </ProductInfo>
      </ProductContainer>
  )
}

