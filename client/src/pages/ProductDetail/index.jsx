import React from 'react';

import {Card, Button, ButtonGroup, Col, ListGroup, ListGroupItem} from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
//import Table from 'react-bootstrap/Table';
import Spinner from 'react-bootstrap/Spinner';

import { BiCart, BiListPlus } from "react-icons/bi";
import { useNavigate, useParams } from 'react-router-dom';
import {useGetProductDetailQuery} from '../../redux/rtk-api';

import {especDetail, propsFormik} from '../../utils/epecFunctionForm';
//Toasts
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast'
import Container from 'react-bootstrap/Container';


function ProductDetail() {
  //ver la forma de descomoner espesificaciones segun categoria de detail
  const {id} = useParams()
  const {data, error, isLoading} = useGetProductDetailQuery(id);
  const navigate = useNavigate();
 
  console.log(id)
  console.log(data, 'error')

  return (
    <section>
      {
        error 
        ? 
        <>
          <Row>
            <Col>
              <Toast >
                <Toast.Body>Ups a Ocurrido un Error!!, Refresque la Pagina por favor.</Toast.Body>
              </Toast>
            </Col>
          </Row>
        </> 
        :
         isLoading 
        
        ?

        (<>
            <Spinner animation='grow' />
            <Spinner animation='grow'/>
            <Spinner animation='grow'/>
        </>) 
        
        : 
        
        <>
        <Row>

            <Card style={{minWidth: '20rem', maxWidth: '50%', flexGrow: 1, marginLeft:'9%', margin:'1rem', minHeight:'28rem'}}>
                <Card.Img  src={data.detail.img} alt='test' />
            </Card>
            <Card style={{width: '25rem', margin:'2rem', marginLeft:'auto' , minHeight:'10rem', borderRadius: '8px',}}>

              <Card.Title >{data.detail.model}</Card.Title>
              <Row>
                <Col>
                    <Card.Subtitle>{data.detail.brand.name}</Card.Subtitle>
                </Col>
                <Col>
                    <Card.Subtitle>{data.detail.category.name}</Card.Subtitle>
                </Col>
              </Row>
              <Card.Title styled={{float:'right', displat: 'inline'}}>${data.detail.price}</Card.Title>
              
              <Card.Footer > 
                    <Button>Agregar al Carrito <BiCart/></Button>
                    <Button id="wishListButton" style={{float:'right',diplay: 'inline'}}>Favoritos <BiListPlus/></Button>
              </Card.Footer>
            </Card>
        </Row>
        <Tabs
          defaultActiveKey="especificaciones"
          id='uncontrolled-tab-example'
          className="md-3"
        >
          <Tab eventKey='especificaciones' title='Especificaciones'>
                  {
                    especDetail(propsFormik(data.detail.category.name), JSON.parse(data.detail.detail))
                  }
          </Tab>
        <Tab eventKey='reseñas' title='Reseñas'>
        <Card style={{  margin:'2rem', marginLeft:'10%' , minHeight:'28rem', borderRadius: '8px',}}>

            <ListGroup style={{  margin:'2rem', marginLeft:'10%' , minHeight:'28rem', borderRadius: '8px',}}>
                {
                  Array.isArray(data.reviews) ? data.reviews.map((review, index)=>{
                    return (<ListGroup.Item key={index} >{review}</ListGroup.Item>)
                  }): <ListGroup.Item>{data.reviews}</ListGroup.Item>
                }
                
            </ListGroup>
            <Card.Footer>
                  <Button style={{}}>Agregar Reseña</Button>
            </Card.Footer>
          </Card>
          </Tab>
        </Tabs>
        </>
      }
        
        
    </section>
  )
}

export default ProductDetail