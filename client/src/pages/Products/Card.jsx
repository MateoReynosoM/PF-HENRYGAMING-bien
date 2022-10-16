import React from 'react'
import {Card, Button, ButtonGroup, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { BiCart, BiListPlus } from "react-icons/bi";
import styles from "./styles/Card.css"


function CardComponent({id, img, brand, price, model}) {
    return (
        <Card style={{width: '16rem', flexGrow: 1, margin:'1rem', minHeight:'28rem'}}>
                <Card.Img variant="top" src={img} style={{padding:'1rem', maxHeight: '10rem', height:'100%', objectFit: 'contain'}} />
                <Card.Body style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                    <Card.Title>{brand} {model}</Card.Title>
                    <Card.Text style={{float: 'right'}}>
                        {`$${price}`}
                    </Card.Text>
                    <div style={{marginTop: '.5rem'}}>
                    <ButtonGroup style={{width: "100%"}}>
                        <Button variant="warning"><BiCart/></Button>
                    </ButtonGroup>
                    </div>
                </Card.Body>
                <Card.Footer>
                    <Card.Link as={Link} className="productLink" to={`/products/${id}`}>See Details</Card.Link>
                    <button id="wishlistButton" style={{float: "right"}}><span><BiListPlus/></span></button>
                </Card.Footer>
            </Card>
  )
}



export default CardComponent