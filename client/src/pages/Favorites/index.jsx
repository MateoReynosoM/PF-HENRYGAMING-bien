import { useEffect } from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { productAddedToast } from '../../components/Toast.jsx'
import { useDeleteFavProductMutation, useGetFavoritesQuery, useLazyGetFavoritesQuery, usePostProductToCartMutation } from '../../redux/rtk-api.js'
import { Notify } from '../../components/Notify';
import styles from "./styles/Favorites.css"


function Favorites() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [getFavs] = useLazyGetFavoritesQuery({})
    const savedToken = sessionStorage.getItem("token")
    const {data: favs, error, isLoading, isSuccess} = useGetFavoritesQuery(savedToken)
    const [addToCart] = usePostProductToCartMutation({})
    const [deleteFav] = useDeleteFavProductMutation({})
   
  

    console.log(favs)

    const handleDetailRedirect = (id, e) => {
        navigate(`/products/${id}`)
    }

    const handleCart = async (product) => {
        if(savedToken){
            await addToCart({idProduct: product.id, amount: 1})
            productAddedToast("Item added to Cart!", 300)
            
        }

    }

    const handleRemove = async (id) => {
        if(savedToken){
            
            await deleteFav(id)
        
        }
        productAddedToast("Item removed to WhisList!", 300)
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
            <Notify/>
        </Container>
  )
}

export default Favorites