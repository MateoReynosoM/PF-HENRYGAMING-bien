import React, { useEffect, useRef, useState } from 'react';
import ReviewForm from '../../components/ReviewForm';

import {Card, Button, Col, ListGroup, Container, Spinner, Row, Toast, ButtonGroup} from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
//import Table from 'react-bootstrap/Table';
import { BiCart, BiListPlus } from "react-icons/bi";
import {  useParams } from 'react-router-dom';
import {useGetProductDetailQuery} from '../../redux/rtk-api';
import {especDetail, propsFormik} from '../../utils/specFunctionForm';
import { useDispatch, useSelector } from 'react-redux';
import {addItemLocalCart, incrementItemLocalCart } from '../../redux/actions'
import {usePostProductToCartMutation, usePostFavMutation} from '../../redux/rtk-api';
import { productAddedToast } from '../../components/Toast';

import { Notify } from '../../components/Notify';

function ProductDetail() {
  //ver la forma de descomoner espesificaciones segun categoria de detail
  const userToken = useSelector(state => state.main.token);
  const cart = useSelector(state=> state.main.localCart)
  const dispatch = useDispatch();
  const {id} = useParams()
  const {data, error, isLoading} = useGetProductDetailQuery(id);
  const [addToCart] = usePostProductToCartMutation({})
  const [addToFav] = usePostFavMutation({})
  //LOCAL CART
  const localCart = window.localStorage;
  
  const [amount, setAmount] = useState(0);

  useEffect(()=>{
    if(cart.length)  localCart.setItem('cart',JSON.stringify(cart))

  },[cart])

  const handleFavorite = async () => {
    if (userToken){
        await addToFav(id)
        productAddedToast("Item added to WhisList!", 300)
    }
  }


  const handleAddToCart = async (e)=>{
      if(userToken){
          await addToCart({idProduct: data.product.id, amount: amount})
          productAddedToast("Item added to Cart!", 300)
      }else{
        let item = {
          id: id,
          img: data.product.img,
          brand: data.product.brand.name,
          price: data.product.price,
          model: data.product.model,
          amount: 1
        }

        if(cart?.find(e => (e.id === id))){
          dispatch(incrementItemLocalCart({id: id, amount: amount})) 
          productAddedToast("Item increment to Cart!", 300) 
        }else{
            dispatch(addItemLocalCart(item))
            productAddedToast("Item added to Cart!", 300)
        }
      }
  }

  const handleCart = async (e) => {
    e.preventDefault()
    const {name} = e.target

        if (name === "plus") {
            setAmount(amount+1)
        }
        else if (name === "minus") {
          if(amount === 1) return
            setAmount(amount-1)
        }
    }

  console.log(data)



 
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
        
            <Card style={{minWidth: '20rem', maxHeight: "16rem", maxWidth: '35%', flexGrow: 1, marginTop: '1rem', marginLeft:'3%', minHeight:'26rem'}}>
                <Card.Img  style={{padding:'2rem', height:'75%', objectFit: 'contain'}} src={data.product.img} alt='test' />
            </Card>


            <Card  style={{width: '25rem', margin:'1rem', marginLeft:'1px' , minHeight:'12rem', maxHeight: "18rem", borderRadius: '8px',}}>
              <Row>
              <Card.Text>Sold</Card.Text>
              <Card.Title className="mb-3"><sup>Model </sup>{data.product.model}</Card.Title>
                <Col >
                    <Card.Subtitle><sup>Brand </sup>{data.product.brand.name}</Card.Subtitle>
                </Col>
                <Col>
                    <Card.Subtitle><sup>Type </sup>{data.product.category.name}</Card.Subtitle>
                </Col>
              </Row>
              <Card.Title className="mt-2" styled={{float:'right', displat: 'inline'}}><sup>USD  </sup>  ${data.product.price}</Card.Title>
              <div className='d-flex flex-column justify-content-around align-items-start h-100'>
                <ButtonGroup>
                    <Button onClick={handleCart} name="minus" variant="secondary">-</Button>
                    <Button variant="secondary">{amount}</Button>
                    <Button onClick={handleCart} name="plus" variant="secondary">+</Button>
                </ButtonGroup>
            </div>
              <Card.Text>Stock</Card.Text>
              <Card.Footer > 
                    <Button onClick={handleAddToCart} >Add to Cart <BiCart/></Button>

                    <Button onClick={handleFavorite} id="wishListButton" style={{float:'right',diplay: 'inline'}}>Wish List <BiListPlus/></Button>
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
                    especDetail(propsFormik(data.product.category.name), JSON.parse(data.product.detail))
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
        
      <Notify/>
    </Container>
  )
}

export default ProductDetail