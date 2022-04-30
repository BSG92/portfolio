import React from 'react'
import {BsInstagram, BsLinkedin, BsGithub} from 'react-icons/bs'

const Socials = () => {
  return (
    <div className='header__socials'>
        <a href="http://linkedin.com" target="_blank" rel='noreferrer'><BsLinkedin /></a>
        <a href="http://github.com" target="_blank" rel='noreferrer'><BsGithub/></a>
        <a href="http://instagram.com" target="_blank" rel='noreferrer'><BsInstagram /></a>
    </div>
  )
}

export default Socials