import React, { useEffect, useState } from 'react'
import { Container, Button, Nav, Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useClearCartMutation, useGetCartQuery } from '../../redux/rtk-api'
import CartCard from './CartCard'
import findPriceTotal from '../../utils/findPriceTotal'
import styles from "./styles/Cart.css"
import { sortingFunc } from '../../utils/sortingFunc'

// Cards con productos, con botones para aumentar y reducir cantidad, para eliminar
// Nombre, marca, precio
// Lista de cards vertical
// Total de precios
// Boton Continue shopping que rediriga al catalogo
// Boton remove all
// Extra: productos similares
// Icono tacho de basura

// Ruta del back de post, get, put y delete carrito
// Endpoints de rtk query para las rutas

/* Boton de compras: si el usuario no esta logueado > redirigir a login 
   Si no hay un metodo de pago por defecto > redirigir a la pagina de metodos de pago
   Si hay metodo de pago > redirigir a la pagina de compras
*/


function Cart() {
    const userToken = useSelector(state => state.main.token)
    const {data, error, isLoading, isSuccess} = useGetCartQuery(userToken)
    const [clearAll] = useClearCartMutation({})
    console.log(data?.total)
    const handleClearAll = (e) => {
        e.preventDefault()
        clearAll(data.id)
    }

  return (
    <Container>
        {isLoading ? <div>Loading...</div> : isSuccess ?
        <>
        <h3 className='text-secondary mt-3'>Your Cart</h3>
        <hr />
        <div className='jumbotron my-4 border border-dark cartContainer'>
            {data.cartProducts?.length ? <><Nav className='col mx-3'>
                <Nav.Item className="col-md-8">Product</Nav.Item>
                <Nav.Item className="col-md-3">Price</Nav.Item>
                <Nav.Item >Subtotal</Nav.Item>
            </Nav>
            <div>
                {sortingFunc("Id", [...data?.cartProducts]).map(p => <CartCard key={p.id} productId={p.product.id} cartId={p.id} img={p.product.img} model={p.product.model} brand={p.product.brand} price={p.product.price} amount={p.amount} />)}
            </div>
            <div className='d-flex justify-content-between align-items-center py-2'>
                <Button className="mx-5" onClick={handleClearAll} variant="danger">Clear All</Button>
                <h5 className='mx-5'>Total: USD {findPriceTotal(data)}</h5>
                <Button className="mx-5" variant="warning">Checkout</Button>
            </div></>  : <div className='p-5'><h3 className='text-center'>There are no items in your cart.</h3></div>}
        </div></> : <h1>There is no cart!</h1>}
    </Container>
  )
}

export default Cart