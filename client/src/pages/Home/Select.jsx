import React from 'react'
import { StyledSelect } from './styles/Select.styled'

function Select({options}) {
  return (
    <StyledSelect>
        {options?.map(o => (<option value={o}>{o}</option>))}
    </StyledSelect>
  )
}

export default Select