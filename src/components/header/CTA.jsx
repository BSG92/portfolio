// CTA = Call To Action

import React from 'react'
import CV from '../../assets/vwives.srt'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn btn-blue_fill'>Download CV</a>
        <a href="#contact" className='btn btn-blue'>Let's Talk</a>
    </div>
  )
}

export default CTA