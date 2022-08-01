import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/santiago-c-beltran/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/gokaskate" target="_blank"><FaGithub/></a>
        <a href="https://www.instagram.com/gokaskate/" target="_blank"><FaInstagram/></a>
    </div>
  )
}

export default HeaderSocials