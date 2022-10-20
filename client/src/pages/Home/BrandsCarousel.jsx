import React from 'react'
import styles from "./styles/BrandsCarousel.css"

const brands = [
    "https://compragamer.net/imagenes_marcas/imagen_marca_316_9_591.png",
    "https://compragamer.net/imagenes_marcas/imagen_marca_364_9_203.jpg",
    "https://compragamer.net/imagenes_marcas/imagen_marca_369_9_879.jpg",
    "https://compragamer.net/imagenes_marcas/imagen_marca_320_9_411.jpg",
    "https://compragamer.net/imagenes_marcas/imagen_marca_308_9_866.jpg",
    "https://compragamer.net/imagenes_marcas/imagen_marca_366_9_965.jpg",
    "https://compragamer.net/imagenes_marcas/imagen_marca_331_9_273.jpg",
    "https://compragamer.net/imagenes_marcas/imagen_marca_359_9_526.jpg",
    "https://compragamer.net/imagenes_marcas/imagen_marca_370_9_893.jpg",
    "https://compragamer.net/imagenes_marcas/imagen_marca_322_9_619.jpg",
    "https://compragamer.net/imagenes_marcas/imagen_marca_365_9_441.jpg",
    "https://compragamer.net/imagenes_marcas/imagen_marca_367_9_389.jpg",
    "https://compragamer.net/imagenes_marcas/imagen_marca_360_9_796.jpg",
    "https://compragamer.net/imagenes_marcas/imagen_marca_314_9_380.jpg"
]

function BrandsCarousel() {
  return (
		<div class="wrapper">
            {brands.map(b => (
                <div class="item px-4"><img alt="" src={b}/></div>
            ))}
            {brands.map(b => (
                <div class="item px-4"><img alt="" src={b}/></div>
            ))}
		</div>
  )
}

export default BrandsCarousel