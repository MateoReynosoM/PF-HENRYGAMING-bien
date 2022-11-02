import styles from "./styles/Footer.css"
import { NavLink } from "react-router-dom";
import {BsTwitter, BsInstagram, BsFacebook, BsWhatsapp} from "react-icons/bs"; 

const Footer = () => <footer className="page-footer font-small pt-4 text-light" id="foot">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-5 mt-md-0 mt-2">
                <img src="logo.png" alt="Henry Gaming" className="footerImg"/>
                <p>Your friendly, reliable, PC hardware business.</p>
            </div>
            <hr className="clearfix w-100 d-md-none pb-0"/>
            <div className="col-md-2 mb-md-0 mb-2">
                <h5 id="info" className="text-uppercase">Company</h5>
                <ul className="list-unstyled">
                    <li><NavLink id="RouterNavLink" className="text-secondary text-decoration-none" to="/about">About Us</NavLink></li>
                    <li><NavLink id="RouterNavLink" className="text-secondary text-decoration-none" to="/contact">Contact</NavLink></li>
        
                </ul>
            </div>
            <div className="col-md-2 mb-md-0 mb-2">
                <h5 id="info" className="text-uppercase">Information</h5>
                <ul className="list-unstyled text-secondary">
                    <li><NavLink id="RouterNavLink" className="text-secondary text-decoration-none" to="/faqs">F.A.Qs</NavLink></li>
                    <li><NavLink id="RouterNavLink" className="text-secondary text-decoration-none" to="/terms">Terms & Conditions</NavLink></li>
                    <li><NavLink id="RouterNavLink" className="text-secondary text-decoration-none" to="/privacypolicy">Privacy Policy</NavLink></li>
                </ul>
            </div>
            <div className="col-md-2 mb-md-0 mb-2">
                <h5 id="info" className="text-uppercase">Follow Us</h5>
                <ul className="list-unstyled text-secondary d-flex justify-content-center flex-row">
                    <li><a href="https://twitter.com/HenryGamingOk" target="_blank" className="text-secondary text-decoration-none mx-1"><BsTwitter/></a></li>
                    <li><a href="https://www.instagram.com/henrygamingok/" target="_blank" className="text-secondary text-decoration-none mx-1"><BsInstagram/></a></li>
                    <li><a href="https://www.facebook.com/profile.php?id=100087074058480" target="_blank" className="text-secondary text-decoration-none mx-1"><BsFacebook/></a></li>
                    <li><a href="https://walink.co/73a3de" target="_blank" className="text-secondary text-decoration-none mx-1"><BsWhatsapp/></a></li>
                </ul>
            </div>
        </div>
    </div>
    <hr style={{margin: "2vh 4vw 0 4vw"}}/>
    <div className="footer-copyright text-center py-3">Copyright © 2022:
        <a className="text-secondary text-decoration-none" href="https://mdbootstrap.com/"> HenryGaming Argentina SRL</a>
    </div>
</footer>

export default Footer;