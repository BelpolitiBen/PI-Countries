import React from 'react'
import Card from './Card'
import { StyledCards } from './styles/Cards.styled'

function Cards({countries}) {
  return (
    <StyledCards>
        {countries?.map(c => (
                    <Card key={c.id} id ={c.id} name={c.name} flag={c.flag} continent={c.region}/>
                    ))
                }
    </StyledCards>
  )
}

export default Cards