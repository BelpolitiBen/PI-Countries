import React from 'react'
import InputButton from '../../components/InputButton'
import { StyledFilterButtons } from './styles/FilterButtons.styled'

function FilterButtons() {
  return (
    <StyledFilterButtons>
        <InputButton name="Africa"/>
        <InputButton name="Americas"/>
        <InputButton name="Asia"/>
        <InputButton name="Europe"/>
        <InputButton name="Oceania"/>
    </StyledFilterButtons>
  )
}

export default FilterButtons