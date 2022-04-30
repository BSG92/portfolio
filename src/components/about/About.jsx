import React from 'react'
import './about.css';
import Me from './../../assets/me/edit1.jpg';
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={Me} alt="edit1 me" srcset="" />
            </div>
          </div>
          <div className="about__content">
              <div className="about__cards">
                <article className="about__card">
                  <FaAward className='about__icon' />
                  <h5>Experience</h5>
                  <small>3+ Years</small>
                </article>
                <article className="about__card">
                  <FiUsers className='about__icon' />
                  <h5>Clients</h5>
                  <small>200+ worldwide</small>
                </article>
                <article className="about__card">
                  <VscFolderLibrary className='about__icon' />
                  <h5>Projects</h5>
                  <small>180+ Completed</small>
                </article>
              </div>

              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore dolorum nam nostrum voluptas a laboriosam, eos atque ipsam tempora dolore corporis velit inventore dignissimos necessitatibus asperiores cum ea quas. Facilis!
              </p>

              <a href="#contact" className='btn btn-blue'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About