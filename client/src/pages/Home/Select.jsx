import React from 'react'
import { StyledSelect } from './styles/Select.styled'

function Select({options, onChange, selectedOption}) {
  //Por suerte me enteré hace poco que defaultValue existe. Estaba a punto de modificar mi CustomSelect para que pueda tomar una sola selección solo por eso.
  return (
    <StyledSelect onChange={onChange} defaultValue={selectedOption}>
          {options?.map((o, i) => (<option key={i} value={o}>{o}</option>))}
    </StyledSelect>
  )
}

export default Select

