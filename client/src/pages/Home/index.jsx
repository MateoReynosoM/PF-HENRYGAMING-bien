import React, { useState } from 'react'
import { Carousel, Col, Container, Row } from 'react-bootstrap'
import { useGetFeaturedProductsQuery } from '../../redux/rtk-api'
import CardComponent from '../Products/Card'
import BrandsCarousel from './BrandsCarousel'
import styles from "./styles/Home.css"

//componentes del chatbot
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from "../ChatBot/config"
import MessageParser from "../ChatBot/MessageParser";
import ActionProvider from "../ChatBot/ActionProvider";                       
import { useSelector } from 'react-redux'


// Necesita ruta featured products del back para andar
// To do: Imagenes carousel, featured products responsive, banners verticales, error/isloading handling
const carouselImages = ["banner rizen.png", "banner teclado.png", "banner2.png", "banner3.png", "banner20.png"]







function Home() {
  const {data, error, isLoading} = useGetFeaturedProductsQuery()
  const theme = useSelector(state => state.main.theme)


  const [renderBot,setRenderBot] = useState(false)

  function handleClickBot(e){
    e.preventDefault();
if (!renderBot  ) {
    setRenderBot (true)
} else {
    setRenderBot(false)
}
}


  return (
        <>
            <Carousel interval={7000} indicators={false} controls={false}>
              {carouselImages?.map((p, i) => (
                  <Carousel.Item className='mh-50 bg-dark'>
                      <img
                        className="w-100 d-block mx-auto carousel-image"
                        src={p}
                        alt={`Slide ${i}`}
                      />
                  </Carousel.Item>
              ))}
            </Carousel>
            <Container>
                <h3 id="home" className={theme === "light" ? "mt-3 text-dark" : "mt-3 text-white"}>Featured Products</h3>
                <hr />
                <Carousel controls={false} variant="dark" className='border'>
                  <Carousel.Item className={theme === "light" ? "bg-light" : "bg-dark"}>
                    <Row key={1} className="cardsContainer" >
                        {data?.map((p, i) => {
                            if (p && (i < 3)) {
                                return  <Col key={p.id} className="properCol" >
                                          <CardComponent  id={p.id} img={p.img} brand={p.brand?.name} price={p.price} model={p.model}/>
                                        </Col>
                            } else return <></>
                        })}
                    </Row>
                    </Carousel.Item>
                    <Carousel.Item className={theme === "light" ? "bg-light" : "bg-dark"}>
                    <Row key={1} className="cardsContainer" >
                        {data?.map((p, i) => {
                            if (p && (i > 2 && i < 6)) {
                                return <Col key={p.id} className="properCol" >
                                          <CardComponent  id={p.id} img={p.img} brand={p.brand?.name} price={p.price} model={p.model}/>
                                        </Col>
                            } else return <></>
                        })}
                    </Row>
                    </Carousel.Item>
                    <Carousel.Item className={theme === "light" ? "bg-light" : "bg-dark"}>
                    <Row key={1} className="cardsContainer" >
                        {data?.map((p, i) => {
                            if (p && (i > 5 && i < 9)) {
                                return  <Col key={p.id} className="properCol" >
                                          <CardComponent  id={p.id} img={p.img} brand={p.brand?.name} price={p.price} model={p.model}/>
                                        </Col>
                            } else return <></>
                        })}
                    </Row>
                    </Carousel.Item>
                </Carousel>
            </Container>
            <BrandsCarousel></BrandsCarousel>
            {
            renderBot ?           
      <div className="bot">
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
        <button id="boton" onClick={(e) => {handleClickBot(e)}}><img src="logo.png" alt="logo" style={{maxHeight:"50px", maxWidth:"50px"}}></img>{/*  ChatBot!  */}</button> 
      </div>
         :  <div><button id="boton" className="bot" onClick={(e) => {handleClickBot(e)}}><img src="logo.png" alt="logo" style={{maxHeight:"50px", maxWidth:"50px"}}></img><span style={{right: "0"}}className='me-5 position-absolute text-white border border-danger bg-danger rounded'>Hi!</span></button></div>
     }
    </>
       
  )
}

export default Home