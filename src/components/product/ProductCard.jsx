import React from 'react'
import Rating from '@mui/material/Rating';
import CurrencyFormat from './currencyformat/CurrencyFormat';
import {Link} from 'react-router-dom';
import classes from './Product.module.css';
function ProductCard({ product }) {
    const { id, title, price, image, rating } = product;
  return (
    <div className={classes.card_container} >
        <Link to={`/products/${id}`}>
            <img src={image} alt="" />
        </Link>
        <div>
            <h3>{title}</h3>
            <div className={classes.rating}>
                {/* rating */}
                <Rating value={rating?.rate} precision={0.1}/>
                {/* count */}
                <small>{rating?.count}</small>
            </div>
            <div>
                {/* price */}
                <CurrencyFormat amount={price}/>
            </div>
            <button className={classes.button}>
                add to cart
            </button>
        </div>
    </div>
  )
}

export default ProductCard