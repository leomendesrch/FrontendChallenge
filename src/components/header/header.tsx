'use client'
import { useFilter } from "@/hooks/useFilter";
import { CartControl } from "../cartControl/cartControl";
import { InputWSearchIcon } from "../inputs/Inputs";
import { Logo, TagHeader } from "./header.styles";
import { Saira_Stencil_One } from 'next/font/google'
import { useRouter } from "next/navigation";

const sairaStencil = Saira_Stencil_One({
  weight: ['400'],
  subsets: ['latin']
})



export default function Header(){
  const {search, setSearch} = useFilter()
  const router = useRouter();

  function handleNavigate(){
    router.push('/')
  }

  return(
    <TagHeader>
      <Logo className={sairaStencil.className} onClick={handleNavigate}>Capputeeno</Logo>
      <div>
        <InputWSearchIcon value={search} handleChange={setSearch} placeholder="Procurando por algo específico?"></InputWSearchIcon>
        <CartControl />
      </div>
    </TagHeader>
  )
}