import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./styles/LandingPage.css"

function LandingPage() {
  return (
    <div id='landing'>
      <Link to="/home"><img id='logo' src="logo2.png" alt="Enter"></img></Link>
    </div>
   
   
  )
}

export default LandingPage