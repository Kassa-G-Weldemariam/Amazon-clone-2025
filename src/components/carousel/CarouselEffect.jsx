import React from 'react'
import { Carousel } from "react-responsive-carousel";
import {img} from './img/data.js';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from './carousel.module.css';
function CarouselEffect() {
  return (
    <div className={classes.carousel_container}>
      <Carousel
        autoplay={true}
        interval={3000}
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
      >
        {img.map((imageItemLink, index) => {
          return <img key={index} src={imageItemLink} alt={`image-${index}`} />;
        })}
      </Carousel>
      <div className={classes.hero_img}></div>
    </div>
  );
}

export default CarouselEffect;