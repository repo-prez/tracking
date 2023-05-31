import React from 'react'
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

import logo from '../assets/header/Logok.webp'

import hamburgerMenu from '../assets/header/hamburgerMenu.svg';
import closeMenu from '../assets/header/closeIco.svg';


function Header() {
    const { setFilterHome } = useContext(AppContext)

  const [showBurgerMenu, setShowBurgerMenu] = useState(true)


  const toggleBurgerMenu = () => {
    setShowBurgerMenu(!showBurgerMenu)
  }


  const handleShowMenu = (e) => {
    setFilterHome(true)
  }

  const handleHideMenu = () => {
    setFilterHome(false)
  }
    return (
        <>
            <div className={`relative text-white   xl:text-xl `}>


                {/* Normal Menu */}
                <div className='px-4 bg-gradient-to-r from-primary to-primary-dark hidden md:flex flex-col '>


                    <div className=' relative justify-end items-center md:flex '>
                        <img className=' w-[100px] h-auto absolute left-0' src={logo} alt="icon speedy" />

                        <div className="flex  h-14 md:justify-end lg:justify-center  invisible md:visible md:ml-16">





                            <div className='py-4'>
                                <Link
                                    to='/'
                                    onMouseEnter={(e) => handleShowMenu(e)}
                                    onMouseLeave={() => handleHideMenu()}
                                >
                                    <p className='rounded-xl cursor-pointer px-3 py-1 text-black  hover:bg-green-300/100 ease-in-out duration-500'>Inicio </p>
                                </Link>
                            </div>

                            <div className='py-4'>
                                <Link
                                    to='/estudio-opinion'
                                    onMouseEnter={(e) => handleShowMenu(e)}
                                    onMouseLeave={() => handleHideMenu()}
                                >
                                    <p className='rounded-xl cursor-pointer px-3 py-1 text-black  hover:bg-green-300/100 ease-in-out duration-500'>Estudio de opinión </p>
                                </Link>
                            </div>


                        </div>
                    </div>



                </div>










                {/* Burger Menu */}
                <div className='flex flex-col md:hidden '>

                    <div className='flex justify-between  p-4 bg-gradient-to-r from-primary to-primary-dark'>
                        <img className='w-1/4 h-8' src={logo} alt="" />
                        {showBurgerMenu ?
                            <img className='' width={25} src={hamburgerMenu} alt="" onClick={toggleBurgerMenu} />
                            :
                            <img className='' width={25} src={closeMenu} alt="" onClick={toggleBurgerMenu} />
                        }

                    </div>

                    <div className={` absolute  z-30 top-[62px] w-full  flex flex-col justify-center items-start  p-4  bg-slate-200 text-slate-700 text-xl  divide-y divide-slate-400    md:hidden ${showBurgerMenu && `hidden`} 
    animate__animated animate__faster animate__fadeInRight
    `}>
                        <Link
                            to={'/'}
                            className=' cursor-pointer hover:bg-slate-700 hover:text-white hover:font-bold w-full p-2'>
                            <p>Inicio</p>
                        </Link>

                        <Link
                            to={'/estudio-opinion'}
                            className=' cursor-pointer hover:bg-slate-700 hover:text-white hover:font-bold w-full p-2'>
                            <p>Estudio de opinión</p>
                        </Link>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Header