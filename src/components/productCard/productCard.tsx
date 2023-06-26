import { FormatCents } from "@/utils/format-price"
import { CardContainer } from "./productCard.style"

interface ProductCardProps {
  image: string,
  title: string,
  price: number
}

export default function ProductCard(props: ProductCardProps){
  const priceInReal = FormatCents(props.price)

  return(
    <CardContainer>
      <img src={props.image}></img>
      <div>
        <h3>{props.title}</h3>
        <div></div>
        <p>{priceInReal}</p>
      </div>
    </CardContainer>
  )
}