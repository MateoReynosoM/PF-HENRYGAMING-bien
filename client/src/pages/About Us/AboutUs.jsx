import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import "./about.css";

function AboutUs(){
    return(
        <>
            <div>
                <h2>About Us</h2>
                <p>
                    HenryGaming is an e-commerce website created in 2022 by HenryGaming Argentina SRL, where you can find the best market products 
                    and every hardware component you need to be at the forefront of computer technology.
                    You will be able to consult for personalized advice by sending a simple message as we require in the FAQs and coordinate with our team on the delivery system, changes and modifications to your orders.
                    Thanks for meeting us!
                </p>
                <h2>The Project</h2>
                <p>
                    This website was made as a final project of the Full Stack Developer course taught by www.soyhenry.com. Made by the team shown below.
                    We give a special thanks to those who accompanied us in this project, among them, our assigned mentor Nicolas Burgueño and and our initial correction teacher Daiana Guillia.
                </p>
            </div>
            <div>
            <h2>The Team</h2>
            <div className="pruebacontainer">
                <div>
                    <h4>Front Team</h4>
                        <CardGroup>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="benja.png" style={{padding:'1rem', height:'100%', maxHeight: '10rem', objectFit: 'contain'}}/>
                                <Card.Body>
                                    <Card.Title>Benja</Card.Title>
                                    <Card.Text>
                                        FULL STACK WEB DEVELOPER
                                    </Card.Text>
                                    <Card.Link href="https://www.linkedin.com/signup/cold-join?trk=guest_homepage-basic_nav-header-join">Another Link</Card.Link>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="benja.png" />
                                <Card.Body>
                                    <Card.Title>Benja2</Card.Title>
                                    <Card.Text>
                                        FULL STACK WEB DEVELOPER
                                    </Card.Text>
                                    <Card.Link href="#">Another Link</Card.Link>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="benja.png" />
                                <Card.Body>
                                    <Card.Title>Benja</Card.Title>
                                    <Card.Text>
                                        FULL STACK WEB DEVELOPER
                                    </Card.Text>
                                    <Card.Link href="#">Another Link</Card.Link>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="benja.png" />
                                <Card.Body>
                                    <Card.Title>Benja</Card.Title>
                                    <Card.Text>
                                        FULL STACK WEB DEVELOPER
                                    </Card.Text>
                                    <Card.Link href="#">Another Link</Card.Link>
                                </Card.Body>
                            </Card>
                        </CardGroup>
                    </div>
                <div>
                    <h4>Back Team</h4>
                        <CardGroup>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="benja.png" />
                                <Card.Body>
                                    <Card.Title>Benja</Card.Title>
                                    <Card.Text>
                                        FULL STACK WEB DEVELOPER
                                    </Card.Text>
                                    <Card.Link href="#">Another Link</Card.Link>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="benja.png" />
                                <Card.Body>
                                    <Card.Title>Benja2</Card.Title>
                                    <Card.Text>
                                        FULL STACK WEB DEVELOPER
                                    </Card.Text>
                                    <Card.Link href="#">Another Link</Card.Link>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="benja.png" />
                                <Card.Body>
                                    <Card.Title>Benja</Card.Title>
                                    <Card.Text>
                                        FULL STACK WEB DEVELOPER
                                    </Card.Text>
                                    <Card.Link href="#">Another Link</Card.Link>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="benja.png" />
                                <Card.Body>
                                    <Card.Title>Benja</Card.Title>
                                    <Card.Text>
                                        FULL STACK WEB DEVELOPER
                                    </Card.Text>
                                    <Card.Link href="#">Another Link</Card.Link>
                                </Card.Body>
                            </Card>
                        </CardGroup>
                    </div>
                </div>
            </div>    



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