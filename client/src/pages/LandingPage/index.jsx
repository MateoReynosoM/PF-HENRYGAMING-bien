import React from 'react'
import { Link } from 'react-router-dom'
import { useGetPartsQuery } from '../../redux/rtk-api'
import styles from "./styles/LandingPage.css"

function LandingPage() {
  const {data, error, isLoading} = useGetPartsQuery()
  return (
      <div id='landing'>
      <Link to="/home"><img id='logo' src="logo.png" alt="Enter"></img></Link>
    </div>
   
   
  )
}

export default LandingPage