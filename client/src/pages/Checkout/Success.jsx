import { useEffect, useState } from 'react'
import './styles/Checkout.css'
import AuthFooter from "../Auth/AuthFooter"
import AuthNav from "../Auth/AuthNav"
import {Button, Card, Row} from "react-bootstrap"
import { useNavigate } from 'react-router-dom'
import { useClearCartMutation, useLazyGetCartQuery, usePostPurchaseMutation } from '../../redux/rtk-api'
import { useDispatch, useSelector } from 'react-redux'
import { setToken } from '../../redux/actions'


/* id, unit_price, title, quantity, currencyId */

function Success() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const savedToken = useSelector(state => state.main.token)
  const [getCart] = useLazyGetCartQuery({})
  const [clearCart] = useClearCartMutation({})
  const [postPurchase] = usePostPurchaseMutation({})
  const order = localStorage.getItem("purchase")
  const parsedOrder = JSON.parse(order)
  const items = parsedOrder?.items
  const [currency, setCurrency] = useState(null)
  console.log(parsedOrder)

  const findPrice = (items) => {
    let price = 0
    items.forEach((p) => price += p.unit_price * p.quantity)
    let amount = 0
    items.forEach((p) => amount += p.quantity)
    return {price: price, amount: amount}
  }

  const handleGoBack = () => {
    navigate("/home")
  }

  useEffect(() => {
      const userToken = sessionStorage.getItem('token')
      if (userToken) dispatch(setToken(userToken))
  }, [dispatch])

  useEffect(() => {
    setCurrency(items[0].currency_id)
  }, [items])

  useEffect(() => {
    const cartHandler = async () => {
      if (savedToken) {
        try {
          const date = new Date(parsedOrder.date_created.split("T")[0])
          await postPurchase({state: "success", amount: findPrice(items).amount, provider: parsedOrder.operation_type, mercadoPagoId: parsedOrder.id, purchaseDate: date })
          const cart = await getCart()
          clearCart(cart.data.id)
        } catch (error) {
          alert(error)
        }
      }
    }
    cartHandler()
  }, [savedToken])
  
  return (
    <>
      <AuthNav/>
      <div className='checkout'>
          <div className='w-100 h-100 d-flex flex-column justify-content-center align-items-center'>
            <Card className="w-50">
              <Card.Header className="d-flex justify-content-between align-items-baseline">
                <h3 className='text-secondary'>Purchase detail</h3>
                <span className='text-muted' style={{fontSize: "0.8rem"}}>Order ID: {parsedOrder.id}</span>
              </Card.Header>
              <Card.Body className="text-center">
                <Row style={{fontWeight: "bold"}}>
                  <span className='col-3 text-start'>Product</span>
                  <span className='col-3'>Quantity</span>
                  <span className='col-3'>Price</span>
                  <span className='col-3'>Subtotal</span>
                </Row>
                <div className="mt-3"></div>
                {items?.map((e, i) => (
                  <Row key={i}>
                    <p className='col-3 text-start'>{e.title}</p>
                    <p className='col-3'>{e.quantity}</p>
                    <p className='col-3'>{currency + " $" + e.unit_price}</p>
                    <p className='col-3'>{currency + " $" + (e.unit_price * e.quantity)}</p>
                  </Row>))}
              </Card.Body>
              <Card.Footer className='d-flex justify-content-between'>
                <p className='text-secondary my-0'>Order status: Success</p>  
                <p className='text-secondary my-0'>Total: {`${currency} $${findPrice(items).price}`}</p>
              </Card.Footer>
            </Card>
            <Button onClick={handleGoBack} variant="warning" className="mt-2 backButton">Go Back</Button>
          </div>
      </div>
      <AuthFooter/>
    </>
  )
}

export default Success