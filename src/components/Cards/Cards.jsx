import React from 'react'
import './Cards.css'

const Cards = () => {
  return (
    <>
    <div className='main' >
        <h2>Apply On Any Section Or Enable For Whole Page</h2>
        <div className='container' >
            <div className='part' style={{marginBottom:"80px"}} >
                <h2>Apply on Section</h2>
                <p>Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website. </p>
                <img src='https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img11.png' />
            </div>
            <div className='part' style={{marginTop:"80px"}} >
                <h2>Apply on Page</h2>
                <p>Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation. </p>
                <img src='https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img10.png' />
            </div>
        </div>
    </div>
    </>
  )
}

export default Cards