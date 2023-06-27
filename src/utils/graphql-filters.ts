import { FilterType } from "@/types/filter-types";
import { PriorityTypes } from "@/types/priority-types";

export function getCategoryByType(type: FilterType){
  if(type === FilterType.MUG) return "mugs"
  else if(type === FilterType.SHIRT) return "t-shirts"
  return ""
}

export function getPriority(priority: PriorityTypes){
  if(priority === PriorityTypes.NEWS) return {field: "created_at", order: "dsc"}
  if(priority === PriorityTypes.BIGGEST_PRICE) return {field: "price_in_cents", order: "dsc"}
  if(priority === PriorityTypes.MINOR_PRICE) return {field: "price_in_cents", order: "asc"}
  return {field: "sales", order: "dsc"}
}

export const mountQuery = (type: FilterType, priority: PriorityTypes) => {
  if(type === FilterType.ALL && priority === PriorityTypes.POPULARITY) return `query {
    allProducts(sortField: "sales", sortOrder: "dsc"){ 
      id
      name
      price_in_cents
      image_url
    } 
  }
  `
  const settings = getPriority(priority)
  const categoryFilter = getCategoryByType(type)
  console.log(categoryFilter)

  return `query{
  allProducts(sortField: "${settings.field}", sortOrder: "${settings.order}", ${categoryFilter? `filter: {category: "${categoryFilter}"}` : ''}){
    id,
    name,
    image_url,
    price_in_cents,
    category
  }
}`
}