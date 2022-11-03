import React, { useEffect, useState } from 'react'
import {Card, Button, ButtonGroup} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { BiCart } from "react-icons/bi";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { usePostFavMutation, usePostProductToCartMutation, useGetFavoritesQuery, useDeleteFavProductMutation } from '../../redux/rtk-api';
import styles from "./styles/Card.css"
import { useSelector, useDispatch } from 'react-redux';
import { productAddedToast } from '../../components/Toast';
import {addItemLocalCart, incrementItemLocalCart} from '../../redux/actions';

function CardComponent({id, img, brand, price, model}) {
    const [addToFav] = usePostFavMutation({})
    const [removeFromFavs] = useDeleteFavProductMutation({})
    const userToken = useSelector(state => state.main.token)
    const {data: favs, error, isLoading, isSuccess} = useGetFavoritesQuery(userToken)
    const favsId = favs?.favItems?.map(e=> e.product.id)
    const [addToCart] = usePostProductToCartMutation({})
    const cart = useSelector(state => state.main.localCart)
    const dispatch = useDispatch();

  
    //LOCAL CART

    useEffect(()=>{
        if(cart.length) localStorage.setItem('cart',JSON.stringify(cart))
    },[cart])

    const handleCart = async () => {
        if(userToken){
            await addToCart({idProduct: id, amount: 1})
            productAddedToast("Item added to cart!")
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
                productAddedToast("Item increment to cart!") 
            }else{
                dispatch(addItemLocalCart(cartProduct))
                productAddedToast("Item added to cart!")
            }
        }
    }
    const handleFavorite = async () => {
        if (userToken){
            if (!favsId?.includes(id)) {
                await addToFav(id)
                productAddedToast("Item added to WhisList!", 300)
            } else {
                favs?.favItems?.forEach(e => {
                    if (e.product.id === id){ 
                        removeFromFavs(e.id)
                        productAddedToast("Item removed from WhisList!", 300)
                    }
                })
                
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

                { userToken ?
                    <button id="wishlistButton" onClick={handleFavorite} style={{float: "right"}}><span>{favsId?.includes(id) ?  <AiFillStar/> : <AiOutlineStar/>} </span></button> : <></>
                }   
            </Card.Footer>
        </Card>
  )
}



export default CardComponent