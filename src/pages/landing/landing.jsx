import React from 'react'
import LayOut from '../../components/LayOut/LayOut';
import CarouselEffect from '../../components/carousel/CarouselEffect'
import Category from '../../components/category/Category'
import Product from '../../components/product/Product'
function landing() {
  return (
    <div>
        <LayOut>
            <CarouselEffect />
            <Category />
            <Product />
        </LayOut>
    </div>
  );
}

export default landing