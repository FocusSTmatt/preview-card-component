import { useState } from 'react'
import './App.css'
import desktopImage from './assets/images/image-product-desktop.jpg'
import mobileImage from './assets/images/image-product-mobile.jpg'
import MediaQuery from "react-responsive";
import { HiOutlineShoppingCart } from 'react-icons/hi'

function App() {

  return (
    <div className='main-flex'>
      <div className='main-ctn'>
        <MediaQuery query='(min-width: 768px)'>
            <img src={desktopImage} className='desktop-image' />
        </MediaQuery>
        <MediaQuery query='(max-width: 768px)'>
            <img src={mobileImage} className='mobile-image' />
        </MediaQuery>
        <div className='info-ctn'>
          <h5>PERFUME</h5>
          <h1>Gabrielle Essence Eau De Parfum</h1>
          <p className='info-text'>A floral, solar and voluptuous interpretation 
            composed by Olivier Polge, Perfumer-Creator for 
            the House of CHANEL.
          </p>
          <div className='price-ctn'>
            <h2>$149.99</h2>
            <p>$169.99</p>
          </div>
          <div className='btn-ctn'>
          <button><HiOutlineShoppingCart className='cart'/>Add to Cart</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default App


{/* <div className='img-ctn'>
            <MediaQuery query='(min-width: 768px)'>
                <img 
                    src={signUpDesktopImage} 
                    className='desktop-signup-image' 
                />
            </MediaQuery>
            <MediaQuery query='(max-width: 768px)'>
                <img 
                    src={signUpMobileImage} 
                    className='mobile-signup-image' 
                />
            </MediaQuery>
        </div> */}