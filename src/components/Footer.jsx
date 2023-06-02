import React from 'react'

import logo from '../assets/header/LogoPositivo.webp'

const Footer = () => {
  return (
    <div className='bg-gradient-to-r from-secondary to-primary  flex justify-center'>
      <img className='w-[6rem] h-auto py-8' src={logo} alt="logo" />
    </div>
  )
}

export default Footer