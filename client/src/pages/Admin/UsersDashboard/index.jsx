import React from 'react'
import UsersTable from './UsersTable'

function UsersDashboard() {
  return (
        <div className='d-flex flex-column align-items-center'>
          <h1>Users</h1>
          <hr style={{width: "90%"}}/>
          <div style={{width: "90%"}}><UsersTable/></div>
        </div>
  )
}

export default UsersDashboard