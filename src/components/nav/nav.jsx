import React from 'react'
import './nav.scss'

const Nav = () => {
  return (
    <div className="container">
      <nav className="header__nav">
        <h1 className="logo">skilled</h1>
        <button className="header-btn">
          <a href="#"> Get Started</a>
        </button>
      </nav>
    </div>
  )
}

export default Nav
