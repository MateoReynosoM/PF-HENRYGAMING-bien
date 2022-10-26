import React, { useEffect, useState } from 'react'
import {Card, Button, ButtonGroup} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { BiCart, BiListPlus } from "react-icons/bi";
import { usePostProductToCartMutation } from '../../redux/rtk-api';
import { toast } from 'react-toastify';
import { Notify } from '../../components/Notify';
import styles from "./styles/Card.css"
import { useSelector, useDispatch } from 'react-redux';

import {addItemLocalCart, incrementItemLocalCart} from '../../redux/actions';

function CardComponent({id, img, brand, price, model}) {
    const [addToCart] = usePostProductToCartMutation({})
    const userToken = useSelector(state => state.main.token)
    const cart = useSelector(state => state.main.localCart)
    const dispatch = useDispatch();
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

    const handleCart = async () => {
        if(userToken){
            await addToCart({idProduct: id, amount: 1})
            productAddedToast()
        }else{//Local cart add prduct in cart
            let cartProduct = {
                id, 
                img,
                brand,
                price,
                model, 
                amount: 1
            }
            console.log(cartProduct)
            if(cart?.find(e => (e.id === id))){
                dispatch(incrementItemLocalCart({id: id, amount: 1}))  
            }else{
                dispatch(addItemLocalCart(cartProduct))
            }
        }
    }

    return (
        <Card style={{minWidth: '16rem', maxWidth: '18rem', flexGrow: 1, margin:'1rem', minHeight:'28rem'}}>
            <Card.Img variant="top" src={img} style={{padding:'1rem', height:'100%', maxHeight: '10rem', objectFit: 'contain'}} />
            <Card.Body style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                <Card.Title>{brand} {model}</Card.Title>
                <Card.Text style={{float: 'right'}}>
                    {`$${price}`}
                </Card.Text>
                <div style={{marginTop: '.5rem'}}>
                <ButtonGroup style={{width: "100%"}}>
                    <Button onClick={handleCart} variant="warning"><BiCart/></Button>
                </ButtonGroup>
                </div>
            </Card.Body>
            <Card.Footer>
                <Card.Link as={Link} className="productLink" to={`/products/${id}`}>See Details</Card.Link>
                <button id="wishlistButton" style={{float: "right"}}><span><BiListPlus/></span></button>
            </Card.Footer>
            <Notify/>
        </Card>
  )
}



export default CardComponent