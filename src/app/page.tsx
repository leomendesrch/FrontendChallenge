'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { FilterBar } from '@/components/filterBar/filter-bar'
import { ProductsList } from '@/components/productsList/products-list'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

export default function Home() {
  const client = new QueryClient()
  return (
    <QueryClientProvider client={client}>
      <main className={styles.main}>
        <FilterBar />
        <ProductsList />
      </main>
    </QueryClientProvider>
  )
}
