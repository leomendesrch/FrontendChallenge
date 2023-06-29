'use client'
import { useProducts } from "@/hooks/useProducts"
import ProductCard from "../productCard/productCard";
import { ListContainer } from "./products-list.style";

export function ProductsList(){
  const { data } = useProducts();
  return(
    <ListContainer>
      {data?.map((product) => (
        <ProductCard
          id={product.id}
          title={product.name}
          image={product.image_url}
          price={product.price_in_cents}
        />
      ))}
    </ListContainer>
  )
}