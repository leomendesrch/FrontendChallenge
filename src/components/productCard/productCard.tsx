import { FormatCents } from "@/utils/format-price"
import { CardContainer } from "./productCard.style"
import { useRouter } from "next/navigation"

interface ProductCardProps {
  image: string,
  title: string,
  price: number,
  id: string
}

export default function ProductCard(props: ProductCardProps){
  const priceInReal = FormatCents(props.price)
  const router = useRouter()

  function handleNavigate(id: string){
    router.push(`/product?id=${id}`)
  }
   

  return(
    <CardContainer onClick={() => handleNavigate(props.id)}>
      <img src={props.image}></img>
      <div>
        <h3>{props.title}</h3>
        <div></div>
        <p>{priceInReal}</p>
      </div>
    </CardContainer>
  )
}