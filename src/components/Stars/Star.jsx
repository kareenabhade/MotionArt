import React from 'react';
import './Star.css'

const Star = ({img}) => {
  return (
    <div className='starCard' style={{display:'flex'}}>
        <img src={img} alt='N/A' />
        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', padding:"10px"
        }} >
            <p><img src='https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img4.png' /></p>
            <p style={{fontFamily:'OutFit', paddingTop:'15px', color: "#EEE5FFBD"}} ><strong>4.5</strong> Scores,9 Reviews</p>
        </div>
    </div>
  )
}

export default Star