import { useEffect } from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { addItemLocalCart, incrementItemLocalCart } from '../../redux/actions.js'
import { useDeleteFavProductMutation, useGetFavoritesQuery, useLazyGetFavoritesQuery, usePostProductToCartMutation } from '../../redux/rtk-api.js'
import styles from "./styles/Favorites.css"

function Favorites() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [getFavs] = useLazyGetFavoritesQuery({})
    const savedToken = sessionStorage.getItem("token")
    const {data: favs, error, isLoading, isSuccess} = useGetFavoritesQuery(savedToken)
    const [addToCart] = usePostProductToCartMutation({})
    const [deleteFav] = useDeleteFavProductMutation({})
    const cart = useSelector(state => state.main.localCart)
    const localCart = window.localStorage;

    useEffect(()=>{
        if(cart.length)  localCart.setItem('cart',JSON.stringify(cart))
    },[cart])

    const handleDetailRedirect = (id, e) => {
        navigate(`/products/${id}`)
    }

    const handleCart = async (product) => {
        if(savedToken){
            await addToCart({idProduct: product.id, amount: 1})
            alert("Added to cart")
        }else{//Local cart add prduct in cart
            let cartProduct = {
                id: product.id,
                img: product.img,
                brand: product.brand,
                price: product.price,
                model: product.model,
                amount: 1
            }
            console.log(cartProduct)
            if(cart?.find(e => (e.id === product.id))){
                dispatch(incrementItemLocalCart({id: product.id, amount: 1})) 
                alert("Added to cart") 
            }else{
                dispatch(addItemLocalCart(cartProduct))
                alert("Added to cart")
            }
        }
    }

    const handleRemove = async (id) => {
        if(savedToken){
            await deleteFav(id)
        }
    }

    
    if (!savedToken) {
        return <Navigate to = "/home"/>
    }
  
  
    return (
        <Container>
            {isLoading ? <div>Loading...</div> : isSuccess ? <><h2 className='text-secondary mt-3'>Wishlist</h2>
            <hr />
            <div className='d-flex flex-column align-items-center'>{favs?.favItems.map(f =>
                        <Card key={f.product.id} style={{height: "8rem"}}className='w-75 d-flex flex-row justify-content-between align-items-center my-2 position-relative bg-light favorite'>
                            <div onClick={() => handleDetailRedirect(f.product.id)} className="bg-white h-100" style={{width: "8rem"}} >
                                <Card.Img className='p-3 justify-self-start w-100 h-100' variant="top" src={f.product.img} style={{objectFit: 'cover'}} />
                            </div>
                            <Card.Body onClick={() => handleDetailRedirect(f.product.id)}>
                                    <h5>{f.product.brand.name} {f.product.model}</h5>
                                    <h5>$ {f.product.price}</h5>
                            </Card.Body>
                            <div className='d-flex flex-column align-items-center justify-content-around me-2'>
                                <Button className="mb-3" onClick={() => handleCart(f.product)}variant='warning'>Add to Cart</Button>
                                <span onClick={() => handleRemove(f.id)} className="removeFav">Remove</span>
                            </div>
                        </Card>
            )}</div></> : <></>}
        </Container>
  )
}

export default Favorites