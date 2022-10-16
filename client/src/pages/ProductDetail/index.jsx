import React from 'react'

import { useParams } from 'react-router-dom';
import {useGetProductDetailQuery} from '../../redux/rtk-api';

function ProductDetail() {
  //ver la forma de descomoner espesificaciones segun categoria de detail
  const {id} = useParams()
  const {data, error, isLoading} = useGetProductDetailQuery(id);
 
  console.log(id)
  console.log(data, 'error')

  return (
    <section>
      {
        error ? 
        <>Ocurrio un Error</> 
        : isLoading ? 
        <>...Cargando</>: 
         <div>

          <h1>{data.model}</h1>
          <h1>{data.brand.name}</h1>
          <img src={data.img} alt={data.model} />
          <h2>{data.price}</h2>
          <h3>{data.type}</h3>
          
        </div>
      }
        
        <button>Agregar al Carrito</button>
        <button>Agregar a favoritos</button>
    </section>
  )
}

export default ProductDetail