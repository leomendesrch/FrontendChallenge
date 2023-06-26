'use client'
import { useState } from "react";
import { ArrowIcon } from "../arrowIcon/arrowIcon";
import { FilterContainer, FilterText, PriorityFilter, PriorityFilterText } from "./filterByPriority.style";
import { useFilter } from "@/hooks/useFilter";
import { PriorityTypes } from "@/types/priority-types";

function FilterByPriority(){
  const [showList, setShowList] = useState(false)

  const {setPriority} = useFilter()

  const handleOpen =() => {
    setShowList(!showList)
  }

  const handleUpdatePriority = (value: PriorityTypes) => {
    setPriority(value)
    setShowList(false)
  }

  return(
      <FilterContainer>
        <FilterText onClick={handleOpen}>
          Organizar por
          <ArrowIcon />
        </FilterText>
        {showList &&
          <PriorityFilter>
            <PriorityFilterText
             onClick={() => {handleUpdatePriority(PriorityTypes.NEWS)}}>
              Novidades
            </PriorityFilterText>
            <PriorityFilterText 
            onClick={() => {handleUpdatePriority(PriorityTypes.BIGGEST_PRICE)}}>
              Preço: Maior - menor
            </PriorityFilterText>
            <PriorityFilterText 
            onClick={() => {handleUpdatePriority(PriorityTypes.MINOR_PRICE)}}>
              Preço: Menor - maior
            </PriorityFilterText>
            <PriorityFilterText 
            onClick={() => {handleUpdatePriority(PriorityTypes.POPULARITY)}}>
              Mais vendidos
            </PriorityFilterText>
          </PriorityFilter>
        }
      </FilterContainer>
  )
}

export default FilterByPriority