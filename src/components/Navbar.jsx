import React from 'react'
import Logo from '../assets/images/Logo.png'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='header-container'>
      <img src={Logo} alt='Logo' className='baner-logo' />
      <div className='menu'>
        <a href='/'>Home</a>
        <a href='#exercises'>Exercises</a>
      </div>
    </div>
  )
}

export default Navbar
