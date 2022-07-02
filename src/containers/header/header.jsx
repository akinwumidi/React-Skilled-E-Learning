import React from 'react'
import './header.scss'
import { Images } from './../../constants'

const Header = () => {
  return (
    <section className="header__hero-section container">
      <div className="header__hero-container">
        <h1>
          Maximize skill, <br />
          minimize budget
        </h1>
        <p>
          Our modern courses across a range of in-demand skills will give you
          the knowledge you need to live the life you want.
        </p>
        <button className="header__hero-btn">
          <a href="#">Get Started</a>
        </button>
        <img
          className="header__hero-image"
          src={Images.headerImg}
          alt="headerImage"
        />
      </div>
    </section>
  )
}

export default Header
