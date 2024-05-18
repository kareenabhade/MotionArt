import React from 'react'
import './Middle.css'
import { FaArrowRightLong } from "react-icons/fa6";
import Star from '../Stars/Star'
import Cards from '../Cards/Cards';
import SupportedBy from '../SupportedBy/SupportedBy';

const Middle = () => {
  return (
    <>
    <div style={{display:'flex', flexDirection:'column'}} >
    <div className='middle'  >
        <div>
        <p className='middleHeading' >Trusted by thousands of users around the world</p>
        <section className='section' >
            <Star img='https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img2.png' />
            <Star img='https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img1.png' />
            <Star img='https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img3.png'/>
        </section>
        </div>
        <div>
        <section className='section2'>
            <div>
            <h1>Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors</h1>
            <p>Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements.</p>
            <button className='purchase' >Purchase From Envato <FaArrowRightLong style={{background:"none", padding:'5px 15px 0px'}} /> </button>
            </div>
            <img src='https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img5.png' />
        </section>
        </div>
    </div>
    </div>
  </>
  )
}

export default Middle