import React from 'react'
import { Navigate } from 'react-router-dom'
import ProductsTable from './ProductsTable'

function ProductsDashboard() {
  const isAdmin = sessionStorage.getItem("admin");
    if (!isAdmin) {
        return <Navigate to="/home" />;
    }
  return (
        <div className='d-flex flex-column align-items-center'>
          <h1>Products</h1>
          <hr style={{width: "90%"}}/>
          <div style={{width: "90%"}}><ProductsTable/></div>
        </div>
  )
}

export default ProductsDashboard