import React from 'react'
import Slider from "react-slick";
import {testimonials} from "../constants/data"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import FormatQuoteIcon from "@mui/icons-material/FormatQuote"


const Testimonials = () => {

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
}


  return (
    <>
    <section className='testimonials header'>
      <div className='container'>
       
        <Slider {...settings}>
          {testimonials.map((value, index)=> (
          <div className='box' key={index}>
              <i data-aos='zoom-out-down'>
                <FormatQuoteIcon/>
              </i>
              <p data-aos='zoom-out-down'>{value.text}</p>
              <div className='img' data-aos='zoom-out-right'>
                <img src={value.image} alt="bla"/>
              </div>
              <h3 data-aos='zoom-out-left'>{value.name}</h3>
              <label data-aos='zoom-out'>{value.post}</label>
          </div>
          ))}
        </Slider>
      </div>
    </section>
    </>
  )
}

export default Testimonials