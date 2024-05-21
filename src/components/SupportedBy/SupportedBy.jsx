import React from 'react'
import './Supported.css'
import FCard from '../FeatureCard/FCard'

const SupportedBy = () => {
  return (
    <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}} >
    <section className='main2' >
      <h2>Supported by All Popular Browsers</h2>
      <p>Rest assured, Motion Art is designed to be compatible with all major web browsers.</p>
      <img src='https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img8.png' />
    </section>
    <section className='main3' >
      <h2>An All-Round Plugin With Powerful Features</h2>
      <p>Whether you're a seasoned web designer or just starting out, Motion Art for Elementor seamlessly integrates with the Elementor platform, providing you with a seamless and intuitive experience.</p>
    </section>
    <section className='main4' >
       <FCard img='https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img9.png' heading='Light Weight' id='fcard1'
              content='Motion Art for Elementor is designed to be lightweight.' />
       <FCard img='https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img6.png' heading='100% Responsive' id='fcard2'
              content='Create a consistent visual experience across all devices.' />
       <FCard img='https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img7.png' heading='User Friendly Interface' id='fcard3'
              content='Ensure a smooth experience for both applicants and administrators.' />
    </section>
  </div>
  )
}

export default SupportedBy