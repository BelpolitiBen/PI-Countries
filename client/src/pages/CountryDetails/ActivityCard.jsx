import React from 'react'
import reverseDuration from '../../utils/reverseDuration'
import { StyledActivityCard } from './styles/ActivityCard.styled'

function ActivityCard({activityName, difficulty, duration, seasons}) {
  return (
            <StyledActivityCard>
                <div className="card-header">
                    <h5>{activityName}</h5>
                </div>
                <div className="card-body">
                        <p>Difficulty: {difficulty}</p>
                        <p>Duration: {reverseDuration(duration)}</p>
                        
                </div>
                <ul className="card-footer">
                  <p>Seasons: </p>
                  {seasons.map(e => (<li>{e}</li>))}
                </ul>
            </StyledActivityCard>
  )
}

export default ActivityCard