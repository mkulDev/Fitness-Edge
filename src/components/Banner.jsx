import React from 'react'
import Slider from './Slider'
import './banner.css'

const Banner = () => {
  return (
    <section id='home'>
      <div className='hero-text'>
        <span>Fitness Center</span>
        <span>
          Get fit <br />
          and look great
        </span>
        <span>check the most effective exercises</span>
        <a href='/#exercises'>
          <button>Explore exercises</button>
        </a>
        <span className='background-typo'>the Fitness of Confidence</span>
      </div>
      <Slider />
    </section>
  )
}

export default Banner
