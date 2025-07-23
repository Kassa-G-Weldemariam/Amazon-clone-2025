import React, { useContext } from 'react'
import Rating from '@mui/material/Rating';
import CurrencyFormat from './currencyformat/CurrencyFormat';   
import {Link} from 'react-router-dom';
import classes from './Product.module.css';
import { DataContext } from '../dataProvider/DataProvider.jsx';
import { Type } from '../../utility/action.type';
function ProductCard({ product,flex, detailDesc, renderAdd}) {
    const { id, title, price, image, rating, description } = product;
    
    const [state, dispatch]= useContext(DataContext);

    const addToCart = () => {
        dispatch({
            type: Type.ADD_TO_CART,
            item: {
                id,
                title,
                price,
                image,
                rating,
                description
            }
        });
    }

  return (
    <div
      className={`${classes.card_container} ${
        flex ? classes.product_flexed : ""
      }`}
    >
      <Link to={`/products/${id}`}>
        <img src={image} alt="" />
      </Link>
      <div>
        <h3>{title}</h3>
        {detailDesc && <div style={{ maxWidth: "700px" }}>{description}</div>}
        <div className={classes.rating}>
          {/* rating */}
          <Rating value={rating?.rate} precision={0.1} />
          {/* count */}
          <small>{rating?.count}</small>
        </div>
        <div>
          {/* price */}
          <CurrencyFormat amount={price} />
        </div>
        {renderAdd && 
          <button className={classes.button} onClick={addToCart}>
            add to cart
          </button>
        }
      </div>
    </div>
  );
}

export default ProductCard