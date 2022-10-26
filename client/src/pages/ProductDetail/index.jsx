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
import { useDispatch, useSelector } from 'react-redux';
import {addItemLocalCart, incrementItemLocalCart } from '../../redux/actions'
import {usePostProductToCartMutation} from '../../redux/rtk-api';
import { toast } from 'react-toastify';

function ProductDetail() {
  //ver la forma de descomoner espesificaciones segun categoria de detail
  const userToken = useSelector(state => state.main.token);
  const cart = useSelector(state=> state.main.localCart)
  const dispatch = useDispatch();
  const {id} = useParams()
  const {data, error, isLoading} = useGetProductDetailQuery(id);
  const [addToCart] = usePostProductToCartMutation({})
  //LOCAL CART
  const localCart = window.localStorage;  
  useEffect(()=>{
    if(cart.length)  localCart.setItem('cart',JSON.stringify(cart))

  },[cart])

  const productAddedToast = (message) => {
    toast.success("Item added to cart!", {
        position: 'top-right',
        autoClose: 800,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
})}

  const handleAddToCart = async (e)=>{
      if(userToken){
          await addToCart({idProduct: data.detail.id, amount: 1})
          productAddedToast()
      }else{
        let item = {
          id: id,
          img: data.detail.img,
          brand: data.detail.brand.name,
          price: data.detail.price,
          model: data.detail.model,
          amount: 1
        }

        if(cart?.find(e => (e.id === id))){
          dispatch(incrementItemLocalCart({id: id, amount: 1})) 
          productAddedToast() 
        }else{
            dispatch(addItemLocalCart(item))
            productAddedToast()
        }
      }
  }



 
  return (
    <Container>
      {
        error 
        ? 
        <>
          <Row>
            <Col>
              <Toast >
                <Toast.Body className='text-center'>Oops an Error Occurred!!, Refresh the Page please.</Toast.Body>
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
              <Card.Title className="mb-3"><sup>Model </sup>{data.detail.model}</Card.Title>
              <Row>
                <Col>
                    <Card.Subtitle><sup>Brand </sup>{data.detail.brand.name}</Card.Subtitle>
                </Col>
                <Col>
                    <Card.Subtitle><sup>Type </sup>{data.detail.category.name}</Card.Subtitle>
                </Col>
              </Row>
              <Card.Title className="mt-2" styled={{float:'right', displat: 'inline'}}><sup>USD  </sup>  ${data.detail.price}</Card.Title>
              <Card.Footer > 
                    <Button onClick={handleAddToCart} >Add to Cart <BiCart/></Button>
                    <Button id="wishListButton" style={{float:'right',diplay: 'inline'}}>Wish List <BiListPlus/></Button>
              </Card.Footer>
            </Card>
        </Row>
        <Tabs
          defaultActiveKey='especificaciones'
          id='uncontrolled-tab-example'
          className="md-3"
        >
          <Tab className="border" eventKey='especificaciones' title='Specifications'>
                  {
                    especDetail(propsFormik(data.detail.category.name), JSON.parse(data.detail.detail))
                  }
          </Tab>
        <Tab eventKey='reseñas' title='Reviews'>
        <Card style={{  margin:'2rem', marginLeft:'10%' , minHeight:'28rem', borderRadius: '8px',}}>

            <ListGroup style={{  margin:'2rem', marginLeft:'10%' , minHeight:'28rem', borderRadius: '8px',}}>
                {
                  Array.isArray(data?.reviews) ? data.reviews.map((obj, index)=>{
                    return (<ListGroup.Item key={index} >{obj?.user?.userName}: {obj?.review}</ListGroup.Item>)
                  }): <ListGroup.Item>{data.reviews}</ListGroup.Item>
                }
                
            </ListGroup>
            {
                  userToken ? 
                (<Card.Footer>
                      <ReviewForm id={id}/>
                </Card.Footer>
                ) : <></>
            }
          </Card>
          </Tab>
        </Tabs>
        </>
      }
        
        
    </Container>
  )
}

export default ProductDetail