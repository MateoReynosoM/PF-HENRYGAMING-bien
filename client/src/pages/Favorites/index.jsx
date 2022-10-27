import React from 'react'
import { Container, Row } from 'react-bootstrap'
import CardComponent from '../Products/Card.jsx'

const favorites = [
    {
        id: 1,
        img: "https://static.userbenchmark.com/resources/static/gpu/Nvidia-RTX-3090.jpg",
        type: "GPU",
        model: "RTX 3090",
        price: 1200,
        createdInDb: true,
        detail: '{"detail1":"24 GB","detail2":"GDDR6X","detail3":"350 W"}',
        brandId: 1,
        categoryId: 1,
        brand: {
            id: 1,
            name: "Nvidia",
            image: null
        }
    },
    {
        id: 1,
        img: "https://static.userbenchmark.com/resources/static/gpu/Nvidia-RTX-3090.jpg",
        type: "GPU",
        model: "RTX 3090",
        price: 1200,
        createdInDb: true,
        detail: '{"detail1":"24 GB","detail2":"GDDR6X","detail3":"350 W"}',
        brandId: 1,
        categoryId: 1,
        brand: {
            id: 1,
            name: "Nvidia",
            image: null
        }
    },
    {
        id: 1,
        img: "https://static.userbenchmark.com/resources/static/gpu/Nvidia-RTX-3090.jpg",
        type: "GPU",
        model: "RTX 3090",
        price: 1200,
        createdInDb: true,
        detail: '{"detail1":"24 GB","detail2":"GDDR6X","detail3":"350 W"}',
        brandId: 1,
        categoryId: 1,
        brand: {
            id: 1,
            name: "Nvidia",
            image: null
        }
    },
    {
        id: 1,
        img: "https://static.userbenchmark.com/resources/static/gpu/Nvidia-RTX-3090.jpg",
        type: "GPU",
        model: "RTX 3090",
        price: 1200,
        createdInDb: true,
        detail: '{"detail1":"24 GB","detail2":"GDDR6X","detail3":"350 W"}',
        brandId: 1,
        categoryId: 1,
        brand: {
            id: 1,
            name: "Nvidia",
            image: null
        }
    },
    {
        id: 1,
        img: "https://static.userbenchmark.com/resources/static/gpu/Nvidia-RTX-3090.jpg",
        type: "GPU",
        model: "RTX 3090",
        price: 1200,
        createdInDb: true,
        detail: '{"detail1":"24 GB","detail2":"GDDR6X","detail3":"350 W"}',
        brandId: 1,
        categoryId: 1,
        brand: {
            id: 1,
            name: "Nvidia",
            image: null
        }
    },
    {
        id: 1,
        img: "https://static.userbenchmark.com/resources/static/gpu/Nvidia-RTX-3090.jpg",
        type: "GPU",
        model: "RTX 3090",
        price: 1200,
        createdInDb: true,
        detail: '{"detail1":"24 GB","detail2":"GDDR6X","detail3":"350 W"}',
        brandId: 1,
        categoryId: 1,
        brand: {
            id: 1,
            name: "Nvidia",
            image: null
        }
    },
    {
        id: 1,
        img: "https://static.userbenchmark.com/resources/static/gpu/Nvidia-RTX-3090.jpg",
        type: "GPU",
        model: "RTX 3090",
        price: 1200,
        createdInDb: true,
        detail: '{"detail1":"24 GB","detail2":"GDDR6X","detail3":"350 W"}',
        brandId: 1,
        categoryId: 1,
        brand: {
            id: 1,
            name: "Nvidia",
            image: null
        }
    },
    {
        id: 1,
        img: "https://static.userbenchmark.com/resources/static/gpu/Nvidia-RTX-3090.jpg",
        type: "GPU",
        model: "RTX 3090",
        price: 1200,
        createdInDb: true,
        detail: '{"detail1":"24 GB","detail2":"GDDR6X","detail3":"350 W"}',
        brandId: 1,
        categoryId: 1,
        brand: {
            id: 1,
            name: "Nvidia",
            image: null
        }
    },
    
]

function Favorites() {
  return (
    <Container>
        <h2 className='text-secondary mt-3'>Wishlist</h2>
        <hr />
        <Row className="d-flex justify-content-center">{favorites.map(f => <CardComponent key={f.id} img={f.img} id={f.id} model={f.model} brand={f.brand.name} price={f.price}/>)}</Row>
    </Container>
  )
}

export default Favorites