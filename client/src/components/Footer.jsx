import styles from "./styles/Footer.css"

const Footer = () => <footer className="page-footer font-small pt-4 text-light" id="foot">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">Henry Gaming</h5>
                <p>Here you can use rows and columns to organize your footer content.</p>
            </div>
            <hr className="clearfix w-100 d-md-none pb-0"/>
            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                    <li><a href="#!" className="text-secondary text-decoration-none">Link 1</a></li>
                    <li><a href="#!" className="text-secondary text-decoration-none">Link 2</a></li>
                    <li><a href="#!" className="text-secondary text-decoration-none">Link 3</a></li>
                    <li><a href="#!" className="text-secondary text-decoration-none">Link 4</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled text-secondary">
                    <li><a href="#!" className="text-secondary text-decoration-none">Link 1</a></li>
                    <li><a href="#!" className="text-secondary text-decoration-none">Link 2</a></li>
                    <li><a href="#!" className="text-secondary text-decoration-none">Link 3</a></li>
                    <li><a href="#!" className="text-secondary text-decoration-none">Link 4</a></li>
                </ul>
            </div>
        </div>
        
    </div>
    <hr style={{margin: "2vh 4vw 0 4vw"}}/>
    <div className="footer-copyright text-center py-3">Copyright © 2022:
        <a className="text-secondary text-decoration-none" href="https://mdbootstrap.com/"> HenryGaming Argentina SRL</a>
    </div>
</footer>

export default Footer