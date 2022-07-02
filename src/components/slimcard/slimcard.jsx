import React from 'react'
import './slimcard.scss'

const Slimcard = ({ title, Img, text }) => {
  return (
    <div className="slimcard">
      <img src={Img} alt={`${title}-Image`} />
      <div className="slim__backslide"></div>
      <div className="slimcard-items">
        <h3>{title}</h3>
        <p>{text}</p>
        <a href="#">Get Started</a>
      </div>
    </div>
  )
}

export default Slimcard
