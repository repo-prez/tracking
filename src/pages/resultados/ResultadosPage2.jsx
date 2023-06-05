import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

import fichaTecnicas from '../../assets/resultados/fichaTecnicas.webp'
import titulo2 from '../../assets/resultados/titulo2.webp'
import titulo3 from '../../assets/resultados/titulo3.webp'
import titulo4 from '../../assets/resultados/titulo4.webp'
import opinion from '../../assets/resultados/opinion.webp'

import Barras1 from '../../assets/resultados/Barras1.webp'
import Barras2 from '../../assets/resultados/Barras2.webp'
import Barras3 from '../../assets/resultados/Barras3.webp'
import Barras4 from '../../assets/resultados/Barras4.webp'



import BarrasHFinal1 from '../../assets/resultados/BannerHFinal1.webp'
import BarrasHFinal2 from '../../assets/resultados/BannerHFinal2.webp'

import Pastel1 from '../../assets/resultados/pie1.webp'
import Pastel2 from '../../assets/resultados/pie2.webp'

import BarrasH1 from '../../assets/resultados/BarrasHori1.webp'
import BarrasH2 from '../../assets/resultados/BarrasHori2.webp'

import BarrasFinal from '../../assets/resultados/barrasFinal1.webp'

import Candidato1 from '../../assets/resultados/candidatoPie1.webp'
import Candidato2 from '../../assets/resultados/candidatoPie2.webp'
import Candidato3 from '../../assets/resultados/candidatoPie3.webp'
import Candidato4 from '../../assets/resultados/candidatoPie4.webp'




import PieSolo1 from '../../assets/resultados/pieSolo1.webp'

