import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    names: 'Oscar Guzman',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae provident velit error expedita mollitia beatae distinctio laudantium necessitatibus atque dolor. Aperiam suscipit repudiandae consequuntur distinctio veniam quidem voluptatum laudantium placeat.'
  },
  {
    avatar: AVTR2,
    names: 'Elda Beltran',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae provident velit error expedita mollitia beatae distinctio laudantium necessitatibus atque dolor. Aperiam suscipit repudiandae consequuntur distinctio veniam quidem voluptatum laudantium placeat.'
  },
  {
    avatar: AVTR3,
    names: 'Juan Manuel Oliveros',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae provident velit error expedita mollitia beatae distinctio laudantium necessitatibus atque dolor. Aperiam suscipit repudiandae consequuntur distinctio veniam quidem voluptatum laudantium placeat.'
  },
  {
    avatar: AVTR4,
    names: 'Jose Ramirez',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae provident velit error expedita mollitia beatae distinctio laudantium necessitatibus atque dolor. Aperiam suscipit repudiandae consequuntur distinctio veniam quidem voluptatum laudantium placeat.'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonios</h2>

      <Swiper className='container testimonials__container'
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
        {
          data.map(({avatar, names, review}, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className='client__avatar'>
                  <img src={avatar} alt='' />
                </div>
                <h5 className='client__name'>{names}</h5>
                <small className='client__review'> {review} </small>
             </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials