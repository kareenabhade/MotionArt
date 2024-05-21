import React from 'react';
import './Home.css'

const Home = () => {
  return (
    <div className='Home' >
        <div className='nav2' >
        <img src='https://qodematrix.com/wp-content/uploads/2023/10/MotionArtEffect-logo.png' />
        <button className='transparent-button'>
          <a href='https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891' target='_blank' rel='noopener noreferrer'>
            Purchase Now
          </a>
        </button>        </div>

        <section className='intro' >
             <div className='sec1'>
                <p className='rainbow' >Transform Your Website </p>
                <span>With Motion Art Effect</span>
             </div>

             <div className='sec2'>
                <h1 className='introHeading' >Attract Your Visitors Attention With Colorful<span className='rainbow'>Motion Art Effect</span>
</h1> 
                <p>Unleash the power of creativity with Motion Art for Elementor - your ultimate solution for seamlessly integrating captivating animations into your website. </p>
             </div>

             <div className='sec3' style={{width:"20%"}}>

             </div>
        </section>
    </div>
  )
}

export default Home