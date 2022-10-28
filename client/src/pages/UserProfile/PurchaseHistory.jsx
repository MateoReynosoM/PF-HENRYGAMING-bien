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
                <Row>
                <Col sm={2}>
                <h6 className='w-bold'>Date</h6>
                </Col>
                <Col sm={6}>
                <h6 className='w-bold'>Product</h6>
                </Col>
                <Col sm={1}>
                <h6 className='w-bold'>Type</h6>
                </Col>
                <Col sm={1}>
                <h6 className='w-bold'>Total</h6>
                </Col>
                <Col sm={1}>
                <h6 className='w-bold'>State</h6>
                </Col>
                </Row>
            <Container>
            
            </Container>
                <ListGroup>
                    {
                        history.map((e, index)=>{
                            return (
                                <ListGroup.Item>
                                    <Row>
                                        <Col sm={2} className='mb-4'>
                                        fecha
                                        </Col>
                                        <Col sm={6}>

                                        {
                                        e.purchaseDetail.purchasedProducts.length === 1 ? e.purchaseDetail.purchasedProducts.map(obj =>{
                                                return (
                                                    <>
                                                    {obj.product.model}
                                                    </>
                                                )
                                            }) : (<Accordion flush className='w-100'>
                                                    <Accordion.Item eventKey={`${index}`}>
                                                            <Accordion.Header>Show All</Accordion.Header>
                                                                    <Accordion.Body>
                                                                        <ListGroup>


                                                                            {
                                                                                e.purchaseDetail.purchasedProducts.map((obj, index)=>{
                                                                                    return(<ListGroup.Item kety={index}><Row><Col sm={10}>{obj.product.model}</Col>  <Col>UP: {obj.product.price}</Col></Row></ListGroup.Item>)
                                                                                    
                                                                                })
                                                                                
                                                                            }
                                                                        </ListGroup>
                                                                    </Accordion.Body>
                                                    </Accordion.Item>
                                            
                                            </Accordion>)
                                        }
                                        </Col>
                                        <Col sm={1}>
                                        {e.provider}
                                        </Col>
                                        <Col sm={1}>
                                        
                                        {e.purchaseDetail.total}
                                        </Col>
                                        <Col sm={1}>
                                        {e.state}
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