const ResultadosPage2 = () => {
  return (
    <>
      <Header />

      <div className='px-8 flex flex-col'>

        <section className=' flex flex-col lg:flex-row justify-center items-center'>

          <div className='my-10 lg:w-1/3 text-center'>
            <h1>
              <p className='text-4xl'>Resultados</p>
              <p className='text-4xl font-bold'>Estudios de</p>
              <p className='text-4xl font-bold'>Opinión</p>
            </h1>
            <p>Abril 2023</p>
          </div>

          <img className='lg:w-2/3' src={opinion} alt="" />

        </section>


        <section className=' flex flex-col  justify-center items-center '>
          <h2 className='text-2xl uppercase my-8'>Ficha Técnica y metodología</h2>

          <div className='md:flex'>

            <div className='md:w-1/2'>

              <div className='flex flex-col my-5'>
                <p className='text-primary font-bold'>POBLACIÓN DE ESTUDIO</p>
                <p>Estudio de opinión realizado a ecuatorianos de mayor de edad en las ciudades de: Guayaquil, Quito, Cuenca, Manta, Portoviejo</p>
              </div>

              <div className='flex flex-col my-5'>
                <p className='text-primary font-bold'>MUESTRA DE ESTUDIO</p>
                <p> <span className='font-bold'>1400</span> OBSERVACIONES</p>
              </div>

              <div className='flex flex-col my-5'>
                <p className='text-primary font-bold'>FECHA DE LEVANTAMIENTO</p>
                <p>25 al 29 de abril del 2023</p>
              </div>

              <div className='flex flex-col my-5'>
                <p className='text-primary font-bold'>RANGOS DE CONFIANZA</p>
                <p>Confiabilidad: <span className='font-bold'>95%</span></p>
                <p>Margen de error: <span className='font-bold'>5%</span></p>
              </div>

            </div>

            <img className='md:w-1/2' src={fichaTecnicas} alt="" />


          </div>

        </section>



        <section className=' flex flex-col md:flex-row-reverse justify-center items-center md:my-20'>
          <h1 className='mb-10 md:w-1/2 md:pl-10'>
            <p className='text-4xl'>PERCEPCIÓN SOBRE</p>
            <p className='text-4xl font-bold'>SITUACIÓN</p>
            <p className='text-4xl font-bold'>POLÍTICA</p>
          </h1>

          <img className='md:w-1/2' src={titulo2} alt="" />
        </section>


        {/* Barras */}

        <section className='w-full flex flex-col items-center justify-center my-20'>
          <h3 className='text-2xl'>Valoración del Gobierno</h3>
          <img src={Barras1} alt="image" />
          <p className='border-t-[1px] border-b-[1px]'>Disminuye a <span className='font-bold'>15%</span> la aceptación del Gobierno actual. </p>
        </section>


        <section className='w-full flex flex-col items-center justify-center my-20'>
          <h3 className='text-2xl'>Valoración del Presidente Guillermo Lasso</h3>
          <img src={Barras2} alt="image" />
          <p className='border-t-[1px] border-b-[1px]'>La aprobación de Guillermo Lasso disminuye a <span className='font-bold'>14%.</span> </p>
        </section>


        <section className='w-full flex flex-col items-center justify-center my-20'>
          <h3 className='text-2xl'>Valoración de la Asamblea Nacional</h3>
          <img src={Barras3} alt="image" />
          <p className='border-t-[1px] border-b-[1px]'>La aceptación de la Asamblea Nacional es del <span className='font-bold'>15%</span> de la población. </p>
        </section>


        {/* Pastel */}



        <div className='lg:flex items-start' >
          <section className='w-full flex flex-col items-center justify-center my-20 mx-10'>
            <h3 className='text-2xl' >Usted quisiera que el Presidente Lasso:</h3>
            <img className='lg:w-8/12' src={Pastel1} alt="" />
          </section>

          <section className='w-full flex flex-col items-center justify-center my-20  mx-10'>
            <h3 className='text-2xl' >En caso de que llamen a elecciones,
              ¿Qué prefiere?</h3>
            <img src={Pastel2} alt="" />
          </section>
        </div>


        <section className='w-full flex flex-col items-center justify-center my-20'>
          <h3 className='text-2xl mb-6' >¿Quién es la mejor opción para enfrentarse al correismo en las próximas elecciones?</h3>
          <img src={BarrasH1} alt="image" />
        </section>




        <section className='flex flex-col md:flex-row justify-center items-center'>
          <h1 className='md:w-1/2'>
            <p className='text-4xl'>PERCEPCIÓN SOBRE</p>
            <p className='text-4xl font-bold'>SITUACIÓN</p>
            <p className='text-4xl font-bold'>ECONÓMICA</p>
            <p className='text-4xl font-bold'>Y SOCIAL</p>
          </h1>
          <img className='md:w-1/2' src={titulo3} alt="" />
        </section>



        <section className='w-full flex flex-col items-center justify-center my-20'>
          <h3 className='text-2xl'>La situación económica del país es:</h3>
          <img src={Barras4} alt="image" />
          <p className='border-t-[1px] border-b-[1px]'>Se mantiene por debajo del <span className='font-bold'>15%</span> la percepción positiva sobre la situación económica del país. </p>
        </section>


        <section className='w-full flex flex-col items-center justify-center my-20'>
          <h3 className='text-2xl'>En el último año, ¿usted o algún familiar o amigo ha sufrido algún robo en su hogar o domicilio? </h3>
          <img src={PieSolo1} alt="image" />
          <p className='border-t-[1px] border-b-[1px]'>En el último año, <span className='font-bold'>4 de cada 10 ecuatorianos</span> han sufrido algún robo en su hogar. </p>
        </section>


        <section className='flex justify-center md:flex-row items-center '>
          <h1 className='w-1/2' >
            <p className='text-4xl'>CONOCIMIENTO Y</p>
            <p className='text-4xl font-bold'>VALORACIÓN</p>
            <p className='text-4xl font-bold'>DE ACTORES</p>
            <p className='text-4xl font-bold'>Y PARTIDOS POLÍTICOS</p>
          </h1>
          <img className='w-1/2 bg-cyan-500 rounded-xl' src={titulo4} alt="" />
        </section>

        <section className='w-full flex flex-col items-center justify-center my-20'>
          <h3 className='text-2xl'>Conocimiento sobre los siguientes partidos políticos:  </h3>
          <p>SÍ CONOCE</p>
          <img src={BarrasH2} alt="image" />
        </section>


        <section className='w-full flex flex-col items-center justify-center my-20'>
          <h3 className='text-2xl mb-6' >¿Quién es la mejor opción para enfrentarse al correismo en las próximas elecciones?</h3>
          <img src={BarrasH1} alt="image" />
        </section>



        {/* Votaciones actuales */}
        <div >
          <h2 className='text-2xl'>Si es que las votaciones fueran en este momento, por qué candidato votaría?</h2>

          <div className='lg:flex'>
            <section className='w-full flex flex-col items-center justify-center mb-20 lg:px-5 lg:my-10' >
              <h3 className='text-lg lg:mb-4' >Otto Sonnenholzner</h3>
              <img src={Candidato1} alt="" />
            </section>

            <section className='w-full flex flex-col items-center justify-center mb-20 lg:px-5 lg:my-10'>
              <h3 className='text-lg lg:mb-4' >Xavier Hervas</h3>
              <img src={Candidato2} alt="" />
            </section>
          </div>
        </div>


        <div >
          <h2 className='text-2xl'>Si es que las votaciones fueran en este momento, por qué candidato votaría?</h2>

          <div className='lg:flex'>
            <section className='w-full flex flex-col items-center justify-center mb-20 lg:px-5 lg:my-10' >
              <h3 className='text-lg lg:mb-4' >Pedro Freile</h3>
              <img src={Candidato3} alt="" />
            </section>

            <section className='w-full flex flex-col items-center justify-center mb-20 lg:px-5 lg:my-10'>
              <h3 className='text-lg lg:mb-4' >Candidato de Correa</h3>
              <img src={Candidato4} alt="" />
            </section>
          </div>
        </div>

        <section className='w-full flex flex-col items-center justify-center my-20'>
          <h3 className='text-2xl mb-2'>Si es que las elecciones fueran en este momento, de los siguientes candidatos, ¿por quién votaría? </h3>
          <p className='my-2'>ESCENARIO 1</p>
          <img src={BarrasHFinal1} alt="image" />
        </section>


        <section className='w-full flex flex-col items-center justify-center my-20'>
          <h3 className='text-2xl mb-2'>Si es que las elecciones fueran en este momento, de los siguientes candidatos, ¿por quién votaría? </h3>
          <p className='my-2'>ESCENARIO 2</p>
          <img src={BarrasHFinal2} alt="image" />
        </section>

      </div>

      <Footer />

    </>
  )
}

export default ResultadosPage2