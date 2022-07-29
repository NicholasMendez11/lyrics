import React from "react";
import { Carousel } from "react-bootstrap";
import Image from 'react-bootstrap/Image'
function Slider({info}) {

  const {strArtistBanner,strArtistClearart,strArtistLogo} = info
  if (Object.keys(info).length === 0) return null;
  return (
    <div>
      <Carousel variant="light">
        <Carousel.Item>
          
          <Image
            className="d-block w-100"
            thumbnail
            fluid
            src={strArtistBanner}
            alt="First slide"
    
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src={strArtistClearart}
            alt="Second slide"
            thumbnail
            fluid
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          
          <Image
            className="d-block w-100"
            src={strArtistLogo}
            alt="Third slide"
            thumbnail
            fluid
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;
