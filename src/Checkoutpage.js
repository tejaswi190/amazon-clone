
import userEvent from '@testing-library/user-event';
import React from 'react'
import './Checkoutpage.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';

import Subtotal from './Subtotal';
function Checkoutpage() {
  const [{basket,user},dispatch] = useStateValue();
  return (
    <div className='checkout'>
        <div className='checkout_left'>
             <h3>hello!,{user?.email}</h3>
              <h2 className='checkout_title'>
                Your shopping basket 
              </h2>
              {basket.map(item=> (
              <CheckoutProduct
               id = {item.id}
               title={item.title}
               image = {item.image}
               price = {item.price}
               rating = {item.rating}
              ></CheckoutProduct>
              ))}
        </div>
        <div className='checkout_right'>
              <Subtotal></Subtotal>
        </div>
    </div>
  )
}

export default Checkoutpage
