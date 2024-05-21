import React from 'react';
import './Navbar.css';
import logo from '../images/envato.png'

const Navbar = () => {
  return (
    <div className='nav-container' >
        <img className='logoImg' src='https://public-assets.envato-static.com/assets/logos/envato_market-dde916a48af7413e54aa058fe7ae6856752fca799da4bec355f00aea904bfa19.svg'/>
        <button className='buyNow'>
          <a href='https://codecanyon.net/checkout/102330135/create_account' target='_blank' rel='noopener noreferrer'>
            Buy now
          </a>
          </button>
    </div>
  )
}

export default Navbar