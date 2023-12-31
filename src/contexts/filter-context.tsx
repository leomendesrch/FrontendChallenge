"use client"
import { FilterType } from "@/types/filter-types";
import { PriorityTypes } from "@/types/priority-types";
import { createContext, useState } from "react";

export const FilterContext = createContext({
  search: '',
  page: 0,
  type: FilterType.ALL,
  priority: PriorityTypes.POPULARITY,
  setSearch: (value: string) => {},
  setPage: (value: number) => {},
  setType: (value: FilterType) => {},
  setPriority: (value: PriorityTypes) => {}
})

interface ProviderProps {
  children: React.ReactNode
}

export function FilterContextProvider({children}: ProviderProps){
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(0)
  const [type, setType] = useState(FilterType.ALL)
  const [priority, setPriority] = useState(PriorityTypes.POPULARITY)

  return(
    <FilterContext.Provider
    value={{search,setSearch,page,setPage,type,setType, priority, setPriority}}
    >
      {children}
    </FilterContext.Provider>
  )
}