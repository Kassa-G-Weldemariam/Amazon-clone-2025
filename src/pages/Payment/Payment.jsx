import React, {useContext, useState} from 'react'
import classes from './Payment.module.css'
import LayOut from '../../components/LayOut/LayOut'
import { DataContext } from '../../components/dataProvider/DataProvider';
import ProductCard from '../../components/product/ProductCard'
import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from '../../components/product/currencyformat/CurrencyFormat';
import { axiosInstance } from '../../Api/axios';
import { ClipLoader } from 'react-spinners';
import { db } from '../../utility/firebase';
import { doc, setDoc, collection } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import { Type } from '../../utility/action.type';
function Payment() {
const [{user, basket}, dispatch]=useContext(DataContext);

const totalItems = basket?.reduce((amount, item) => item.amount + amount, 0);

const total=basket?.reduce((amount, item)=>( item.price*item.amount + amount), 0)

const [cardError, setCardError]=useState(null)
const [loading, setLoading]=useState(false)

const elements = useElements();
const stripe=useStripe();
const navigate=useNavigate();

const handleChange=(e)=>{
e?.error?.message? setCardError(e?.error?.message):setCardError("")
}

const handlePayment= async (e)=>{
  e.preventDefault()
  try {
    setLoading(true)
    // 1. backend || functions ---> contact to the client secret
    const response = await axiosInstance({
      method: "POST",
      url: `/payment/create?total=${total * 100}`,
    });
    // console.log(response.data);
    const clientSecrete = response?.data?.clientSecret;
    // 2. client side (react side confirmation)
    const { paymentIntent } = await stripe.confirmCardPayment(clientSecrete, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });
    // console.log(paymentIntent);

    // 3.order firestore database save, clear basket
    
    await setDoc(
      doc(
        collection(doc(collection(db, "users"), user.uid), "orders"),
        paymentIntent.id
      ),
      {
        basket: basket,
        amount: paymentIntent.amount,
        created: paymentIntent.created,
      }
    );
    // empty basket
    dispatch({type: Type.EMPTY_BASKET});

    setLoading(false)
    navigate("/orders", {state:{msg:"you have added new order"}})
  } catch (error) {
    console.log(error)
    setLoading(false)
  }
}

  return (
    <LayOut>
      {/* header */}
      <div className={classes.payment_header}>
        Checkout ({totalItems}) items
      </div>
      {/* payment details */}
      <section className={classes.payment}>
        {/* address */}
        <div className={classes.flex}>
          <h3>Delivery Address</h3>
          <div>
            <div>{user?.email}</div>
            <div>123 React Lane</div>
            <div>Chicago, IL</div>
          </div>
        </div>
        <hr />
        {/* products */}
        <div className={classes.flex}>
          <h3>Review items and Delivery</h3>
          <div>
            {basket?.map((item, i) => (
              <ProductCard product={item} key={i} flex={true} />
            ))}
          </div>
        </div>
        <hr />
        {/* card form */}
        <div className={classes.flex}>
          <h3>Payment methods</h3>
          <div className={classes.payment_card_container}>
            <div>
              <form onSubmit={handlePayment}>
                {/* error */}
                {cardError && (
                  <small style={{ color: "red" }}>{cardError}</small>
                )}
                {/* card */}
                <CardElement onChange={handleChange} />
                {/* price */}
                <div className={classes.payment_price}>
                  <div>
                    <span>
                      <p>Total Order |</p> <CurrencyFormat amount={total} />
                    </span>
                  </div>
                  <button type='submit'>
                    {
                      loading?(
                        <div className={classes.loader}>
                          <ClipLoader color='gray' size={12}/>
                          <p>please wait...</p>
                        </div>
                      ):("Pay Now")
                    }
                    </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </LayOut>
  );
}

export default Payment