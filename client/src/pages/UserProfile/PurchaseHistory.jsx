import React from 'react'

import {Accordion, Row, Col, Container, Card, Table, ListGroup, Spinner} from 'react-bootstrap';




function PurchaseHistory() {

    //traer todas las ordenes de compra del usuario

    /*  en el spiner podria ir el logo de henry 
    // ver donde meter la fecha de creacion de la boleta 
    

allOrders [
    // informacion por orden, 
           data = {
               numberorden: 142541
               datosHenry: [ {henry, direccion, city, postal code, phoneNumber} ] para poder usar map, renderizo por propiedad cada lista
               datos user:[ {nombre, apellido, gmail, cel} ] siempre seria un solo objeto en la lista
               datos adres: [ { addres , cp , cel, city }] 
               cart : [ {product} , {product}, {product}]  =>  { model, cantidad, precio unitario y precio total }   pensar como renderizar la tabla     
               total: {
                   subtotal
                   iva ejem
                   envio
                   algun otro impuesto
                   totalDefinitivo
                }
            },
            otra orden
            
        ]
    */

  return (
    <Container>

            <Card.Title>History</Card.Title>
            <Container>
                <Accordion>
                <Card>

                    <Accordion.Item eventKey='0'>
                        <Accordion.Header>Orden N° 142541</Accordion.Header>
                        <Accordion.Body>
                        {/* logo de orden de compra */}
                        <Row>
                            <Col>

                            <Card.Title>HenryGaming</Card.Title>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Direccion</ListGroup.Item>
                                <ListGroup.Item>city, postal code</ListGroup.Item>
                                <ListGroup.Item>phonenumber</ListGroup.Item>
                            </ListGroup>
                            </Col>
                            <Col>
                                <Spinner animation='grow'></Spinner>
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col>
                                <Card.Subtitle>Para</Card.Subtitle>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>NOMBRE</ListGroup.Item>
                                    <ListGroup.Item>apellido</ListGroup.Item>
                                    <ListGroup.Item>GMAIL</ListGroup.Item>
                                    <ListGroup.Item>numero de cel</ListGroup.Item>
                                </ListGroup>
                            </Col>
                            <Col>
                                <Card.Subtitle>Enviar a</Card.Subtitle>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Direccion</ListGroup.Item>
                                    <ListGroup.Item>ciudad</ListGroup.Item>
                                    <ListGroup.Item>codigo postal</ListGroup.Item>
                                    <ListGroup.Item>telefono</ListGroup.Item>
                                </ListGroup>
                            </Col>
                        </Row>
                        <br></br>
                        <Table striped  hover>
                            <thead>
                            <tr>
                                <th>number</th>
                                <th>Product</th>
                                <th>Canntidad</th>
                                <th>precio unitario</th>
                                <th>precio total</th>
                                
                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>gtx 1030</td>
                                    <td>1</td>
                                    <td>50</td>
                                    <td>50</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>power supple 500</td>
                                    <td>2</td>
                                    <td>35</td>
                                    <td>70</td> 

                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>monitor 244 hz</td>
                                    <td>1</td>
                                    <td>200</td>
                                    <td>200</td>
                                </tr>
                                
                            </tbody>
                        </Table>
                            <Card.Subtitle>Sub Total 320</Card.Subtitle>
                            <Card.Text> IVA +21%</Card.Text>
                            <Card.Text> Envio y Gestion 250</Card.Text>
                            <Card.Text> Otro 35</Card.Text>
                            <Card.Title>Total 1200</Card.Title>
                        </Accordion.Body>
                    </Accordion.Item>
                </Card>
                </Accordion>
            </Container>

    </Container>
  )
}

export default PurchaseHistory