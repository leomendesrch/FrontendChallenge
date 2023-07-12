import { useFilter } from "@/hooks/useFilter";
import { LeftArrow } from "../icons/LeftArrow";
import { RightArrow } from "../icons/RightArrow";
import { Arrows, Container, NumberPages, PageIcon, ArrowIcon } from "./fiter-by-page.styles";

export default function FilterByPage(){
  const { page, setPage } = useFilter()
 
  const handleChangePage = (value: number) => {
    setPage(value)
  }

  const decreaseValue = () => {
    if(page <= 5 && page > 0)
    setPage(page - 1)
  }

  const increaseValue = () => {
    if(page >= 0 && page < 4)
    setPage(page + 1)
  }

  return(
    <Container>
      <NumberPages>
        <PageIcon 
        selected={page === 0}
        onClick={() => handleChangePage(0)}
        >
        1
        </PageIcon>
        <PageIcon
        selected={page === 1}
        onClick={() => handleChangePage(1)}
        >2</PageIcon>
        <PageIcon
        selected={page === 2}
        onClick={() => handleChangePage(2)}
        >3</PageIcon>
        <PageIcon
        selected={page === 3}
        onClick={() => handleChangePage(3)}
        >4</PageIcon>
        <PageIcon
        selected={page === 4}
        onClick={() => handleChangePage(4)}
        >5</PageIcon>
      </NumberPages>

      <Arrows>
        <ArrowIcon onClick={() => decreaseValue()}>
          <LeftArrow />
        </ArrowIcon>

        <ArrowIcon onClick={() => increaseValue()}>
          <RightArrow />
        </ArrowIcon>
      </Arrows>
    </Container>
  )
}