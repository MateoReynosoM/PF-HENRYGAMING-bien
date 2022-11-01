import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import { BsLinkedin } from "react-icons/bs";
import "./about.css";


function AboutUs(){
    return(
        <>
            <Container>
            <div >
                <h1 className="about-title">About Us</h1>
                <p className="about-parrafo">
                    HenryGaming is an e-commerce website created in 2022 by HenryGaming Argentina SRL, where you can find the best market products 
                    and every hardware component you need to be at the forefront of computer technology.
                    You will be able to consult for personalized advice by sending a simple message as we require in the FAQs and coordinate with our team on the delivery system, changes and modifications to your orders.
                    Thanks for meeting us!
                </p>
                <h1 className="about-title">The Project</h1>
                <p className="about-parrafo">
                    This website was made as a final project of the Full Stack Developer course taught by www.soyhenry.com. Made by the team shown below.
                    We give a special thanks to those who accompanied us in this project, among them, our assigned mentor Nicolas Burgueño and and our initial correction teacher Daiana Guillia.
                </p>
            </div>
            <div>
            <h1 className="about-title">The Team</h1>
            <div className="pruebacontainer">
                <div>
                    <h3 className="about-title">Front Team</h3>
                        <CardGroup>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="benja.png" />
                                <Card.Body>
                                    <Card.Title>Benjamin Emanuel Belpoliti</Card.Title>
                                    <Card.Text>
                                        FULL STACK WEB DEVELOPER
                                    </Card.Text>
                                    <Card.Link href="https://www.linkedin.com/signup/cold-join?trk=guest_homepage-basic_nav-header-join" target="_blank"><BsLinkedin /></Card.Link>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="benja.png" />
                                <Card.Body>
                                    <Card.Title>Ignacio Emanuel Maria Funes Santucho</Card.Title>
                                    <Card.Text>
                                        FULL STACK WEB DEVELOPER
                                    </Card.Text>
                                    <Card.Link href="#" target="_blank"><BsLinkedin/></Card.Link>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="franco.png" style={{ maxWidth:'290px', maxHeight:'210px'  }} />
                                <Card.Body>
                                    <Card.Title>Leonel Franco Leal</Card.Title>
                                    <Card.Text>
                                        FULL STACK WEB DEVELOPER
                                    </Card.Text>
                                    <Card.Link href="#" target="_blank"><BsLinkedin /></Card.Link>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="benja.png" />
                                <Card.Body>
                                    <Card.Title>Julian Luciano Perez</Card.Title>
                                    <Card.Text>
                                        FULL STACK WEB DEVELOPER
                                    </Card.Text>
                                    <Card.Link href="#" target="_blank"><BsLinkedin/></Card.Link>
                                </Card.Body>
                            </Card>
                        </CardGroup>
                    </div>
                <div>
                    <h3 className="about-title">Back Team</h3>
                        <CardGroup>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="benja.png" />
                                <Card.Body>
                                    <Card.Title>Mateo Reynoso Marin</Card.Title>
                                    <Card.Text>
                                        FULL STACK WEB DEVELOPER
                                    </Card.Text>
                                    <Card.Link href="#" target="_blank"><BsLinkedin/></Card.Link>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="benja.png" />
                                <Card.Body>
                                    <Card.Title>Pablo Agustin Canavesi</Card.Title>
                                    <Card.Text>
                                        FULL STACK WEB DEVELOPER
                                    </Card.Text>
                                    <Card.Link href="#" target="_blank"><BsLinkedin/></Card.Link>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="benja.png" />
                                <Card.Body>
                                    <Card.Title>Tomás Barale</Card.Title>
                                    <Card.Text>
                                        FULL STACK WEB DEVELOPER
                                    </Card.Text>
                                    <Card.Link href="#" target="_blank"><BsLinkedin/></Card.Link>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="benja.png" />
                                <Card.Body>
                                    <Card.Title>Benja</Card.Title>
                                    <Card.Text>
                                        FULL STACK WEB DEVELOPER
                                    </Card.Text>
                                    <Card.Link href="#" target="_blank"><BsLinkedin/></Card.Link>
                                </Card.Body>
                            </Card>
                        </CardGroup>
                    </div>
                </div>
            </div>    
            </Container>



            {/* <div>	container integrantes	
				<div>	cards group a
					<div> <img href="..." alt="asd"> <div> <h5>name</h5> <p>FULL STACK WEB DEVELOPER</p> <p><img href="..." alt="asd"></p> </div> <div/> 1
					<div> <img> <div> <h5>name</h5> <p>FULL STACK WEB DEVELOPER</p> <p><img></p> </div> <div/> 
					<div> <img> <div> <h5>name</h5> <p>FULL STACK WEB DEVELOPER</p> <p><img></p> </div> <div/> 
					<div> <img> <div> <h5>name</h5> <p>FULL STACK WEB DEVELOPER</p> <p><img></p> </div> <div/> 	
				<div/>
				<div>	cards group b
					<div> <img> <div> <h5>name</h5> <p>FULL STACK WEB DEVELOPER</p> <p><img></p> </div> <div/> 	
					<div> <img> <div> <h5>name</h5> <p>FULL STACK WEB DEVELOPER</p> <p><img></p> </div> <div/> 
					<div> <img> <div> <h5>name</h5> <p>FULL STACK WEB DEVELOPER</p> <p><img></p> </div> <div/>
				<div/>	
			</div> */}
        </>
    )
}

export default AboutUs;