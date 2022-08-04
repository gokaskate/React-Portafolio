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
            Desarrollador Angular, Html5 y Css3 con conocimientos en Haml y Sass manejo de bootstrap y otras librerías de estilos, 
            material angular y angular CLI, manejo de webs SPA y responsive design también conocimientos del uso de typescript conocimientos básicos de pruebas unitarias, 
            Json y servicios Rest y soap. Conocimientos base de React y un poco de redux.
          </p>

          <a href="#contact" className='btn btn-primary'>Hablemos</a>
        </div>
      </div>
    </section>
  )
}

export default About