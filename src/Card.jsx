/* eslint-disable react/prop-types */
// import React from 'react'
import './Card.css'

export const Card = ({img, text}) => {
  return (
    <div className='card'>
        <img src={img} alt='image' />
        <p>{text}</p>
    </div>
  )
}
