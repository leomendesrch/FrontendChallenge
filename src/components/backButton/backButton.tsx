'use client'
import { useRouter } from "next/navigation";
import LeftIcon from "../icons/leftIcon";
import { Button } from "./backButton.styles";

interface BackButtonProps {
  navigate: string
}

export function BackButton({navigate}: BackButtonProps){
  const router = useRouter()

  const HandleNavigate = () => {
    router.push(navigate)
  }

  return(
    <Button onClick={HandleNavigate}>
      <LeftIcon/>
      Voltar
    </Button>
  )

}
