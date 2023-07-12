import FilterByPage from "../filterByPage/filter-by-page";
import FilterByPriority from "../filterByPriority/filterByPriority";
import { FilterByType } from "../filterByType/filterByType";
import { Container, FiltersContainer } from "./filter-bar.style";


export function FilterBar(){
  return(
    <Container>
      <FiltersContainer>
        <FilterByType />
        <FilterByPriority />
      </FiltersContainer>
      <FilterByPage />
    </Container>
  )
}

