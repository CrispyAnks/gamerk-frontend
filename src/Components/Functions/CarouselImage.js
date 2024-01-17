import React from 'react';
import Image from 'react-bootstrap/Image';


const CarouselImage = (props) => {
  return (
    <div>
      <Image src={props.src}
        alt={props.text}
        style={{textAlign:'center', height:'50vh', margin:'0 auto'}}
      />
    </div>
  )
}

export default CarouselImage
