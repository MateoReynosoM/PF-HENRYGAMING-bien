import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SearchBar from './searchbar';
import { Outlet, Link } from 'react-router-dom';
import { BiCart } from "react-icons/bi";
import styles from "./styles/Navbar.css"
function NavBar() {
    return (
            <>  
                <Navbar className="navBg" variant="dark" expand="lg">
                    <Container>
                        <Navbar.Brand as={Link} to="/home"><img id="siteIcon" src='logo.png' alt='Henry Gaming'></img></Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll" className="row">
                            <SearchBar></SearchBar>
                            <Nav className="col-md-4 d-flex justify-content-end"> 
                                <Nav.Item><Nav.Link as={Link} to="/home">Login</Nav.Link></Nav.Item>
                                <Nav.Item><Nav.Link as={Link} to="/home">Favorites</Nav.Link></Nav.Item>
                                <Nav.Item><Nav.Link as={Link} to="/home"><BiCart/></Nav.Link></Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                  </Container>
                </Navbar>
                <Navbar className="navBg" variant="dark" expand="lg">
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav fill>
                                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                                <Nav.Link as={Link} to="/products">Products</Nav.Link>
                                <Nav.Link as={Link} to="/home">Add a new product!</Nav.Link>
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

