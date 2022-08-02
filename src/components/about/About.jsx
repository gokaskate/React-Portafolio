import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {BsFolderCheck} from 'react-icons/bs'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>Acerca De Mi</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Clients</h5>
              <small>3+ Clients</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>
            <article className='about__card'>
              <BsFolderCheck className='about__icon'/>
              <h5>Projects</h5>
              <small>8 Projects Complete</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At eum praesentium sunt porro ipsum. 
            Laborum, assumenda. Accusamus eligendi fugiat, amet in facere aperiam illum unde quia eos, sequi aliquid aut!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi vero molestias animi iure praesentium, 
            dignissimos in fugit sed placeat mollitia esse voluptate quis aperiam quia dolores consequatur odio distinctio omnis.
          </p>

          <a href="#contact" className='btn btn-primary'>Hablemos</a>
        </div>
      </div>
    </section>
  )
}

export default About