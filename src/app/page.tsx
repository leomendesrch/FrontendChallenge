'use client'

import { FilterBar } from '@/components/filterBar/filter-bar'
import { ProductsList } from '@/components/productsList/products-list'
import { FilterByPageContainer, MainContainer } from './page.styles'
import { PageWrapper } from '@/components/pageWrapper/PageWrapper'
import FilterByPage from '@/components/filterByPage/filter-by-page'

export default function Home() {

  return (
  <PageWrapper>
    <MainContainer>
      <FilterBar />
      <ProductsList />
    </MainContainer>

    {/* <FilterByPageContainer>
      <FilterByPage />
    </FilterByPageContainer> */}
  </PageWrapper>
  )
}
