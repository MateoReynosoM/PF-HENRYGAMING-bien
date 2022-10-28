import React from 'react'
import CloudinaryWidget from './CloudinaryWidget'
import styles from "./styles/UserProfile.css"

function ProfileTab({userName, firstName, lastName, email, img}) {
  return (
    <div className='d-flex flex-column align-items-center'>
        <div className='d-flex justify-content-between w-100'>
            <h5>Account details</h5>
            <p>Modify account details</p>
        </div>
        <div className="d-flex w-100 justify-content-start">
            <div className='w-50 me-5 align-self-start align-items-center d-flex flex-column border rounded'>
                <div className='d-flex align-items-center justify-content-between w-100 my-2 px-3'>
                    <h5 className='my-0'>Username</h5>
                    <h5 className='my-0'>{userName}</h5>
                    <p>&gt;</p>
                </div>
                <hr className='border-secondary w-100 m-0' />
                <div className='d-flex align-items-center justify-content-between w-100 my-2 px-3'>
                    <h5 className='my-0'>Name</h5>
                    <h5 className='my-0'>{firstName} {lastName}</h5>
                    <p>&gt;</p>
                </div>
                <hr className='border-secondary w-100 m-0' />
                <div className='d-flex align-items-center justify-content-between w-100 my-2 px-3'>
                    <h5 className='my-0'>Email</h5>
                    <h5 className='my-0'>{email}</h5>
                    <p>&gt;</p>
                </div>
            </div>
            <div className='d-flex flex-column mx-5'>
                <img className='mb-2 profileImg' src={img} alt="asd" />
                <CloudinaryWidget/>
            </div>
        </div>
    </div>
  )
}

export default ProfileTab