'use client'
import { BackButton } from "@/components/backButton/backButton";
import { Container, ProductContainer, ProductImage, ProductInfo, ProductInfoContainer } from "./product.styles";
import { PageWrapper } from "@/components/pageWrapper/PageWrapper";
import { useProduct } from "@/hooks/useProduct";
import { FormatCents } from "@/utils/format-price";
import { CartIcon } from "@/components/icons/cartIcon";
import { WhiteCartIcon } from "@/components/icons/white-cart-icon";


export default function ProductPage({searchParams}: {searchParams: {id: string}}){
  const { data } = useProduct(searchParams.id)

  function CategoryFormater(categoria: string){
    if(categoria === 'mugs') return 'Caneca'
    return 'Camiseta'
  }

  return(
    <PageWrapper>
      <Container>
        <BackButton navigate="/"/>
        <ProductContainer>
          <ProductImage src={data?.image_url}/>
          <ProductInfoContainer>
            <ProductInfo>
              <h1>{CategoryFormater(data?.image_url ?? '')}</h1>
              <span>{data?.name}</span>
              <p>{FormatCents(data?.price_in_cents ?? 0)}</p>
              <p>*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.</p>
              <div>
                <h2>Descrição</h2>
                <p>Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto.</p>
              </div>
            </ProductInfo>
            <button>
              <WhiteCartIcon />
              Adicionar ao carrinho
            </button>
          </ProductInfoContainer>
        </ProductContainer>
      </Container>
    </PageWrapper>
  )
}