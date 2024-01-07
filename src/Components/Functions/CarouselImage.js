import React from 'react';
import Image from 'react-bootstrap/Image';


const CarouselImage = ({ text }) => {
  return (
    <div>
      <Image src={process.env.PUBLIC_URL + 'main.jpeg'}
        alt={text}
        style={{maxWidth:'50%'}}
      />
    </div>
  )
}

export default CarouselImage
