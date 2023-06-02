import React from 'react'
import Header from '../../components/Header'

import banner from '../../assets/home/banner.webp'
import discurso from '../../assets/home/discurso1.webp'
import voto from '../../assets/home/voto.webp'
import churchBg from '../../assets/home/churchBg.webp'
import consultoria from '../../assets/home/consultoria.webp'
import estudioDeMercado from '../../assets/home/estudioDeMercado.webp'
import estrategiaPolitica from '../../assets/home/estrategiaPolitica.webp'

import rightArrow from '../../assets/icons/rightArrow.svg'



import videoEcuador from '../../assets/home/videoEcuador.mp4'
import Footer from '../../components/Footer'




const HomePage = () => {
  return (
    <>
      <Header />
      <div className="w-full ">


        <section className=' bg-gradient-to-tr from-background to-white md:flex flex-row-reverse md:h-[40rem] lg:[50rem]'>
          <div className='flex justify-center md:w-1/2 lg:w-1/4 mx-20'>
            <img className='w-full  object-cover' src={churchBg} alt="" />
          </div>
          <div className='flex flex-col items-center md:justify-center lg:items-start px-8 py-4 lg:w-1/2'>
            <h1 className='text-3xl md:text-5xl font-bold pb-4'>Consulta de opinión</h1>
            <p className='text-lg md:text-xl'>Los datos de opinión ciudadana mas actualizados del país.</p>
            <a className='flex w-full items-center mt-4 font-bold md:text-xl' href="">Ver más <img className='ml-4 w-[2rem] transition duration-150 hover:scale-125' src={rightArrow} alt="" /></a>
          </div>
        </section>


        <section className='md:flex flex-row md:h-[40rem] lg:h-[30rem]'>
          <div className='flex justify-center md:w-1/2'>
            <img className='w-full object-cover' src={consultoria} alt="" />
          </div>

          <div className='flex flex-col items-center md:justify-center px-8 py-4 md:w-1/2'>
            <h2 className='text-3xl md:text-5xl font-bold pb-4'>Servicios de consultoría</h2>
            <p className='text-lg md:text-xl'>¡Potencia tu campaña política con nuestra consultoría especializada! Te brindamos estrategias efectivas para alcanzar tus objetivos y destacar en el ámbito político.</p>
            <a className='flex w-full items-center mt-4 font-bold md:text-xl' href="">Ver más <img className='ml-4 w-[2rem] transition duration-150 hover:scale-125' src={rightArrow} alt="" /></a>
          </div>
        </section>



        <section className='md:flex flex-row-reverse md:h-[40rem] lg:h-[30rem]'>
          <div className='flex justify-center md:w-1/2'>
            <img className='w-full object-cover' src={estudioDeMercado} alt="" />
          </div>

          <div className='flex flex-col items-center md:justify-center px-8 py-4 md:w-1/2'>
            <h2 className='text-3xl md:text-5xl font-bold pb-4'>Estudio de mercado</h2>
            <p className='text-lg md:text-xl'>Descubre el poder de los datos con nuestros servicios de estudios de mercado. Obtén información clave para tomar decisiones acertadas y destacar en tu sector empresarial.</p>
            <a className='flex w-full md:text-xl items-center mt-4 font-bold' href="">Estudios recientes <img className='ml-4 w-[2rem] transition duration-150 hover:scale-125' src={rightArrow} alt="" /></a>
          </div>
        </section>


        <section className='md:flex flex-row md:h-[40rem] lg:h-[30rem]'>
          <div className='flex justify-center md:w-1/2'>
            <img className='w-full object-cover' src={estrategiaPolitica} alt="" />
          </div>

          <div className='flex flex-col items-center md:justify-center px-8 py-4 md:w-1/2'>
            <h2 className='text-3xl md:text-5xl font-bold pb-4'>Estrategia política</h2>
            <p className='text-lg md:text-xl'>Convierte tu visión en realidad con nuestra estrategia política. Diseñamos estrategias innovadoras y efectivas para impulsar tu campaña y alcanzar el éxito en el ámbito político."</p>
            <a className='flex w-full items-center mt-4 font-bold md:text-xl' href="">Ver más <img className='ml-4 w-[2rem] transition duration-150 hover:scale-125' src={rightArrow} alt="" /></a>
          </div>
        </section>

      </div>

      <Footer />






    </>
  )
}

export default HomePage
