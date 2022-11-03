import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SearchBar from './searchbar';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { BiCart, BiUserCircle } from "react-icons/bi";
import styles from "./styles/Navbar.css";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteToken, reloadStorage, isAdmin, deleteLocalCart, changeTheme } from '../redux/actions';
import { toast } from 'react-toastify';
import { usePostProductToCartMutation, useGetCartQuery} from '../redux/rtk-api';
import { productAddedToast } from './Toast';
import {BsSun, BsMoonStars} from "react-icons/bs"
import { Button } from 'react-bootstrap';


function NavBar({pagination}) {
    //loacal storage ---------
    
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const savedToken = useSelector(state => state.main.token)
    const theme = useSelector(state => state.main.theme)
    const admin = useSelector(state => state.main.admin)

    const {data, error, isLoading, isSuccess} = useGetCartQuery(savedToken)

    const cart = useSelector(state => state.main.localCart);
    const cartAmount = cart.map(e=> e.amount).reduce((a, b)=>{return a+ b},0)
    const cartUserAmount = data?.cartProducts?.map(e=> e.amount).reduce((a,b)=>{return a+ b}, 0)
   
    const [addToCart] = usePostProductToCartMutation({});
    const [addedItems, setAddedItems] = useState(false)
    const storageCart = localStorage.getItem("cart")

    //Local Cart--------------
    useEffect(()=>{
        const storageCart = localStorage.getItem("cart")
        console.log(storageCart, typeof storageCart)
        if((storageCart && storageCart !== "undefined") && storageCart.length){
            let cart = JSON.parse(storageCart)
            dispatch(reloadStorage(cart))
        }else{
            localStorage.removeItem('cart')
        }
    },[dispatch])

    const addedItemsTrue = ()=>{

 // cargar carro local a carro del usuario
         if((storageCart && storageCart.length > 5) && savedToken && !addedItems){
             let cart = JSON.parse(storageCart)
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
            localStorage.removeItem('cart')
            dispatch(deleteLocalCart())
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



                                <Nav.Item><Nav.Link as={Link} to="/cart"><BiCart/>{cartAmount >0? cartAmount: (savedToken && cartUserAmount > 0) ? cartUserAmount : <></>}</Nav.Link></Nav.Item>
                                                                                   
                                {savedToken
                                ?<Nav.Item><Nav.Link as={Link} to="/favorites">Wishlist </Nav.Link></Nav.Item>
                                : <></>}

                                {savedToken && <Nav.Item><Nav.Link as={Link} to="/user"><BiUserCircle/></Nav.Link></Nav.Item>}
                                <Nav.Item>{theme === "light" ? <Nav.Link as="span" onClick={() => dispatch(changeTheme())}><BsSun/></Nav.Link>: <Nav.Link as="span" onClick={() => dispatch(changeTheme())}><BsMoonStars/></Nav.Link>}</Nav.Item>
                            </Nav>
                            <Nav id="nav2" className='navMedia'>
                                {admin && <Nav.Link as={Link} to="/admin">Admin Dashboard</Nav.Link>}
                                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                                <Nav.Link as={Link} to="/products">Products</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                  </Container>
                </Navbar>
                <section className={theme === "dark" ? "bg-dark" : "bg-white"}>
                    <Outlet></Outlet>
                </section>
            </>
    )
}



export default NavBar

/* <span > */