import React from 'react'
import {Carousel} from 'react-bootstrap'

export default function Caraousel() {
  return (
    <div>
    
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img3.jpeg" width='1000' height='720'
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nft image 1.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img1.jpeg" width='1000' height='720'
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Nft image 2</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img2.jpeg" width='1000' height='720'
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
          Nft image 3.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

