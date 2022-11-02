import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SearchBar from './searchbar';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { BiCart, BiUserCircle } from "react-icons/bi";
import styles from "./styles/Navbar.css";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteToken, reloadStorage, isAdmin } from '../redux/actions';
import { toast } from 'react-toastify';
import { usePostProductToCartMutation} from '../redux/rtk-api';
import { productAddedToast } from './Toast';


function NavBar({pagination}) {
    //loacal storage ---------
    
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const savedToken = useSelector(state => state.main.token)
    const admin = useSelector(state => state.main.admin)
    const [addToCart] = usePostProductToCartMutation({});
    const [addedItems, setAddedItems] = useState(false)
    //Local Cart--------------
    const localCart = window.localStorage;
    useEffect(()=>{
        const localCart = window.localStorage;
        
        if( localCart.cart){
        let cart = JSON.parse(localCart.cart)
            dispatch(reloadStorage(cart))
        }else{
            localCart.setItem('cart',JSON.stringify([]))
            console.log(localCart.cart)
        }
        
    },[dispatch])

    const addedItemsTrue = ()=>{

 // cargar carro local a carro del usuario
         if(localCart.cart.length > 5 && savedToken && !addedItems){
             let cart = JSON.parse(localCart.cart)
             console.log(cart)
             if(savedToken){
     
                 cart.map(e =>{
                     return{
                     idProduct:e.id,
                     amount:e.amount
                     }
                 }).forEach(async(element) => {
     
                     console.log(element)
                   
                     let response = await addToCart(element)
                     productAddedToast(response.data.message, 300)
                     return 
                 });   
             }
             setAddedItems(true)
            localCart.setItem('cart',JSON.stringify([]))

         }

    }

    const logout = () => {
        const logoutToast = () => {
            toast.info("You've successfully logged out", {
                position: 'top-center',
                autoClose: 500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
            })
        }
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('admin')
        dispatch(deleteToken())
        dispatch(isAdmin(false))
        logoutToast()
        setTimeout(() => navigate('/home'), 1500)
    } 
    
    return (
            <>  
            {addedItemsTrue()}
                <Navbar className="navBg" variant="dark" expand="lg">
                    <Container>
                        <Navbar.Brand className="align-self-start pt-0"as={Link} to="/home"><img id="siteIcon" src='logo.png' alt='Henry Gaming'></img></Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll" className="row">
                            <SearchBar pagination={pagination}/>
                            <Nav id="nav1" className="col-md-4 d-flex justify-content-end navMedia"> 
                                {savedToken 
                                ? <Nav.Item><Nav.Link onClick={logout}>Logout</Nav.Link></Nav.Item>
                                : <Nav.Item><Nav.Link as={Link} to="/login">Login</Nav.Link></Nav.Item>}
                                {savedToken
                                ?<Nav.Item><Nav.Link as={Link} to="/favorites">Wishlist </Nav.Link></Nav.Item>
                                : <></>}

                                <Nav.Item><Nav.Link as={Link} to="/cart"><BiCart/></Nav.Link></Nav.Item>
                                {savedToken && <Nav.Item><Nav.Link as={Link} to="/user"><BiUserCircle/></Nav.Link></Nav.Item>}
                            </Nav>
                            <Nav id="nav2" className='navMedia'>
                                {admin && <Nav.Link as={Link} to="/admin">Admin Dashboard</Nav.Link>}
                                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                                <Nav.Link as={Link} to="/products">Products</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                  </Container>
                </Navbar>
                <section>
                    <Outlet></Outlet>
                </section>
            </>
    )
}



export default NavBar

