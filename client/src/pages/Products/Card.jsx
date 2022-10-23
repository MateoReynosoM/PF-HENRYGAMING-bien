import React from 'react'
import {Card, Button, ButtonGroup} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { BiCart, BiListPlus } from "react-icons/bi";
import { usePostProductToCartMutation } from '../../redux/rtk-api';
import { toast } from 'react-toastify';
import { Notify } from '../../components/Notify';
import styles from "./styles/Card.css"

function CardComponent({id, img, brand, price, model}) {
    const [addToCart] = usePostProductToCartMutation({})

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
        await addToCart({idProduct: id, amount: 1})
        productAddedToast()
    }
    return (
        <Card style={{minWidth: '16rem', maxWidth: '75%', flexGrow: 1, margin:'1rem', minHeight:'28rem'}}>
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