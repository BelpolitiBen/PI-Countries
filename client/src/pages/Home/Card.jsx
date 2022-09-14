import React from 'react'
import { Link } from 'react-router-dom'
import {StyledCard} from "./styles/Card.styled"

function Card({id, name, flag, continent}) {
  return (
    <Link to={`/countries/${id}`}>
            <StyledCard className="card">
                <div className="card-header">
                    <img src={flag} alt={name} />
                </div>
                <div className="card-body">
                        <h4>{name}</h4>
                        <p>{continent}</p>
                </div>
            </StyledCard>
    </Link>
  )
}

export default Card