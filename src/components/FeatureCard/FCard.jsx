import React from 'react'
import './FCard.css';

const FCard = ({img, heading, content}) => {
  return (
    <div className='fcard' >
        <img src={img} />
        <h2>{heading}</h2>
        <p>{content}</p>
    </div>
  )
}

export default FCard