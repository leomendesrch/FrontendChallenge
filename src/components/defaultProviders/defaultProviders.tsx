'use client'
import { FilterContextProvider } from "@/contexts/filter-context"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ThemeProvider } from "styled-components"

interface defaultProvidersProps{
  children: React.ReactNode
}

const theme = {
  desktopBreakPoint: '1168px',
  tabletBreakPoint: '768px',
  mobileBreakPoint: '300px'
}

export default function DefaultProviders({ children }: defaultProvidersProps){
  const client = new QueryClient()
  return(
    <QueryClientProvider client={client}>
      <FilterContextProvider>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </FilterContextProvider>
    </QueryClientProvider>
  )
}