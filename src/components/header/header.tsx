import { CartControl } from "../cartControl/cartControl";
import { InputWSearchIcon } from "../inputs/Inputs";
import { Logo, TagHeader } from "./header.styles";
import { Saira_Stencil_One } from 'next/font/google'

const sairaStencil = Saira_Stencil_One({
  weight: ['400'],
  subsets: ['latin']
})

interface HeaderProps{

}

export default function Header({}: HeaderProps ){
  return(
    <TagHeader>
      <Logo className={sairaStencil.className}>Capputeeno</Logo>
      <div>
        <InputWSearchIcon placeholder="Procurando por algo específico?"></InputWSearchIcon>
        <CartControl />
      </div>
    </TagHeader>
  )
}