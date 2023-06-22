import { InputHTMLAttributes } from "react";
import { SearchIcon } from "../searchIcon/search-icon";
import { InputContainer, PrimaryInput } from "./Inputs.styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{

}

export function InputWSearchIcon(props: InputProps){
  return(
    <InputContainer>
      <PrimaryInput {...props}/>
      <SearchIcon />
    </InputContainer>
  )
}