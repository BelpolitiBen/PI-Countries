import React from 'react'
import { Link } from 'react-router-dom'
import { StyledLanding } from './styles/Landing.styled'

function Landing() {
  return (
    <StyledLanding>
      <video id="myVideo" poster='Poster.jpg' muted autoplay="autoplay" loop>
        <source src="EarthVideo.mp4" type="video/mp4"/>
      </video>
      <div>
        <div class="content">
          <h1>Henry Countries</h1>
          <Link to="/home"><button id="myBtn">Home</button></Link>
        </div>
      </div>
    </StyledLanding>
  )
}

export default Landing