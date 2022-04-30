import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from './../../assets/me/half.jpg'
import Socials from './Socials'
import {AiOutlineArrowRight} from 'react-icons/ai'

const Header = () => {
  return (
    <header>
      <section className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>Buddika Gunawardena</h1>
        <h5 className="text-dark">DevOps Engineer</h5>
        <CTA />

        <div className="me">
          <img src={ME} alt="me" srcset="" />
        </div>

        <a href="#contact" className='scroll__down'>SCROLL DOWN <AiOutlineArrowRight /></a>
        <Socials />

      </section>

    </header>
  )
}

export default Header