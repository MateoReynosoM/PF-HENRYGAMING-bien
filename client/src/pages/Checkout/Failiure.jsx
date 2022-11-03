import React from 'react'
import { Alert, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import AuthFooter from '../Auth/AuthFooter'
import AuthNav from '../Auth/AuthNav'

function Failiure() {
  const navigate = useNavigate()
  const handleGoBack = () => {
    navigate("/home")
  }

  return (
    <>
      <AuthNav/>
      <div className='checkout'>
          <div className='w-100 h-100 d-flex flex-column justify-content-center align-items-center'>
            <Alert variant='danger'><Alert.Heading>Something has gone wrong</Alert.Heading></Alert>
            <Button onClick={handleGoBack} variant="warning" className="mt-2 backButton">Go Back</Button>
          </div>
      </div>
      <AuthFooter/>
    </>
  )
}

export default Failiure