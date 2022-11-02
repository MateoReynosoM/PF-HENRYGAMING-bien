import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import { BsLinkedin } from "react-icons/bs";
import { IconContext } from "react-icons";
import "./styles/about.css";



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
                        <CardGroup>
                            <Card style={{ width: '18rem', alignItems: 'center' }}>
                                <Card.Img variant="top" src="benja abaut US.png" style={{ maxWidth: '16rem', maxHeight: '14rem' }} />
                                <Card.Body>
                                    <Card.Title style={{height: "3rem"}}>Benjamin Emanuel Belpoliti</Card.Title>
                                    <Card.Text>
                                        FULL STACK WEB DEVELOPER
                                    </Card.Text>
                                    <IconContext.Provider value={{ className: "global-class-name", size: "2rem" }}>
                                        <Card.Link href="https://www.linkedin.com/signup/cold-join?trk=guest_homepage-basic_nav-header-join" target="_blank"><BsLinkedin /></Card.Link>
                                    </IconContext.Provider>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem', alignItems: 'center' }}>
                                <Card.Img variant="top" src="nacho abautUS.png" style={{ maxWidth: '16rem', maxHeight: '14rem' }} />
                                <Card.Body>
                                    <Card.Title style={{height: "3rem"}}>Ignacio Emanuel Maria Funes Santucho</Card.Title>
                                    <Card.Text>
                                        FULL STACK WEB DEVELOPER
                                    </Card.Text>
                                    <IconContext.Provider value={{ className: "global-class-name", size: "2rem" }}>
                                        <Card.Link href="http://www.linkedin.com/in/emanuel-funes-1b1171183" target="_blank"><BsLinkedin/></Card.Link>
                                    </IconContext.Provider>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem', alignItems: 'center' }}>
                                <Card.Img variant="top" src="franco abaut US.png" style={{ maxWidth: '16rem', maxHeight: '14rem' }} />
                                <Card.Body>
                                    <Card.Title style={{height: "3rem"}}>Leonel Franco Leal</Card.Title>
                                    <Card.Text>
                                        FULL STACK WEB DEVELOPER
                                    </Card.Text>
                                    <IconContext.Provider value={{ className: "global-class-name", size: "2rem" }}>
                                        <Card.Link href="https://www.linkedin.com/in/franco-leal-910b94227" target="_blank" ><BsLinkedin /></Card.Link>
                                    </IconContext.Provider>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem', alignItems: 'center' }}>
                                <Card.Img variant="top" src="julian2.png" style={{ maxWidth: '16rem', maxHeight: '14rem' }} />
                                <Card.Body>
                                    <Card.Title style={{height: "3rem"}}>Julian Luciano Perez</Card.Title>
                                    <Card.Text>
                                        FULL STACK WEB DEVELOPER
                                    </Card.Text>
                                    <IconContext.Provider value={{ className: "global-class-name", size: "2rem" }}>
                                        <Card.Link href="https://www.linkedin.com/in/julian-perez-7282791b8/" target="_blank"><BsLinkedin/></Card.Link>
                                    </IconContext.Provider>
                                </Card.Body>
                            </Card>
                        </CardGroup>
                    </div>
                <div>
                        <CardGroup>
                            <Card style={{ width: '18rem', alignItems: 'center' }}>
                                <Card.Img variant="top" src="mateo abaut US.png" style={{ maxWidth: '16rem', maxHeight: '14rem' }} />
                                <Card.Body>
                                    <Card.Title style={{height: "3rem"}}>Mateo Reynoso Marin</Card.Title>
                                    <Card.Text>
                                        FULL STACK WEB DEVELOPER
                                    </Card.Text>
                                    <IconContext.Provider value={{ className: "global-class-name", size: "2rem" }}>
                                    <Card.Link href="https://www.linkedin.com/in/mateo-reynoso-marin-5553b223a" target="_blank"><BsLinkedin/></Card.Link>
                                    </IconContext.Provider>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem', alignItems: 'center' }}>
                                <Card.Img variant="top" src="pablo aboutUS.png" style={{ maxWidth: '16rem', maxHeight: '14rem' }} />
                                <Card.Body>
                                    <Card.Title style={{height: "3rem"}}>Pablo Agustin Canavesi</Card.Title>
                                    <Card.Text>
                                        FULL STACK WEB DEVELOPER
                                    </Card.Text>
                                    <IconContext.Provider value={{ className: "global-class-name", size: "2rem" }}>
                                        <Card.Link href="https://ar.linkedin.com/in/pablo-canavesi-b1381485" target="_blank"><BsLinkedin/></Card.Link>
                                    </IconContext.Provider>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem', alignItems: 'center' }}>
                                <Card.Img variant="top" src="tomas abautUS.png" style={{ maxWidth: '16rem', maxHeight: '14rem' }} />
                                <Card.Body>
                                    <Card.Title style={{height: "3rem"}}>Tomás Barale</Card.Title>
                                    <Card.Text>
                                        FULL STACK WEB DEVELOPER
                                    </Card.Text>
                                    <IconContext.Provider value={{ className: "global-class-name", size: "2rem" }}>
                                        <Card.Link href="https://www.linkedin.com/in/tomas-barale-768949180/" target="_blank"><BsLinkedin/></Card.Link>
                                    </IconContext.Provider>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem', alignItems: 'center' }}>
                                <Card.Img variant="top" src="nico abaut US.png" style={{ maxWidth: '16rem', maxHeight: '14rem' }} />
                                <Card.Body>
                                    <Card.Title style={{height: "3rem"}}>Nicolas Burgueño</Card.Title>
                                    <Card.Text>
                                        HENRY MENTOR
                                    </Card.Text>
                                    {/* <Card.Link href="#" target="_blank"><BsLinkedin/></Card.Link> */}
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