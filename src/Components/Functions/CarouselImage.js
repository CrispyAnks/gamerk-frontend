import React from 'react';
import Image from 'react-bootstrap/Image';


const CarouselImage = (props) => {
  return (
      <Image src={props.src}
        alt={props.text}
        style={{height:'60vh'}}
      />  
  )
}

export default CarouselImage
