'use client'

import { FilterBar } from '@/components/filterBar/filter-bar'
import { ProductsList } from '@/components/productsList/products-list'
import { MainContainer } from './page.styles'
import { PageWrapper } from '@/components/pageWrapper/PageWrapper'

export default function Home() {

  return (
  <PageWrapper>
    <MainContainer>
      <FilterBar />
      <ProductsList />
    </MainContainer>
  </PageWrapper>
  )
}
