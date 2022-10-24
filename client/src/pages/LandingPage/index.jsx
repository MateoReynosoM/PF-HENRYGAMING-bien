import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styles from "./styles/LandingPage.css"

function LandingPage() {
  return (
    <div id='landing' className='d-flex justify-content-end'>
      <div className="contenedor">
      {/* <Link to="/home"><img id='logo' src="logo2.png" alt="Enter"></img></Link> */}
      <div className="w-100 justify-content-between d-flex ">
      <img id='logo'className="m-3" src="logo.png" alt="Enter"></img>
      <Button variant="dark"className='align-self-start m-3 text-warning border border-white'>Login</Button>

      </div>
      <div className="content">
        <div>
          <h1>Henry Gaming</h1>
          <h5 className="mt-3">The one-stop-shop for all your PC hardware needs</h5>
          <Link to="/home"><Button variant="dark"className='align-self-start mt-3 text-warning border border-secondary'>Enter</Button></Link>
        </div>
      </div>
    </div>
    </div>
  )
}

export default LandingPage