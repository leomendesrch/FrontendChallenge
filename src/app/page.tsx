'use client'

import { FilterBar } from '@/components/filterBar/filter-bar'
import { ProductsList } from '@/components/productsList/products-list'
import { MainContainer } from './page.styles'

export default function Home() {

  return (
  <MainContainer>
    <FilterBar />
    <ProductsList />
  </MainContainer>
  )
}
