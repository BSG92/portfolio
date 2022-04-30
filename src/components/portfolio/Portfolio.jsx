import React from 'react'
import './portfolio.css'
import {BsGithub} from 'react-icons/bs'
import portfolio1 from '../../assets/portfolio1.png'
import portfolio2 from '../../assets/portfolio2.png'
import portfolio3 from '../../assets/portfolio3.png'
import portfolio4 from '../../assets/portfolio4.png'
import portfolio5 from '../../assets/portfolio5.png'

const Portfolio = () => {
  const portfolioArray = [
    {title:"Github Profile", image:<img src={portfolio1} alt="profile" />, link:'https://github.com/BSG92'},
    {title:"Portfolio 2", image:<img src={portfolio2} alt="port2" />, link:'https://github.com/'},
    {title:"Portfolio 3", image:<img src={portfolio3} alt="port3" />, link:'https://github.com/'},
    {title:"Portfolio 4", image:<img src={portfolio4} alt="port4" />, link:'https://github.com/'},
    {title:"Portfolio 5", image:<img src={portfolio5} alt="port5" />, link:'https://github.com/'},
  ];
  
  return (
    <section id="portfolio">
      <h5>My recent work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        
          {portfolioArray.map(({title, image, link}) => (
            <article className="portfolio__item" key={link}>
              <div className="portfolio__item-image">{image}</div>
              <h3>{title}</h3>
              <div className="portfolio-cta">
                <a href={link} className='btn btn-green_fill'> <BsGithub className='icon'/>Github</a>
                <a href={link} className='btn btn-red'> <BsGithub className='icon'/>Live Demo</a>
              </div>
            </article>
          ))}

      </div>
    </section>
  )
}

export default Portfolio