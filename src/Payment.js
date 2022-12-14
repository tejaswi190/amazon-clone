import React, { useEffect, useState } from 'react'
import CheckoutProduct from './CheckoutProduct'
import './Payment.css'
import { useStateValue } from './StateProvider'
import { Outlet, Link, Navigate } from "react-router-dom";
import { CardElement,useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import {getBasketTotal} from './reducer';
import axios from './axios';

function Payment() {
    const [{basket,user},dispatch] = useStateValue();
    const[error,setError] = useState(null);
    const[disabled,setDisabled] = useState(true);
    const[processing,setProcessing] = useState("");
    const[succeeded,setSucceeded] = useState(false);
    const [clientSecret,setClientSecret] = useState(true);

    const stripe = useStripe();
    const elements = useElements();
    
    useEffect(() => {
         const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: '/payments/create?total=${getBasketTotal(basket) * 100}'
            })
            setClientSecret(response.data.clientSecret)
         }
         getClientSecret();
    },[basket])

    console.log('The secret is >>>',clientSecret)
    const handleSubmit = async (event) => {
          event.preventDefault();
          setProcessing(true);
          const payload = await stripe.confirmCardPayment(clientSecret,{
            payment_method: {
                card: elements.getElement(CardElement)
            }
          }).then(({ paymentIntent}) => {
             setSucceeded(true);
             setError(null)
             setProcessing(false)
             Navigate('/orders')
          }) 
    }
    const handleChange = event =>{
       setDisabled(event.empty);
       setError(event.error ? event.error.message :"");
    }
  return (
    <div className='payment'>
        <div className='payment_container'>
            <h1>
                Checkout {
                    <Link to="/checkout">({basket?.length} items)</Link>
                    }
            </h1>
            <div className='payment_section'>
                <div className='payment_title'>
                   <h3>Delivery Address</h3>
                </div>
                <div className='payment_address'>
                     <p>{user?.email}</p>
                     <p>21 street jayanager,khammam,telangana</p>
                     <p>India,507002</p>
                </div>
            </div>
            <div className='payment_section'>
                <div className='payment_title'> 
                <h3>Review item and Delivery</h3>
                </div>
                <div className='payment_item'>
                   {basket.map(item => (
                      <CheckoutProduct
                      id = {item.id}
                      title={item.title}
                      image = {item.image}
                      price = {item.price}
                      rating = {item.rating}
                      >
                      </CheckoutProduct>
                   ) )}
                </div>
            </div>
            <div className='payment_section'>
                <div className='payment_title'>
                   <h3>Payment Method</h3>
                </div>
                <div className='payment_details'>
                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange}></CardElement>
                        <div className='payment_pricecontainer'>
                             <CurrencyFormat
                                renderText={(value) => (
                                    <h3>order Total:{value}</h3>
                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={"text"}
                                thousandseperator={true}
                                prefix={"$"}>
                             </CurrencyFormat>
                             <button disabled={processing || disabled || succeeded}>
                                <span>{processing ? <p>processing</p> : "Buy Now"}</span>
                             </button>
                        </div>

                        {error && <div>{error}</div>}
                    </form>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Payment
