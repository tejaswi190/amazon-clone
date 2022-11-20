import React from 'react'
import './Home.css';
import Product from './Product';
function Home() {
  return (
    <div className='home'>
        <div className='home_container'>
            <img className='home_image'
              src='https://images-eu.ssl-images-amazon.com/images/G/31/img21/Books/Book-bazaar/3000-X-1200-BB-August-2022-Herotater_Rec._CB629254780_.jpg'>
            </img>
            <div className='home_row'>
                 <Product 
                  title='The lean startup'
                  price={29.99}
                  image="https://m.media-amazon.com/images/I/51voSIzC6eL._SR215,215_.jpg"
                  rating={3}
                 ></Product> 
                 <Product
                   title='Infantbond Combo of Baby Bed with Net | Carry Bag | 4 Pcs Bedding Set(0-6 Months) (Star &amp; Moon Grey)'
                   price={299.99}
                   image="https://images-eu.ssl-images-amazon.com/images/I/51UpK+-hJOL._AC_SX184_.jpg"
                   rating={3}
                 ></Product>   
            </div>
            <div className='home_row'>
               <Product
                  title='Chumbak Squad 2.0 Smartwatch - 1.7 inch SpO2, with 24*7 Health Tracking with Blood Oxygen, Fitness, Sports &amp; Sleep Tracking for Women, Tropical Paradise'
                  price={2450}
                  image="https://m.media-amazon.com/images/I/71hXjKVCszL._AC_UL480_QL65_.jpg"
                  rating={5}
               ></Product>
               <Product
                 title='GoldGiftIdeas Pure 999 Silver OM Rakhi for Brother, Golden -Silver Rakhi for Rakshabandhan with Pooja Thali Set (5 Inch) Rakhi Gift for Men/Boys       '
                 price={529}
                 image="https://m.media-amazon.com/images/I/61jmpbvsqsL._UX500_.jpg"
                 rating={4}
               ></Product>
               <Product
                 title='Pepe Jeans Men Blue Jeans'
                 price={1056}
                 image="https://m.media-amazon.com/images/I/61lDPRZqv3L._UX569_.jpg"
                 rating={4}
              ></Product>
            </div>
            <div className='home_row'>
              <Product
                 title='        Croma 80 cm (32 Inches) HD Ready Certified Android Smart LED TV CREL032HOF024601 (Black) (2022 Model)       '
                 price={11000}
                 image="https://m.media-amazon.com/images/I/81NJ3EVshNL._SX679_.jpg"
                 rating={5}
              ></Product>
            </div>
        </div>
    </div>
  )
}

export default Home