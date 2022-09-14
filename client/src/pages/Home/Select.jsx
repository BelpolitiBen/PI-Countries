import React from 'react'
import { StyledSelect } from './styles/Select.styled'

function Select({options, onChange}) {
  return (
    <StyledSelect onChange={onChange}>
        {options?.map((o, i) => (<option key={i} value={o}>{o}</option>))}
    </StyledSelect>
  )
}

export default Select

