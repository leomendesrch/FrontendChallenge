import { InputHTMLAttributes } from "react";
import { SearchIcon } from "../searchIcon/search-icon";
import { InputContainer, PrimaryInput } from "./Inputs.styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  value: string,
  handleChange: (value: string) => void
}

export function InputWSearchIcon(props: InputProps){
  return(
    <InputContainer>
      <PrimaryInput onChange={(e) => props.handleChange(e.target.value)} {...props}/>
      <SearchIcon />
    </InputContainer>
  )
}