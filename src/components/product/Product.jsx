import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import classes from './Product.module.css';
import Loader from '../../components/Loader/';
function Product() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
    setIsLoading(true);
      axios.get("https://fakestoreapi.com/products")
      .then((res) =>{
        setProducts(res.data);
        setIsLoading(false);
      }).catch((err)=>{
        console.log(err);
        setIsLoading(false);
      })
    }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className={classes.product_container}>
          {products?.map((singleProduct) => (
            <ProductCard renderAdd={true} product={singleProduct} key={singleProduct.id} />
          ))}
        </section>
      )}
    </>
  );
}

export default Product