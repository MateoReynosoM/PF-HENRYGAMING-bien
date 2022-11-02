import React from 'react'
import { Navigate } from 'react-router-dom'

function AdminDashboard() {
  const isAdmin = sessionStorage.getItem("admin");
    if (!isAdmin) {
        return <Navigate to="/home" />;
    }
  return (
    <div>
      Main
    </div>
  )
}

export default AdminDashboard