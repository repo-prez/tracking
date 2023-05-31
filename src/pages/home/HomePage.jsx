import React from 'react'
import Header from '../../components/Header'

import banner from '../../assets/home/banner.webp'

import discurso from '../../assets/home/discurso1.webp'

import voto from '../../assets/home/voto.webp'

const HomePage = () => {
  return (
    <>
       <Header/>
       <div className="w-full bg-gradient-to-b  from-teal-400 to-teal-900">

            <div className='flex-col justify-items-lelf lg:flex lg:flex-row-reverse lg:items-center'>
                
                <div className="flex justify-center w-full h-1/2 lg:w-1/2 lg:h-1/2">
                      <img className='lg:w-[689px] lg:h-auto lg:justify-center xl:w-[1020px]' src={banner} alt='banner inicio' />
                </div>

                <div className="flex flex-col w-full h-96 pl-5 pr-5 justify-center lg:h-full lg:w-1/2">
                    <p className='text-white text-3xl mb-2 italic font-extrabold xl:text-5xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    <p className='text-white text-xl mb-2 xl:text-2xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    <p className='text-white text-lg mb-2 xl:text-xl'>Lorem ipsum</p>
                </div>
            </div>
       </div>
       <div className="w-full bg-gradient-to-b">

            <div className='flex-col justify-items-lelf lg:flex lg:flex-row-reverse lg:items-center'>
                
                <div className="flex justify-center w-full h-1/2 lg:w-1/2 lg:h-1/2">
                      <img className='lg:w-[689px] lg:h-auto lg:justify-center' src={discurso} alt='discurso político inicio' />
                </div>

                <div className="flex flex-col w-full bg-bannerColor pl-5 pr-5 pt-14 pb-14 justify-center lg:h-[750px] lg:w-1/2 lg:pt-0 lg:pb-0 xl:h-[1074px]">
                    <p className='text-white text-3xl mb-2 italic font-extrabold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    <p className='text-white text-xl mb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    <p className='text-white text-lg mb-2'>Lorem ipsum</p>
                </div>
            </div>
       </div>
       <div className="w-full bg-gradient-to-b">

<div className='flex-col justify-items-lelf lg:flex lg:flex-row lg:items-center'>
    <div className="flex justify-center w-full h-1/2 lg:w-1/2 lg:h-1/2">
          <img className='lg:w-[689px] lg:h-auto lg:justify-center' src={voto} alt='discurso político inicio' />
    </div>
    <div className="flex flex-col w-full bg-bannerColor2 pl-5 pr-5 pt-14 pb-14 justify-center lg:h-[750px] lg:w-1/2 lg:pt-0 lg:pb-0 xl:h-[1074px]">
        <p className='text-white text-3xl mb-2 italic font-extrabold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <p className='text-white text-xl mb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <p className='text-white text-lg mb-2'>Lorem ipsum</p>
    </div>
    

</div>
</div>
    </>
  )
}

export default HomePage
