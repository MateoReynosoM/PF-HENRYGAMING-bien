import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import styles from "./styles/AuthNav.css";

function AuthNav () {
    return (
        <Navbar className="navBg" variant="dark" expand="lg">
            <Navbar.Brand className="align-self-start px-3"as={Link} to="/home"><img id="siteIcon" src='logo.png' alt='Henry Gaming'></img></Navbar.Brand>
        </Navbar>
    )
}



export default AuthNav