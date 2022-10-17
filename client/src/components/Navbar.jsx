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
                        <Navbar.Brand as={Link} to="/products"><img id="siteIcon" src='logo.png' alt='Henry Gaming'></img></Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll" className="row">
                            <SearchBar pagination={pagination}/>
                            <Nav className="col-md-4 d-flex justify-content-end"> 
                                <Nav.Item><Nav.Link as={Link} to="/products">Login</Nav.Link></Nav.Item>
                                <Nav.Item><Nav.Link as={Link} to="/products">Favorites</Nav.Link></Nav.Item>
                                <Nav.Item><Nav.Link as={Link} to="/products"><BiCart/></Nav.Link></Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                  </Container>
                </Navbar>
                <Navbar className="navBg" variant="dark" expand="lg">
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav fill>
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

