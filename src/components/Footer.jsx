import React from 'react'

import logo from '../assets/header/LogoPositivo.webp'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-gradient-to-r from-secondary to-primary  flex justify-center'>
      <Link to='/'>
        <img className='w-[6rem] h-auto py-8' src={logo} alt="logo" />
      </Link>
    </div>
  )
}

export default Footer