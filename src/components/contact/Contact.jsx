import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import {AiOutlineLinkedin} from 'react-icons/ai'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contactame</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>gokaskate@gmail.com</h5>
            <a href="mailto:gokaskate@gmail.com" target="_blank" rel='noreferrer'>Enviame un mensaje</a>
          </article>
          <article className='contact__option'>
            <AiOutlineWhatsApp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>(+57) 312 886 5846</h5>
            <a href="https://api.whatsapp.com/send?phone=573128865846&text=Hola%20Santiago,%20tienes%20tiempo%20para%20contarte%20algo%20genial?" target="_blank" rel='noreferrer'>Enviame un mensaje</a>
          </article>
          <article className='contact__option'>
            <AiOutlineLinkedin className='contact__option-icon'/>
            <h4>Linkedin</h4>
            <h5>www.linkedin.com/in/santiago-c-beltran</h5>
            <a href="https://www.linkedin.com/in/santiago-c-beltran/" target="_blank" rel='noreferrer'>Enviame un mensaje</a>
          </article>
        </div>
        <form action="">
          <input type="text" name='name' placeholder='Tu nombre completo' required/>
          <input type="email" name='email' placeholder='Tu Email' required />
          <textarea name="message" rows="7" placeholder='Tu mensaje' required></textarea>
          <button type='submit' className='btn btn-primary'>Enviar Mensaje</button>
        </form>
      </div>
    </section>
  )
}

export default Contact