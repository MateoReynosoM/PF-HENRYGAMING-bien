import React from 'react';
import {Card, Button, ButtonGroup, Col} from 'react-bootstrap';
import { BiCart, BiListPlus } from "react-icons/bi";
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
        <Card style={{width: '25rem', flexGrow: 1, margin:'2rem', marginLeft:'25%' , minHeight:'28rem', borderRadius: '8px',}}>
          
            <Card.Title >{data.model}</Card.Title>
            
            <Card.Subtitle>{data.brand.name}</Card.Subtitle>
            <Card.Img src='https://upload.wikimedia.org/wikipedia/commons/b/bd/Test.svg' alt='test' />
            <Card.Subtitle>${data.price}</Card.Subtitle>
            <br/>
            <Card.Subtitle>{data.category.name}</Card.Subtitle>
            <Card.Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Card.Text>
          
            <Card.Footer style={{justifyContent: 'center'}}> 
                
                <Button>Agregar al Carrito <BiCart/></Button>
                <Button id="wishListButton" style={{float:'right',diplay: 'inline'}}>Favoritos <BiListPlus/></Button>
            </Card.Footer>
       </Card>
      }
        
        
    </section>
  )
}

export default ProductDetail