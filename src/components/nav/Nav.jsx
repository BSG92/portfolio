import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {SiAboutdotme} from 'react-icons/si'
import {MdWorkOutline, MdOutlineHomeRepairService, MdOutlinePermContactCalendar} from 'react-icons/md'

import { useState } from 'react'

const Nav = () => {
  //using useState, updateFunction = default use State set to 'home'
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a href="#" className={activeNav === '#' ? 'active' : ''} onClick={() => setActiveNav('#')}> <AiOutlineHome /></a>
      <a href="#about" className={activeNav === '#about' ? 'active' : ''} onClick={() => setActiveNav('#about')}> <SiAboutdotme /></a>
      <a href="#experience" className={activeNav === '#experience' ? 'active' : ''} onClick={() => setActiveNav('#experience')}> <MdWorkOutline /></a>
      <a href="#services" className={activeNav === '#services' ? 'active' : ''} onClick={() => setActiveNav('#services')}> <MdOutlineHomeRepairService /></a>
      <a href="#contact" className={activeNav === '#contact' ? 'active' : ''} onClick={() => setActiveNav('#contact')}> <MdOutlinePermContactCalendar /></a>
    </nav>
  )
}

export default Nav