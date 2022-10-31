import React from 'react'
import { Carousel, Col, Container, Row } from 'react-bootstrap'
import { useGetFeaturedProductsQuery } from '../../redux/rtk-api'
import CardComponent from '../Products/Card'
import BrandsCarousel from './BrandsCarousel'
import styles from "./styles/Home.css"

// Necesita ruta featured products del back para andar
// To do: Imagenes carousel, featured products responsive, banners verticales, error/isloading handling
const carouselImages = ["banner rizen.png", "banner teclado.png", "banner2.png", "banner3.png", "banner20.png"]

function Home() {
  const {data, error, isLoading} = useGetFeaturedProductsQuery()
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
                <h3 id="home" className='mt-3'>Featured Products</h3>
                <hr />
                <Carousel controls={false} variant="dark" className='border'>
                  <Carousel.Item className='bg-light'>
                    <Row key={1} className="cardsContainer" >
                        {data?.map((p, i) => {
                            if (i < 3) {
                                return  <Col key={p.id} className="properCol" >
                                          <CardComponent  id={p.id} img={p.img} brand={p.brand?.name} price={p.price} model={p.model}/>
                                        </Col>
                            } else return <></>
                        })}
                    </Row>
                    </Carousel.Item>
                    <Carousel.Item className='bg-light'>
                    <Row key={1} className="cardsContainer" >
                        {data?.map((p, i) => {
                            if (i > 2 && i < 6) {
                                return  <Col key={p.id} className="properCol" >
                                          <CardComponent  id={p.id} img={p.img} brand={p.brand?.name} price={p.price} model={p.model}/>
                                        </Col>
                            } else return <></>
                        })}
                    </Row>
                    </Carousel.Item>
                    <Carousel.Item className='bg-light'>
                    <Row key={1} className="cardsContainer" >
                        {data?.map((p, i) => {
                            if (i > 5 && i < 9) {
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
        </>
  )
}

export default Home