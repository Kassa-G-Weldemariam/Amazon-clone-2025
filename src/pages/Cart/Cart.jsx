import React, { useContext } from 'react'
import classes from './cart.module.css'
import LayOut from '../../components/LayOut/LayOut'
import { DataContext } from '../../components/dataProvider/DataProvider';
import ProductCard from '../../components/Product/ProductCard';
import CurrencyFormat from '../../components/product/currencyformat/CurrencyFormat';
import { Link } from 'react-router-dom';
import { Type } from '../../utility/action.type';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
function Cart() {
  const [{basket, user}, dispatch]=useContext(DataContext)
  const total=basket?.reduce((amount, item)=>( item.price*item.amount + amount), 0)
  const increment=(item)=>{
    dispatch({
      type:'ADD_TO_CART',
      item:item
    })
  }
  const decrement=(id)=>{
    dispatch({
      type:'REMOVE_FROM_CART',
      id:id
    })
  }
  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.cart_container}>
          <h2>Hello</h2>
          <h3>Your shopping basket</h3>
          <hr />
          {basket?.length == 0 ? (
            <p>Opps ! No item in your cart</p>
          ) : (
            basket?.map((item, i) => {
              return (
                <section className={classes.cart_product}>
                  <ProductCard
                    key={i}
                    product={item}
                    detailDesc={true}
                    renderAdd={false}
                    flex={true}
                  />
                  <div className={classes.btn_container}>
                    <button
                      className={classes.btn}
                      onClick={() => increment(item)}
                    >
                      <KeyboardArrowUpIcon size={30}/>
                    </button>
                    <span>{item.amount}</span>
                    <button
                      className={classes.btn}
                      onClick={() => decrement(item.id)}
                    >
                      <KeyboardArrowDownIcon size={30}/>
                    </button>
                  </div>
                </section>
              );
            })
          )}
        </div>
        {basket?.length !== 0 && <div  className={classes.subtotal}>
          <div >
            <p>subtotal ({basket?.length} items)</p>
            <CurrencyFormat amount={total}/>
          </div>
          <span>
            <input type="checkbox" />
            <small>This order contains a gift</small>
          </span>
          <Link to='/payment'>continue to checkout</Link>
          </div>}
      </section>
    </LayOut>
  );
}

export default Cart