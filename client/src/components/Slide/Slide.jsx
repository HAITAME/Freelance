import React, { Children } from 'react'
import Slider from 'infinite-react-carousel';
import "./Slide.scss"


const Slide = ({children ,slidesToShow,arrowsScroll}) => {
  return (
    <div className='slide'>
        <div className="container" > 
        <Slider slidesToShow ={slidesToShow} arrowsScroll={arrowsScroll}>
          {children}
        </Slider>
        </div>i
    </div>
  )
}

export default Slide