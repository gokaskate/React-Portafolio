import React from 'react'
import './footer.css'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'
import {AiOutlineLinkedin} from 'react-icons/ai'


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Santiago Beltran</a>

      <ul className='permainks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">Acerca de mi</a></li>
        <li><a href="#experience">Experiencia</a></li>
        <li><a href="#services">Servicios</a></li>
        <li><a href="#portfolio">Portafolio</a></li>
        <li><a href="#testimonials">Testimonios</a></li>
        <li><a href="#contact">Contactame</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://www.instagram.com/gokaskate/"><AiOutlineInstagram/></a>
        <a href="https://www.linkedin.com/in/santiago-c-beltran/"><AiOutlineLinkedin/></a>
        <a href="https://www.facebook.com/GOKASKATE/"><AiFillFacebook/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Santiago Beltran. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer