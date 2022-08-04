import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>Mi Experiencia</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience_content'>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>ANGULAR</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>REACT</h4>
              <small className='text-light'>Junior</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>PHOTOSHOP</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className='experience__backend'>
          <h3>Backend Development</h3>
            <div className='experience_content'>
                <article className='experience__details'>
                  <BsPatchCheckFill className='experience__details-icon'/>
                  <div>
                    <h4>KOTLIN</h4>
                    <small className='text-light'>Junior</small>
                  </div>
                </article>
                <article className='experience__details'>
                  <BsPatchCheckFill className='experience__details-icon'/>
                  <div>
                    <h4>NODE.JS</h4>
                    <small className='text-light'>Junior</small>
                  </div>
                </article>
                <article className='experience__details'>
                  <BsPatchCheckFill className='experience__details-icon'/>
                  <div>
                    <h4>MONGODB</h4>
                    <small className='text-light'>Intermediate</small>
                  </div>
                </article>
                <article className='experience__details'>
                  <BsPatchCheckFill className='experience__details-icon'/>
                  <div>
                    <h4>SQL</h4>
                    <small className='text-light'>Intermediate</small>
                  </div>
                </article>
                <article className='experience__details'>
                  <BsPatchCheckFill className='experience__details-icon'/>
                  <div>
                    <h4>AWS</h4>
                    <small className='text-light'>Beginner</small>
                  </div>
                </article>
              </div>
        </div>
      </div>
    </section>
  )
}

export default Experience