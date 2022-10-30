import React, { useEffect } from 'react'
import { Button, ButtonGroup, Card } from 'react-bootstrap'
import { BsFillTrashFill } from 'react-icons/bs'
import { useDeleteCartProductMutation, usePostProductToCartMutation } from '../../redux/rtk-api'
import styles from './styles/CartCard.css'
import { useSelector, useDispatch } from 'react-redux'
import {removeItemLocalCart, decrementItemLocalCart, incrementItemLocalCart} from '../../redux/actions';


function CartCard({productId, cartId, img, model, brand, price, amount}) {
    const userToken = useSelector(state => state.main.token)
    const cart = useSelector(state=> state.main.localCart)
    const dispatch = useDispatch();
    const [addToCart] = usePostProductToCartMutation({})
    const [clearCartProduct] = useDeleteCartProductMutation([])
    //LOCAL CART--------------------
    const localCart = window.localStorage;
    useEffect(()=>{
        if(cart.length) localCart.setItem('cart', JSON.stringify(cart))
    },[cart])


    useEffect(()=>{},[cart])

    const handleCart = async (e) => {
        e.preventDefault()
        const {name} = e.target
        if(userToken){
            if (name === "plus") {
                const response = await addToCart({idProduct: productId, amount: 1})
                console.log(response)
            }
            else if (name === "minus") {
                const response = await addToCart({idProduct: productId, amount: -1})
                console.log(response)
            }
        }else{//LOCAL CART INCREMENT DECREMENT--------------
            console.log(cartId, cart)
            if (name === "plus") {
                dispatch(incrementItemLocalCart({id: cartId, amount: 1}))
            }
            else if (name === "minus") {
                if(amount === 1){
                    return dispatch(removeItemLocalCart(cartId))
                }
                dispatch(decrementItemLocalCart({id: cartId, amount: 1}))
            }

        }
    }
    const handleClear = async (e) => {
        if(userToken){
            e.preventDefault()
            clearCartProduct(cartId)
        }else{//LOCAL CART DELET PRODUCT IN CART
            e.preventDefault()
            dispatch(removeItemLocalCart(cartId))

        }
    }

  return (
    <Card className="flex-row w-100 cartItem cartCard">
        <Card.Header className="text-center bg-white cartCardHeader" style={{width: "8rem", height: "8rem"}}>
            <Card.Img className='p-3 justify-self-start w-100 h-100' variant="top" src={img} style={{objectFit: 'cover'}} />
        </Card.Header>
        <Card.Body className="d-flex justify-content-between align-items-center bg-light">
            <div className='d-flex flex-column justify-content-around align-items-start h-100'>
                <Card.Title className="m-0">{brand} {model}</Card.Title>
                <ButtonGroup>
                    <Button onClick={handleCart} name="plus" variant="secondary">+</Button>
                    <Button variant="secondary">{amount}</Button>
                    <Button onClick={handleCart} name="minus" variant="secondary">-</Button>
                </ButtonGroup>
            </div>
            <Card.Text className="price">USD {price}</Card.Text>
        </Card.Body>
        <Card.Footer style={{minWidth: "10vw"}}className='d-flex bg-white flex-column align-items-center justify-content-around cartCardFooter'>
            <Card.Title>USD {price * amount}</Card.Title>
            <Button className="mb-3" onClick={handleClear} variant="danger">Clear <BsFillTrashFill/></Button>
        </Card.Footer>
    </Card>
  )
}

export default CartCard