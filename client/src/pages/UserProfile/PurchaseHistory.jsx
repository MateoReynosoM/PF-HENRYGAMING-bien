import { useEffect, useState } from 'react'
import {Accordion, Row, Col, Container, Card, Table, ListGroup, Spinner, ListGroupItem} from 'react-bootstrap';
import { useLazyGetPurchaseHistoryQuery} from '../../redux/rtk-api';
import { useSelector } from 'react-redux';

function PurchaseHistory() {


    //Hice un par de cambios porque se rompia cuando apretas F5 (porque se hacia el query de getHistory antes de que estuviera seteado el token)
    const [getHistory] = useLazyGetPurchaseHistoryQuery({});
    const savedToken = useSelector(state => state.main.token)
    const [history, setHistory] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const attemptSetHistory = async () => {
            if (savedToken) {
                const purchaseHistory = await getHistory()
                if (!purchaseHistory.error) {
                    setHistory(purchaseHistory.data)
                    setIsLoading(false)
                }
            }
        }
      attemptSetHistory()
    }, [savedToken])

    console.log(history)
    //revisar responsive sm por que se desordena todo 
    return (
         isLoading ? (<div className="w-100 d-flex justify-content-center align-items-center">
                        <Spinner animation='grow'/>
                        <Spinner animation='grow' />
                        <Spinner animation='grow'/>
                    </div>) :
        (
            <Container >  
                
            <Container>
            
            </Container>
                <ListGroup>
                    {
                        history.map((e, index)=>{
                            return (
                                <ListGroup.Item>
                                <span className='text-muted' style={{fontSize: "0.8rem"}} key={index}>Order Id: {e.mercadoPagoPaymentId || <span>No info</span>}</span>
                                <hr />
                                    <Row>
                                        <Col sm={1} >
                                        
                                        <div><h6  className='font-weight-bold'>Date</h6></div>
                                        {e.purchaseDetail.purchaseDate ||<span>No info</span>}
                                        </Col>
                                        <Col sm={6}>
                                        <Row>
                                            <Col >
                                            <div><h6  className='font-weight-bold'>Product</h6></div>
                                            </Col>
                                            <Col >
                                            <div><h6  className='font-weight-bold'>Amount</h6></div>
                                            </Col>
                                        </Row>
                                        {
                                        e.purchaseDetail.purchasedProducts.length === 1 ? e.purchaseDetail.purchasedProducts.map(obj =>{
                                                return (
                                                    <>
                                                    <Row>
                                                        <Col>
                                                            {obj.product.model}
                                                        </Col>
                                                        <Col>
                                                            {obj.amount}
                                                        </Col>
                                                    </Row> 
                                                    </>
                                                )
                                            }) : (<Accordion flush className='w-100'>
                                                    <Accordion.Item eventKey={`${index}`}>
                                                            <Accordion.Header>Show All</Accordion.Header>
                                                                    <Accordion.Body>
                                                                        <ListGroup>


                                                                            {
                                                                                e.purchaseDetail.purchasedProducts.map((obj, index)=>{
                                                                                    return(<ListGroup.Item kety={index}><Row><Col >{obj.product.model.length > 12? <abbr style={{textDecoration: 'none'}} title={obj.product.model}>{(obj.product.model.substring(0,10)+'...')}</abbr> : obj.product.model }</Col><Col>{obj.amount}</Col><Col >{obj.product.price*157}</Col></Row></ListGroup.Item>)
                                                                                    
                                                                                })
                                                                                
                                                                            }
                                                                        </ListGroup>
                                                                    </Accordion.Body>
                                                    </Accordion.Item>
                                            
                                            </Accordion>)
                                        }
                                        </Col>
                                        <Col sm={2}>
                                        <div><h6 className='font-weight-bold'>Provider</h6></div>
                                        {e.provider === "regular_payment" ? "Mercado Pago" : e.provider}
                                        </Col>
                                        <Col sm={2}>
                                        <div><h6 className='font-weight-bold'>Total</h6></div>
                                        {e.purchaseDetail.total*157}
                                        </Col>
                                        <Col sm={1}>
                                        <div><h6 className='font-weight-bold'>State</h6></div>
                                        <span className='text-capitalize'>{e.state}</span>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            )
                        })
                    }
                </ListGroup>
            </Container>
        )
    )
}

export default PurchaseHistory