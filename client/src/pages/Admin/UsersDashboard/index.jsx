import React from 'react'
import { Navigate } from 'react-router-dom'
import UsersTable from './UsersTable'

function UsersDashboard() {
  const isAdmin = sessionStorage.getItem("admin");
    if (!isAdmin) {
        return <Navigate to="/home" />;
    }
  return (
        <div className='d-flex flex-column align-items-center'>
          <h1>Users</h1>
          <hr style={{width: "90%"}}/>
          <div style={{width: "90%"}}><UsersTable/></div>
        </div>
  )
}

export default UsersDashboard