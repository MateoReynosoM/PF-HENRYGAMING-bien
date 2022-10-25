import React, { useEffect, useRef, useState } from 'react';
import ReviewForm from '../../components/ReviewForm';

import {Card, Button, Col, ListGroup, Container, Spinner, Row, Toast} from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
//import Table from 'react-bootstrap/Table';
import { BiCart, BiListPlus } from "react-icons/bi";
import {  useParams } from 'react-router-dom';
import {useGetProductDetailQuery} from '../../redux/rtk-api';
import {especDetail, propsFormik} from '../../utils/epecFunctionForm';

function ProductDetail() {
  //ver la forma de descomoner espesificaciones segun categoria de detail
  const {id} = useParams()
  const {data, error, isLoading} = useGetProductDetailQuery(id);


 
  return (
    <Container>
      {
        error 
        ? 
        <>
          <Row>
            <Col>
              <Toast >
                <Toast.Body className='text-center'>Ups a Ocurrido un Error!!, Refresque la Pagina por favor.</Toast.Body>
              </Toast>
            </Col>
          </Row>
        </> 
        :
         isLoading 
        
        ?

        (<div className="w-100 d-flex justify-content-center align-items-center">
            <Spinner animation='grow'/>
            <Spinner animation='grow' />
            <Spinner animation='grow'/>
        </div>) 
        
        : 
        
        <>
        <Row>

            <Card style={{minWidth: '20rem', maxHeight: "30rem", maxWidth: '50%', flexGrow: 1, marginLeft:'9%', margin:'1rem', minHeight:'28rem'}}>
                <Card.Img  style={{padding:'1rem', height:'100%', objectFit: 'contain'}} src={data.detail.img} alt='test' />
            </Card>
            <Card style={{width: '25rem', margin:'2rem', marginLeft:'auto' , minHeight:'10rem', maxHeight: "25vh", borderRadius: '8px',}}>
              <Card.Title className="mb-3">{data.detail.model}</Card.Title>
              <Row>
                <Col>
                    <Card.Subtitle>{data.detail.brand.name}</Card.Subtitle>
                </Col>
                <Col>
                    <Card.Subtitle>{data.detail.category.name}</Card.Subtitle>
                </Col>
              </Row>
              <Card.Title className="mt-2" styled={{float:'right', displat: 'inline'}}>${data.detail.price}</Card.Title>
              <Card.Footer > 
                    <Button>Agregar al Carrito <BiCart/></Button>
                    <Button id="wishListButton" style={{float:'right',diplay: 'inline'}}>Favoritos <BiListPlus/></Button>
              </Card.Footer>
            </Card>
        </Row>
        <Tabs
          defaultActiveKey='especificaciones'
          id='uncontrolled-tab-example'
          className="md-3"
        >
          <Tab className="border" eventKey='especificaciones' title='Especificaciones'>
                  {
                    especDetail(propsFormik(data.detail.category.name), JSON.parse(data.detail.detail))
                  }
          </Tab>
        <Tab eventKey='reseñas' title='Reseñas'>
        <Card style={{  margin:'2rem', marginLeft:'10%' , minHeight:'28rem', borderRadius: '8px',}}>

            <ListGroup style={{  margin:'2rem', marginLeft:'10%' , minHeight:'28rem', borderRadius: '8px',}}>
                {
                  Array.isArray(data?.reviews) ? data.reviews.map((obj, index)=>{
                    return (<ListGroup.Item key={index} >{obj?.user?.userName}: {obj?.review}</ListGroup.Item>)
                  }): <ListGroup.Item>{data.reviews}</ListGroup.Item>
                }
                
            </ListGroup>
            <Card.Footer>
                  <ReviewForm id={id}/>
            </Card.Footer>
          </Card>
          </Tab>
        </Tabs>
        </>
      }
        
        
    </Container>
  )
}

export default ProductDetail