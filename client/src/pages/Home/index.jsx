import React from 'react'
import { Carousel, Col, Container, Row } from 'react-bootstrap'
import { useGetFeaturedProductsQuery } from '../../redux/rtk-api'
import { brandIdToName } from '../../utils/brandIdToName'
import CardComponent from '../Products/Card'
import BrandsCarousel from './BrandsCarousel'
import styles from "./styles/Home.css"

// Necesita ruta featured products del back para andar
// To do: Imagenes carousel, featured products responsive, banners verticales, error/isloading handling

function Home() {
  const {data, error, isLoading} = useGetFeaturedProductsQuery()
  return (
        <>
            <Carousel controls={false}>
              {data?.map((p, i) => (
                  <Carousel.Item className='mh-50 bg-dark'>
                      <img
                        className="w-25 d-block mx-auto carousel-image"
                        src=""
                        alt={`Slide ${i}`}
                      />
                      <Carousel.Caption>
                            <h3>Slide {i + 1}</h3>
                      </Carousel.Caption>
                  </Carousel.Item>
              ))}
            </Carousel>
            <Container>
                <h3 className='mt-3'>Featured Products</h3>
                <hr />
                <Carousel variant="dark" indicators={false} className='border'>
                  <Carousel.Item className='bg-light'>
                    <Row key={1} className="cardsContainer" >
                        {data?.map((p, i) => {
                            if (i < 3) {
                                return  <Col key={p.id} className="properCol" >
                                          <CardComponent  id={p.id} img={p.img} brand={brandIdToName(p.brandId)} price={p.price} model={p.model}/>
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
                                          <CardComponent  id={p.id} img={p.img} brand={brandIdToName(p.brandId)} price={p.price} model={p.model}/>
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
                                          <CardComponent  id={p.id} img={p.img} brand={brandIdToName(p.brandId)} price={p.price} model={p.model}/>
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