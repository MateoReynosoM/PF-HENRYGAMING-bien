import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SearchBar from './searchbar';
import { Outlet, Link } from 'react-router-dom';
import { BiCart } from "react-icons/bi";
import styles from "./styles/Navbar.css";

function NavBar({pagination}) {
    return (
            <>  
                <Navbar className="navBg" variant="dark" expand="lg">
                    <Container>
                        <Navbar.Brand className="align-self-start pt-0"as={Link} to="/home"><img id="siteIcon" src='logo.png' alt='Henry Gaming'></img></Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll" className="row">
                            <SearchBar pagination={pagination}/>
                            <Nav className="col-md-4 d-flex justify-content-end navMedia"> 
                                <Nav.Item><Nav.Link as={Link} to="/login">Login</Nav.Link></Nav.Item>
                                <Nav.Item><Nav.Link as={Link} to="/home">Favorites</Nav.Link></Nav.Item>
                                <Nav.Item><Nav.Link as={Link} to="/cart"><BiCart/></Nav.Link></Nav.Item>
                            </Nav>
                            <Nav className='navMedia'>
                                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                                <Nav.Link as={Link} to="/products">Products</Nav.Link>
                                <Nav.Link as={Link} to="/newProduct">Add a new product!</Nav.Link>
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

