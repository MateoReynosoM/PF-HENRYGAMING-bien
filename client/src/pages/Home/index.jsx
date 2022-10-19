import React from 'react'
import { Carousel, Container } from 'react-bootstrap'
import { useGetFeaturedProductsQuery } from '../../redux/rtk-api'
import styles from "./styles/Home.css"

// Banner


function Home() {
  const {data, error, isLoading} = useGetFeaturedProductsQuery()
  return (
        <Carousel>
            {data?.map(p => (
                <Carousel.Item className='mh-50 bg-dark'>
                    <img
                      className="w-25 d-block mx-auto carousel-image"
                      src={p.img}
                      alt="First slide"
                    />
                    <Carousel.Caption>
                          <h3>{p.model}</h3>
                          <p>USD {p.price}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
  )
}

export default Home