import FilterByPriority from "../filterByPriority/filterByPriority";
import { FilterByType } from "../filterByType/filterByType";
import { FilterContainer } from "./filter-bar.style";

interface FilterBarProps{

}

export function FilterBar(props: FilterBarProps){
  return(
    <FilterContainer>
      <FilterByType />
      <FilterByPriority />
    </FilterContainer>
  )
}

