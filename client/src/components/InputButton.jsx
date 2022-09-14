import React from 'react'
import {StyledInputButton} from "./styles/InputButton.styled"

function InputButton({value, name, className, onClick}) {
  return (
    <StyledInputButton type="button" className={className} value={value} name={name} onClick={onClick}/>
  )
}

export default InputButton