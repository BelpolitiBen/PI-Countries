import React from 'react'
import ActivityCard from './ActivityCard'
import { StyledActivityCards } from './styles/ActivityCards.styled'

function ActivityCards({activities}) {
  return (
    <StyledActivityCards>
        {activities?.map(a => (
                    <ActivityCard key={a.id} activityName={a.activityName} difficulty={a.difficulty} duration={a.duration} seasons={a.seasons}/>
                    ))
                }
    </StyledActivityCards>
  )
}

export default ActivityCards