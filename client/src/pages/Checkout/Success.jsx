import { useEffect, useState } from 'react'
import './styles/Checkout.css'
import AuthFooter from "../Auth/AuthFooter"
import AuthNav from "../Auth/AuthNav"
import {Button, Card, Row} from "react-bootstrap"
import { useNavigate } from 'react-router-dom'

/* id, unit_price, title, quantity, currencyId */

function Success() {
  const navigate = useNavigate()
  const order = localStorage.getItem("purchase")
  const parsedOrder = JSON.parse(order)
  const items = parsedOrder?.items
  const findPrice = (items) => {
    let price = 0
    items.forEach((p) => price += p.unit_price * p.quantity)
    return price
  }

  const [currency, setCurrency] = useState(null)
  useEffect(() => {
    setCurrency(items[0].currency_id)
  }, [items])

  const handleGoBack = () => {
    navigate("/home")
  }
  
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
                {items?.map(e => (
                  <Row>
                    <p className='col-3 text-start'>{e.title}</p>
                    <p className='col-3'>{e.quantity}</p>
                    <p className='col-3'>{currency + " $" + e.unit_price}</p>
                    <p className='col-3'>{currency + " $" + (e.unit_price * e.quantity)}</p>
                  </Row>))}
              </Card.Body>
              <Card.Footer className='d-flex justify-content-between'>
                <p className='text-secondary my-0'>Order status: Success</p>  
                <p className='text-secondary my-0'>Total: {`${currency} $${findPrice(items)}`}</p>
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