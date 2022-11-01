import React from 'react'
import ProductsTable from './ProductsTable'

function ProductsDashboard() {
  return (
        <div className='d-flex flex-column align-items-center'>
          <h1>Products</h1>
          <hr style={{width: "90%"}}/>
          <div style={{width: "90%"}}><ProductsTable/></div>
        </div>
  )
}

export default ProductsDashboard