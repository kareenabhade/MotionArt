import React from 'react';
import './Navbar.css';
import logo from '../images/envato.png'

const Navbar = () => {
  return (
    <div className='nav-container' >
        <img className='logoImg' src='https://public-assets.envato-static.com/assets/logos/envato_market-dde916a48af7413e54aa058fe7ae6856752fca799da4bec355f00aea904bfa19.svg'/>
        <button className='buyNow'>Buy now</button>
    </div>
  )
}

export default Navbar