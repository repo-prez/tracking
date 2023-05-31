import React from 'react'
import Header from '../../components/Header'
import logo from '../../assets/header/Logok.webp'
import logoPositivo from '../../assets/header/LogoPositivo.webp'
import { Bar } from 'react-chartjs-2';

import Barras1 from '../../assets/resultados/Barras1.webp'
import Barras2 from '../../assets/resultados/Barras2.webp'
import Barras3 from '../../assets/resultados/Barras3.webp'

import BarrasH1 from '../../assets/resultados/BarrasHori1.webp'
import BarrasH2 from '../../assets/resultados/BarrasHori2.webp'

import BarrasHFinal1 from '../../assets/resultados/BannerHFinal1.webp'
import BarrasHFinal2 from '../../assets/resultados/BannerHFinal2.webp'

import BarrasFinal from '../../assets/resultados/barrasFinal1.webp'

import Pie1 from '../../assets/resultados/pie1.webp'
import Pie2 from '../../assets/resultados/pie2.webp'
import Candidato1 from '../../assets/resultados/candidatoPie1.webp'
import Candidato2 from '../../assets/resultados/candidatoPie2.webp'
import Candidato3 from '../../assets/resultados/candidatoPie3.webp'
import Candidato4 from '../../assets/resultados/candidatoPie4.webp'


import PieSolo1 from '../../assets/resultados/pieSolo1.webp'

function ResultadosPage() {
    
  
    
    
    return (
        <>
            <Header />
            <div className='w-full flex '>
                
                <div className="w-1/2 flex flex-col items-start justify-center lg:pl-10 xl:pl-20">
                    <p className='lg:text-[4rem] xl:text-[5.5rem] font-light'>RESULTADOS</p>
                    <p className='lg:text-[4rem] xl:text-[5.5rem] font-extrabold'>ESTUDIO DE</p>
                    <p className='lg:text-[4rem] xl:text-[5.5rem] font-extrabold'>OPINIÓN</p>
                    <p className='lg:pt-20'>Abril 2023</p>
                </div>
                <div className="flex w-1/2 h-[300px] justify-end items-end lg:h-[689px] xl:h-[1017px] ">
                    <div className="animate__animated animate__fadeInUp animate__delay-2s mr-4 bg-colunma1 w-[20px] h-[80%] 
                    xl:w-[140px] xl:mr-20 lg:w-[140px] lg:mr-20"></div>
                    <div className="animate__animated animate__fadeInUp animate__delay-2s mr-4 bg-colunma2 w-[20px] h-[50%]
                    xl:w-[140px] xl:mr-20 lg:w-[140px] lg:mr-20"></div>
                    <div className="animate__animated animate__fadeInUp animate__delay-2s mr-4 bg-colunma3 w-[20px] h-[90%]
                    xl:w-[140px] xl:mr-20 lg:w-[140px] lg:mr-20"></div>
                    <div className="animate__animated animate__fadeInUp animate__delay-2s mr-4 bg-colunma4 w-[20px] h-[70%]
                    xl:w-[140px] xl:mr-0 lg:w-[140px] lg:mr-0"></div>
                </div>
            </div>
            <div className='relative w-full flex pt-6 xl:w-screen'>
                <div className="w-1/2 flex flex-col items-start justify-start lg:pl-5 xl:pl-20">
                    <p className='lg:text-[2.7rem] xl:text-[3.6rem] font-extrabold'>FICHA TÉCNICA Y METODOLOGÍA</p>
                    <div className='flex flex-col  justify-center text-start w-full  lg:pl-40 lg:pr-40 lg:pt-20 lg:pb-20 
                    xl:pt-44 xl:pb-44'>

                        <p className='lg:text-[1.8rem] tracking-wider xl:text-[2.2rem] font text-title1 italic'>POBLACIÓN DE ESTUDIO</p>
                        <p className='lg:text-[1rem] xl:text-[1.2rem]  pb-10'>Estudio de opinión realizado a ecuatorianos de mayor
                            de edad en las ciudades de: Guayaquil, Quito, Cuenca,
                            Manta, Portoviejo</p>

                        <p className='lg:text-[1.8rem] tracking-wider xl:text-[2.2rem] font text-title1 italic'>MUESTRA DE ESTUDIO</p>
                        <p className='lg:text-[1rem] xl:text-[1.2rem] pb-10'><span className='font-bold'>1.400</span> OBSERVACIONES</p>

                        <p className='lg:text-[1.8rem] tracking-wider xl:text-[2.2rem] font text-title1 italic'>FECHA DE LEVANTAMIENTO</p>
                        <p className='lg:text-[1rem] xl:text-[1.2rem] pb-10'>E25 al 29 de abril del 2023</p>

                        <p className='lg:text-[1.8rem] tracking-wider xl:text-[2.2rem] font text-title1 italic'>RANGOS DE CONFIANZA</p>
                        <p className='lg:text-[1rem] xl:text-[1.2rem]'>Confiabilidad: <span className='font-bold'>95%</span></p>
                        <p className='lg:text-[1rem] xl:text-[1.2rem] pb-10'>Margen de error: <span className='font-bold'>5%</span></p>

                    </div>
                </div>
                <div className="flex flex-col w-1/2 h-[300px] justify-start items-end lg:h-[740px] xl:h-screen ">
                    <div className="animate__animated animate__fadeInRight animate__delay-2s mr-4 bg-colunma2 w-[40%] h-[100px] 
                     xl:mb-24 lg:mr-0 lg:mb-16 xl:h-[145px]"></div>
                    <div className="animate__animated animate__fadeInRight animate__delay-2s mr-4 bg-colunma1 w-[80%] h-[100px]
                     xl:mb-24 lg:mr-0 lg:mb-16 xl:h-[145px]"></div>
                    <div className="animate__animated animate__fadeInRight animate__delay-2s mr-4 bg-colunma4 w-[100%] h-[100px]
                     xl:mb-24 lg:mr-0 lg:mb-16 xl:h-[145px]"></div>
                    <div className="animate__animated animate__fadeInRight animate__delay-2s mr-4 bg-colunma3 w-[70%] h-[100px]
                     xl:mb-24 lg:mr-0 lg:mb-16 xl:h-[145px]"></div>
                    <div className="animate__animated animate__fadeInRight animate__delay-2s mr-4 bg-colunma1 w-[90%] h-[100px]
                     xl:mr-0 lg:mr-0 xl:h-[145px]"></div>
                </div>
                <img className='absolute bottom-0 right-0 pr-10 lg:pb-3 w-[150px]' src={logoPositivo} />
            </div>


            <div className='relative w-full flex pt-6 xl:w-screen'>
                <div className="w-1/2 flex flex-col items-center justify-end lg:pl-5 xl:pl-20 h-screen">

                    <p className='lg:text-[3rem] tracking-wider xl:text-[4rem] font-bold italic'>PERCEPCIÓN SOBRE</p>

                    <p className='lg:text-[4rem] tracking-wider xl:text-[6rem] font-bold italic'>SITUACIÓN</p>

                    <p className='lg:text-[5rem] tracking-wider xl:text-[7rem] font-bold italic'>POLÍTICA</p>

                </div>
                <div className="flex flex-col w-1/2 h-[300px] justify-start items-end lg:h-[740px] xl:h-screen ">
                    <div className="animate__animated animate__fadeInRight animate__delay-2s mr-4 bg-colunma2 w-[40%] h-[100px] 
                     xl:mb-24 lg:mr-0 lg:mb-16 xl:h-[145px]"></div>
                    <div className="animate__animated animate__fadeInRight animate__delay-2s mr-4 bg-colunma1 w-[80%] h-[100px]
                     xl:mb-24 lg:mr-0 lg:mb-16 xl:h-[145px]"></div>
                    <div className="animate__animated animate__fadeInRight animate__delay-2s mr-4 bg-colunma4 w-[100%] h-[100px]
                     xl:mb-24 lg:mr-0 lg:mb-16 xl:h-[145px]"></div>
                    <div className="animate__animated animate__fadeInRight animate__delay-2s mr-4 bg-colunma3 w-[70%] h-[100px]
                     xl:mb-24 lg:mr-0 lg:mb-16 xl:h-[145px]"></div>
                    <div className="animate__animated animate__fadeInRight animate__delay-2s mr-4 bg-colunma1 w-[90%] h-[100px]
                     xl:mr-0 lg:mr-0 xl:h-[145px]"></div>
                </div>
                <img className='absolute bottom-0 right-0 pr-10 lg:pb-3 w-[150px]' src={logoPositivo} />
            </div>


            <div className='relative w-full flex pt-6 xl:w-screen'>
                <div className="flex flex-col w-[30%] h-[300px] justify-start items-start lg:h-[740px] xl:h-screen ">
                    <div className="animate__animated animate__fadeInLeft animate__delay-2s mr-4 bg-fila1 w-[40%] h-[100px] 
                     xl:mb-24 lg:mr-0 lg:mb-16 xl:h-[145px]"></div>
                    <div className="animate__animated animate__fadeInLeft animate__delay-2s mr-4 bg-fila2 w-[80%] h-[100px]
                     xl:mb-24 lg:mr-0 lg:mb-16 xl:h-[145px]"></div>
                    <div className="animate__animated animate__fadeInLeft animate__delay-2s mr-4 bg-fila3 w-[100%] h-[100px]
                     xl:mb-24 lg:mr-0 lg:mb-16 xl:h-[145px]"></div>
                    <div className="animate__animated animate__fadeInLeft animate__delay-2s mr-4 bg-fila4 w-[70%] h-[100px]
                     xl:mb-24 lg:mr-0 lg:mb-16 xl:h-[145px]"></div>
                    <div className="animate__animated animate__fadeInLeft animate__delay-2s mr-4 bg-fila5 w-[90%] h-[100px]
                     xl:mr-0 lg:mr-0 xl:h-[145px]"></div>
                </div>
                <div className="w-[70%] flex flex-col items-center justify-start lg:pl-5 xl:pl-20 h-screen">
                    <div className='flex flex-col w-[80%]  h-[80%] mt-[7%] items-center'>
                        <p className='lg:text-[2rem] xl:text-[3rem] '>Valoración del Gobierno</p>
                        <div>
                            <img className='xl:w-[4000px]' src={Barras1}/>
                        </div>
                        <div className='border-black border-b-[1px] border-t-[1px]'>
                            <p className='lg:text-[2rem] xl:text-[3rem]'>Disminuye a <span className='text-title2 font-bold'>15%</span> la aceptación del Gobierno actual.</p>
                        </div>
                    </div>
                </div>
                <p className='absolute top-0 right-0 lg:pt-6 lg:pr-3 lg:text-[1.4rem]'> PERCEPCIÓN SOBRE SITUACIÓN POLÍTICA</p>
                <p className='absolute bottom-0 left-0 lg:pb-3 lg:pl-3 text-title1'> 4. TRACKING MENSUAL - ABRIL 2023</p>
                <img className='absolute bottom-0 right-0 pr-10 lg:pb-3 w-[150px]' src={logo} />
            </div>


            <div className='relative w-full flex pt-6 xl:w-screen'>
                <div className="flex flex-col w-[30%] h-[300px] justify-start items-start lg:h-[740px] xl:h-screen ">
                    <div className="animate__animated animate__fadeInLeft animate__delay-2s mr-4 bg-fila1 w-[40%] h-[100px] 
                     xl:mb-24 lg:mr-0 lg:mb-16 xl:h-[145px]"></div>
                    <div className="animate__animated animate__fadeInLeft animate__delay-2s mr-4 bg-fila2 w-[80%] h-[100px]
                     xl:mb-24 lg:mr-0 lg:mb-16 xl:h-[145px]"></div>
                    <div className="animate__animated animate__fadeInLeft animate__delay-2s mr-4 bg-fila3 w-[100%] h-[100px]
                     xl:mb-24 lg:mr-0 lg:mb-16 xl:h-[145px]"></div>
                    <div className="animate__animated animate__fadeInLeft animate__delay-2s mr-4 bg-fila4 w-[70%] h-[100px]
                     xl:mb-24 lg:mr-0 lg:mb-16 xl:h-[145px]"></div>
                    <div className="animate__animated animate__fadeInLeft animate__delay-2s mr-4 bg-fila5 w-[90%] h-[100px]
                     xl:mr-0 lg:mr-0 xl:h-[145px]"></div>
                </div>
                <div className="w-[70%] flex flex-col items-center justify-start lg:pl-5 xl:pl-20 h-screen">
                    <div className='flex flex-col w-[80%]  h-[80%] mt-[7%] items-center'>
                        <p className='lg:text-[2rem] xl:text-[3rem] '>Valoración del Presidente Guillermo Lasso</p>
                        <div>
                            <img className='xl:w-[4000px]' src={Barras2}/>
                        </div>
                        <div className='border-black border-b-[1px] border-t-[1px]'>
                            <p className='lg:text-[2rem] xl:text-[3rem]'>La aprobación de Guillermo Lasso disminuye a <span className='text-title2 font-bold'>14%</span>.</p>
                        </div>
                    </div>
                </div>
                <p className='absolute top-0 right-0 lg:pt-6 lg:pr-3 lg:text-[1.4rem]'> PERCEPCIÓN SOBRE SITUACIÓN POLÍTICA</p>
                <p className='absolute bottom-0 left-0 lg:pb-3 lg:pl-3 text-title1'> 5. TRACKING MENSUAL - ABRIL 2023</p>
                <img className='absolute bottom-0 right-0 pr-10 lg:pb-3 w-[150px]' src={logo} />
            </div>


            <div className='relative w-full flex pt-6 xl:w-screen'>
                <div className="flex flex-col w-[30%] h-[300px] justify-start items-start lg:h-[740px] xl:h-screen ">
                    <div className="animate__animated animate__fadeInLeft animate__delay-2s mr-4 bg-fila1 w-[40%] h-[100px] 
                     xl:mb-24 lg:mr-0 lg:mb-16 xl:h-[145px]"></div>
                    <div className="animate__animated animate__fadeInLeft animate__delay-2s mr-4 bg-fila2 w-[80%] h-[100px]
                     xl:mb-24 lg:mr-0 lg:mb-16 xl:h-[145px]"></div>
                    <div className="animate__animated animate__fadeInLeft animate__delay-2s mr-4 bg-fila3 w-[100%] h-[100px]
                     xl:mb-24 lg:mr-0 lg:mb-16 xl:h-[145px]"></div>
                    <div className="animate__animated animate__fadeInLeft animate__delay-2s mr-4 bg-fila4 w-[70%] h-[100px]
                     xl:mb-24 lg:mr-0 lg:mb-16 xl:h-[145px]"></div>
                    <div className="animate__animated animate__fadeInLeft animate__delay-2s mr-4 bg-fila5 w-[90%] h-[100px]
                     xl:mr-0 lg:mr-0 xl:h-[145px]"></div>
                </div>
                <div className="w-[70%] flex flex-col items-center justify-start lg:pl-5 xl:pl-20 h-screen">
                    <div className='flex flex-col w-[80%]  h-[80%] mt-[7%] items-center'>
                        <p className='lg:text-[2rem] xl:text-[3rem] '>Valoración de la Asamblea Nacional</p>
                        <div>
                            <img className='xl:w-[4000px]' src={Barras3}/>
                        </div>
                        <div className='border-black border-b-[1px] border-t-[1px]'>
                            <p className='lg:text-[2rem] xl:text-[3rem]'>La aceptación de la Asamblea Nacional es del <span className='text-title2 font-bold'>15%</span> de la población.</p>
                        </div>
                    </div>
                </div>
                <p className='absolute top-0 right-0 lg:pt-6 lg:pr-3 lg:text-[1.4rem]'> PERCEPCIÓN SOBRE SITUACIÓN POLÍTICA</p>
                <p className='absolute bottom-0 left-0 lg:pb-3 lg:pl-3 text-title1'> 6. TRACKING MENSUAL - ABRIL 2023</p>
                <img className='absolute bottom-0 right-0 pr-10 lg:pb-3 w-[150px]' src={logo} />
            </div>

            <div className='relative w-full flex pt-6 xl:w-screen'>
                <div className="flex flex-col w-[30%] h-[300px] justify-start items-start lg:h-[740px] xl:h-screen ">
                    <div className="animate__animated animate__fadeInLeft animate__delay-2s mr-4 bg-fila1 w-[40%] h-[100px] 
                     xl:mb-24 lg:mr-0 lg:mb-16 xl:h-[145px]"></div>
                    <div className="animate__animated animate__fadeInLeft animate__delay-2s mr-4 bg-fila2 w-[80%] h-[100px]
                     xl:mb-24 lg:mr-0 lg:mb-16 xl:h-[145px]"></div>
                    <div className="animate__animated animate__fadeInLeft animate__delay-2s mr-4 bg-fila3 w-[100%] h-[100px]
                     xl:mb-24 lg:mr-0 lg:mb-16 xl:h-[145px]"></div>
                    <div className="animate__animated animate__fadeInLeft animate__delay-2s mr-4 bg-fila4 w-[70%] h-[100px]
                     xl:mb-24 lg:mr-0 lg:mb-16 xl:h-[145px]"></div>
                    <div className="animate__animated animate__fadeInLeft animate__delay-2s mr-4 bg-fila5 w-[90%] h-[100px]
                     xl:mr-0 lg:mr-0 xl:h-[145px]"></div>
                </div>
                <div className="w-[70%] flex flex-col items-center justify-start lg:pl-5 xl:pl-20 h-screen">
                    <div className='flex flex-row w-[100%]  h-[100%] mt-[7%] items-cente'>
                        <div className=' '>
                            <p className='lg:text-[2rem] xl:text-[3rem] '>Usted quisiera que el presidente Lasso:</p>
                            <div>
                                <img className='xl:w-[2500px] xl:mr-52e border-r-[1px] border-black' src={Pie1}/>
                            </div>
                        </div>
                        <div>
                            <p className='lg:text-[2rem] xl:text-[3rem] '>En caso de que llamen a eleccionres, ¿Qué prefiere?</p>
                            <div>
                                <img className='xl:w-[4000px]' src={Pie2}/>
                            </div>
                        </div>
                    </div>
                </div>
                <p className='absolute top-0 right-0 lg:pt-6 lg:pr-3 lg:text-[1.4rem]'> PERCEPCIÓN SOBRE SITUACIÓN POLÍTICA</p>
                <p className='absolute bottom-0 left-0 lg:pb-3 lg:pl-3 text-title1'> 7. TRACKING MENSUAL - ABRIL 2023</p>
                <img className='absolute bottom-0 right-0 pr-10 lg:pb-3 w-[150px]' src={logo} />
            </div>



            <div className='relative w-full flex pt-6 xl:w-screen'>
                <div className="flex flex-col w-[30%] h-[300px] justify-start items-start lg:h-[740px] xl:h-screen ">
                    <div className="animate__animated animate__fadeInLeft animate__delay-2s mr-4 bg-fila1 w-[40%] h-[100px] 
                     xl:mb-24 lg:mr-0 lg:mb-16 xl:h-[145px]"></div>
                    <div className="animate__animated animate__fadeInLeft animate__delay-2s mr-4 bg-fila2 w-[80%] h-[100px]
                     xl:mb-24 lg:mr-0 lg:mb-16 xl:h-[145px]"></div>
                    <div className="animate__animated animate__fadeInLeft animate__delay-2s mr-4 bg-fila3 w-[100%] h-[100px]
                     xl:mb-24 lg:mr-0 lg:mb-16 xl:h-[145px]"></div>
                    <div className="animate__animated animate__fadeInLeft animate__delay-2s mr-4 bg-fila4 w-[70%] h-[100px]
                     xl:mb-24 lg:mr-0 lg:mb-16 xl:h-[145px]"></div>
                    <div className="animate__animated animate__fadeInLeft animate__delay-2s mr-4 bg-fila5 w-[90%] h-[100px]
                     xl:mr-0 lg:mr-0 xl:h-[145px]"></div>
                </div>
                <div className="w-[70%] flex flex-col items-center justify-start lg:pl-5 xl:pl-20 h-screen">
                    <div className='flex flex-row w-[100%]  h-[100%] mt-[7%] items-cente'>
                        <div className=' '>
                            <p className='lg:text-[2rem] xl:text-[3rem] '>¿Quién es la mejor opción para enfrentarse al correismo en las próximas elección?</p>
                            <div>
                                <img className='xl:w-[2500px] xl:mr-52e border-r-[1px] border-black' src={BarrasH1}/>
                            </div>
                        </div>
                    </div>
                </div>
                <p className='absolute top-0 right-0 lg:pt-6 lg:pr-3 lg:text-[1.4rem]'> PERCEPCIÓN SOBRE SITUACIÓN POLÍTICA</p>
                <p className='absolute bottom-0 left-0 lg:pb-3 lg:pl-3 text-title1'> 8. TRACKING MENSUAL - ABRIL 2023</p>
                <img className='absolute bottom-0 right-0 pr-10 lg:pb-3 w-[150px]' src={logo} />
            </div>


            <div className='relative w-full flex pt-6 xl:w-screen'>
                <div className="w-1/2 flex flex-col items-center justify-end lg:pl-5 xl:pl-20 h-screen">

                    <p className='lg:text-[3rem] tracking-wider xl:text-[5rem] font-bold italic'>PERCEPCIÓN SOBRE</p>

                    <p className='lg:text-[3rem] tracking-wider xl:text-[5rem] font-bold italic'>SITUACIÓN</p>

                    <p className='lg:text-[4rem] tracking-wider xl:text-[7rem] font-bold italic'>ECONÓMICA</p>

                    <p className='lg:text-[5rem] tracking-wider xl:text-[7rem] font-bold italic'>Y SOCIAL</p>

                </div>
                <div className="flex flex-col w-1/2 h-[300px] justify-start items-end lg:h-[740px] xl:h-screen ">
                    <div className="animate__animated animate__fadeInRight animate__delay-2s mr-4 bg-colunma2 w-[40%] h-[100px] 
                     xl:mb-24 lg:mr-0 lg:mb-16 xl:h-[145px]"></div>
                    <div className="animate__animated animate__fadeInRight animate__delay-2s mr-4 bg-colunma1 w-[80%] h-[100px]
                     xl:mb-24 lg:mr-0 lg:mb-16 xl:h-[145px]"></div>
                    <div className="animate__animated animate__fadeInRight animate__delay-2s mr-4 bg-colunma4 w-[100%] h-[100px]
                     xl:mb-24 lg:mr-0 lg:mb-16 xl:h-[145px]"></div>
                    <div className="animate__animated animate__fadeInRight animate__delay-2s mr-4 bg-colunma3 w-[70%] h-[100px]
                     xl:mb-24 lg:mr-0 lg:mb-16 xl:h-[145px]"></div>
                    <div className="animate__animated animate__fadeInRight animate__delay-2s mr-4 bg-colunma1 w-[90%] h-[100px]
                     xl:mr-0 lg:mr-0 xl:h-[145px]"></div>
                </div>
                <img className='absolute bottom-0 right-0 pr-10 lg:pb-3 w-[150px]' src={logoPositivo} />
            </div>


            <div className='relative w-full flex pt-6 xl:w-screen'>
                <div className="flex flex-col w-[30%] h-[300px] justify-start items-start lg:h-[740px] xl:h-screen ">
                    <div className="animate__animated animate__fadeInLeft animate__delay-2s mr-4 bg-fila1 w-[40%] h-[100px] 
                     xl:mb-24 lg:mr-0 lg:mb-16 xl:h-[145px]"></div>
                    <div className="animate__animated animate__fadeInLeft animate__delay-2s mr-4 bg-fila2 w-[80%] h-[100px]
                     xl:mb-24 lg:mr-0 lg:mb-16 xl:h-[145px]"></div>
                    <div className="animate__animated animate__fadeInLeft animate__delay-2s mr-4 bg-fila3 w-[100%] h-[100px]
                     xl:mb-24 lg:mr-0 lg:mb-16 xl:h-[145px]"></div>
                    <div className="animate__animated animate__fadeInLeft animate__delay-2s mr-4 bg-fila4 w-[70%] h-[100px]
                     xl:mb-24 lg:mr-0 lg:mb-16 xl:h-[145px]"></div>
                    <div className="animate__animated animate__fadeInLeft animate__delay-2s mr-4 bg-fila5 w-[90%] h-[100px]
                     xl:mr-0 lg:mr-0 xl:h-[145px]"></div>
                </div>
                <div className="w-[70%] flex flex-col items-center justify-start lg:pl-5 xl:pl-20 h-screen">
                    <div className='flex flex-col w-[80%]  h-[80%] mt-[7%] items-center'>
                        <p className='lg:text-[2rem] xl:text-[3rem] '>La situación económica del país es:</p>
                        <div>
                            <img className='xl:w-[4000px]' src={Barras3}/>
                        </div>
                        <div className='border-black border-b-[1px] border-t-[1px]'>
                            <p className='lg:text-[2rem] xl:text-[3rem]'>Se mantiene por debajo del <span className='text-title2 font-bold'>15%</span> la percepción positiva sobre la situación económica del país.</p>
                        </div>
                    </div>
                </div>
                <p className='absolute top-0 right-0 lg:pt-6 lg:pr-3 lg:text-[1.4rem]'> PERCEPCIÓN SOBRE SITUACIÓN ECONÓMICA Y SOCIAL</p>
                <p className='absolute bottom-0 left-0 lg:pb-3 lg:pl-3 text-title1'> 10. TRACKING MENSUAL - ABRIL 2023</p>
                <img className='absolute bottom-0 right-0 pr-10 lg:pb-3 w-[150px]' src={logo} />
            </div>


            <div className='relative w-full flex pt-6 xl:w-screen'>
                <div className="flex flex-col w-[30%] h-[300px] justify-start items-start lg:h-[740px] xl:h-screen ">
                    <div className="animate__animated animate__fadeInLeft animate__delay-2s mr-4 bg-fila1 w-[40%] h-[100px] 
                     xl:mb-24 lg:mr-0 lg:mb-16 xl:h-[145px]"></div>
                    <div className="animate__animated animate__fadeInLeft animate__delay-2s mr-4 bg-fila2 w-[80%] h-[100px]
                     xl:mb-24 lg:mr-0 lg:mb-16 xl:h-[145px]"></div>
                    <div className="animate__animated animate__fadeInLeft animate__delay-2s mr-4 bg-fila3 w-[100%] h-[100px]
                     xl:mb-24 lg:mr-0 lg:mb-16 xl:h-[145px]"></div>
                    <div className="animate__animated animate__fadeInLeft animate__delay-2s mr-4 bg-fila4 w-[70%] h-[100px]
                     xl:mb-24 lg:mr-0 lg:mb-16 xl:h-[145px]"></div>
                    <div className="animate__animated animate__fadeInLeft animate__delay-2s mr-4 bg-fila5 w-[90%] h-[100px]
                     xl:mr-0 lg:mr-0 xl:h-[145px]"></div>
                </div>
                <div className="w-[70%] flex flex-col items-center justify-start lg:pl-5 xl:pl-20 h-screen">
                    <div className='flex flex-col w-[80%]  h-[80%] mt-[7%] items-center'>
                        <p className='lg:text-[1.5rem] lg:font-bold xl:text-[2rem] '>En el último año, ¿usted o algún familiar o amigo ha sufrido algún robo en su hogar o domicilio?</p>
                        <div>
                            <img className=' pb-4 xl:w-[600px]' src={PieSolo1}/>
                        </div>
                        <div className='border-black border-b-[1px] border-t-[1px]'>
                            <p className='lg:text-[2.4rem] xl:text-[3rem]'>En el último año, <span className='text-title2 font-bold'>4 de cada 10 ecuatorianos</span> han sufrido algún robo en su hogar.</p>
                        </div>
                    </div>
                </div>
                <p className='absolute top-0 right-0 lg:pt-6 lg:pr-3 lg:text-[1.4rem]'> PERCEPCIÓN SOBRE SITUACIÓN ECONÓMICA Y SOCIAL</p>
                <p className='absolute bottom-0 left-0 lg:pb-3 lg:pl-3 text-title1'> 11. TRACKING MENSUAL – ABRIL 2023</p>
                <img className='absolute bottom-0 right-0 pr-10 lg:pb-3 w-[150px]' src={logo} />
            </div>


            <div className='relative w-full flex pt-6 xl:w-screen'>
                <div className="w-1/2 flex flex-col items-center justify-end lg:pl-5 xl:pl-20 h-screen">

                    <p className='lg:text-[2rem] tracking-wider xl:text-[4rem] font-bold italic'>CONOCIMIENTO Y</p>
                    
                    <p className='lg:text-[2rem] tracking-wider xl:text-[4rem] font-bold italic'>VALORACIÓN</p>

                    <p className='lg:text-[3rem] tracking-wider xl:text-[5rem] font-bold italic'>DE ACTORES Y</p>

                    <p className='lg:text-[3rem] tracking-wider xl:text-[5rem] font-bold italic'>PARTIDOS POLÍTICOS</p>

                </div>
                <div className="flex flex-col w-1/2 h-[300px] justify-start items-end lg:h-[740px] xl:h-screen ">
                    <div className="animate__animated animate__fadeInRight animate__delay-2s mr-4 bg-colunma2 w-[40%] h-[100px] 
                     xl:mb-24 lg:mr-0 lg:mb-16 xl:h-[145px]"></div>
                    <div className="animate__animated animate__fadeInRight animate__delay-2s mr-4 bg-colunma1 w-[80%] h-[100px]
                     xl:mb-24 lg:mr-0 lg:mb-16 xl:h-[145px]"></div>
                    <div className="animate__animated animate__fadeInRight animate__delay-2s mr-4 bg-colunma4 w-[100%] h-[100px]
                     xl:mb-24 lg:mr-0 lg:mb-16 xl:h-[145px]"></div>
                    <div className="animate__animated animate__fadeInRight animate__delay-2s mr-4 bg-colunma3 w-[70%] h-[100px]
                     xl:mb-24 lg:mr-0 lg:mb-16 xl:h-[145px]"></div>
                    <div className="animate__animated animate__fadeInRight animate__delay-2s mr-4 bg-colunma1 w-[90%] h-[100px]
                     xl:mr-0 lg:mr-0 xl:h-[145px]"></div>
                </div>
                <img className='absolute bottom-0 right-0 pr-10 lg:pb-3 w-[150px]' src={logoPositivo} />
            </div>



            <div className='relative w-full flex pt-6 xl:w-screen'>
                <div className="flex flex-col w-[30%] h-[300px] justify-start items-start lg:h-[740px] xl:h-screen ">
                    <div className="animate__animated animate__fadeInLeft animate__delay-2s mr-4 bg-fila1 w-[40%] h-[100px] 
                     xl:mb-24 lg:mr-0 lg:mb-16 xl:h-[145px]"></div>
                    <div className="animate__animated animate__fadeInLeft animate__delay-2s mr-4 bg-fila2 w-[80%] h-[100px]
                     xl:mb-24 lg:mr-0 lg:mb-16 xl:h-[145px]"></div>
                    <div className="animate__animated animate__fadeInLeft animate__delay-2s mr-4 bg-fila3 w-[100%] h-[100px]
                     xl:mb-24 lg:mr-0 lg:mb-16 xl:h-[145px]"></div>
                    <div className="animate__animated animate__fadeInLeft animate__delay-2s mr-4 bg-fila4 w-[70%] h-[100px]
                     xl:mb-24 lg:mr-0 lg:mb-16 xl:h-[145px]"></div>
                    <div className="animate__animated animate__fadeInLeft animate__delay-2s mr-4 bg-fila5 w-[90%] h-[100px]
                     xl:mr-0 lg:mr-0 xl:h-[145px]"></div>
                </div>
                <div className="w-[70%] flex flex-col items-center justify-start lg:pl-5 xl:pl-20 h-screen">
                    <div className='flex flex-row w-[100%]  h-[100%] mt-[7%] items-cente'>
                        <div className=' '>
                            <p className='lg:text-[2rem] xl:text-[2.5rem] text-center '>Conocimiento sobre los siguientes partidos políticos:</p>
                            <p className='lg:text-[2rem] xl:text-[2.5rem] text-center text-blue-400 '>SI CONOCE</p>
                            <div>
                                <img className='xl:w-[2500px] xl:mr-52e border-r-[1px] border-black' src={BarrasH2}/>
                            </div>
                        </div>
                    </div>
                </div>
                <p className='absolute top-0 right-0 lg:pt-6 lg:pr-3 lg:text-[1.4rem]'> CONOCIMIENTO Y VALORACIÓN DE ACTORES Y PARTIDOS POLÍTICOS</p>
                <p className='absolute bottom-0 left-0 lg:pb-3 lg:pl-3 text-title1'> 13. TRACKING MENSUAL – ABRIL 2023</p>
                <img className='absolute bottom-0 right-0 pr-10 lg:pb-3 w-[150px]' src={logo} />
            </div>


            <div className='relative w-full flex pt-6 xl:w-screen'>
                <div className="flex flex-col w-[30%] h-[300px] justify-start items-start lg:h-[740px] xl:h-screen ">
                    <div className="animate__animated animate__fadeInLeft animate__delay-2s mr-4 bg-fila1 w-[40%] h-[100px] 
                     xl:mb-24 lg:mr-0 lg:mb-16 xl:h-[145px]"></div>
                    <div className="animate__animated animate__fadeInLeft animate__delay-2s mr-4 bg-fila2 w-[80%] h-[100px]
                     xl:mb-24 lg:mr-0 lg:mb-16 xl:h-[145px]"></div>
                    <div className="animate__animated animate__fadeInLeft animate__delay-2s mr-4 bg-fila3 w-[100%] h-[100px]
                     xl:mb-24 lg:mr-0 lg:mb-16 xl:h-[145px]"></div>
                    <div className="animate__animated animate__fadeInLeft animate__delay-2s mr-4 bg-fila4 w-[70%] h-[100px]
                     xl:mb-24 lg:mr-0 lg:mb-16 xl:h-[145px]"></div>
                    <div className="animate__animated animate__fadeInLeft animate__delay-2s mr-4 bg-fila5 w-[90%] h-[100px]
                     xl:mr-0 lg:mr-0 xl:h-[145px]"></div>
                </div>
                <div className="w-[70%] flex flex-col items-center justify-start lg:pl-5 xl:pl-20 h-screen">
                        <p className='pt-[3%] lg:text-[2rem] xl:text-[3rem] '>Si es que las votaciones fueran en este momento, por qué candidato votaría?</p>
                    <div className='flex flex-row w-[100%]  h-[100%] mt-[2%] items-cente'>
                        <div className=' '>
                            <p className='lg:text-[2rem] xl:text-[3rem] text-center'>Otto Sonnenholzner</p>
                            <div>
                                <img className='xl:w-[4000px] xl:mr-52e border-r-[1px] border-b-neutral-600ack' src={Candidato1}/>
                            </div>
                        </div>
                        <div>
                            <p className='lg:text-[2rem] xl:text-[3rem] text-center'>Xavier Hervas</p>
                            <div>
                                <img className='xl:w-[4000px]' src={Candidato2}/>
                            </div>
                        </div>
                    </div>
                </div>
                <p className='absolute top-0 right-0 lg:pt-6 lg:pr-3 lg:text-[1.4rem]'> INTENCIÓN DE VOTO</p>
                <p className='absolute bottom-0 left-0 lg:pb-3 lg:pl-3 text-title1'>14. TRACKING MENSUAL – ABRIL 2023</p>
                <img className='absolute bottom-0 right-0 pr-10 lg:pb-3 w-[150px]' src={logo} />
            </div>


            <div className='relative w-full flex pt-6 xl:w-screen'>
                <div className="flex flex-col w-[30%] h-[300px] justify-start items-start lg:h-[740px] xl:h-screen ">
                    <div className="animate__animated animate__fadeInLeft animate__delay-2s mr-4 bg-fila1 w-[40%] h-[100px] 
                     xl:mb-24 lg:mr-0 lg:mb-16 xl:h-[145px]"></div>
                    <div className="animate__animated animate__fadeInLeft animate__delay-2s mr-4 bg-fila2 w-[80%] h-[100px]
                     xl:mb-24 lg:mr-0 lg:mb-16 xl:h-[145px]"></div>
                    <div className="animate__animated animate__fadeInLeft animate__delay-2s mr-4 bg-fila3 w-[100%] h-[100px]
                     xl:mb-24 lg:mr-0 lg:mb-16 xl:h-[145px]"></div>
                    <div className="animate__animated animate__fadeInLeft animate__delay-2s mr-4 bg-fila4 w-[70%] h-[100px]
                     xl:mb-24 lg:mr-0 lg:mb-16 xl:h-[145px]"></div>
                    <div className="animate__animated animate__fadeInLeft animate__delay-2s mr-4 bg-fila5 w-[90%] h-[100px]
                     xl:mr-0 lg:mr-0 xl:h-[145px]"></div>
                </div>
                <div className="w-[70%] flex flex-col items-center justify-start lg:pl-5 xl:pl-20 h-screen">
                        <p className='pt-[3%] lg:text-[2rem] xl:text-[3rem] '>Si es que las votaciones fueran en este momento, por qué candidato votaría?</p>
                    <div className='flex flex-row w-[100%]  h-[100%] mt-[2%] items-cente'>
                        <div className=' '>
                            <p className='lg:text-[2rem] xl:text-[3rem] text-center'>Pedro Freile</p>
                            <div>
                                <img className='xl:w-[4000px] xl:mr-52e border-r-[1px] border-b-neutral-600ack' src={Candidato3}/>
                            </div>
                        </div>
                        <div>
                            <p className='lg:text-[2rem] xl:text-[3rem] text-center'>Candidato de Correa</p>
                            <div className='xl:pt-9 lg:pt-6'>
                                <img className='lg:w-[550px] xl:w-[4600px] ' src={Candidato4}/>
                            </div>
                        </div>
                    </div>
                </div>
                <p className='absolute top-0 right-0 lg:pt-6 lg:pr-3 lg:text-[1.4rem]'> INTENCIÓN DE VOTO</p>
                <p className='absolute bottom-0 left-0 lg:pb-3 lg:pl-3 text-title1'> 15. TRACKING MENSUAL – ABRIL 2023</p>
                <img className='absolute bottom-0 right-0 pr-10 lg:pb-3 w-[150px]' src={logo} />
            </div>

            
            <div className='relative w-full flex pt-6 xl:w-screen'>
                <div className="flex flex-col w-[30%] h-[300px] justify-start items-start lg:h-[740px] xl:h-screen ">
                    <div className="animate__animated animate__fadeInLeft animate__delay-2s mr-4 bg-fila1 w-[40%] h-[100px] 
                     xl:mb-24 lg:mr-0 lg:mb-16 xl:h-[145px]"></div>
                    <div className="animate__animated animate__fadeInLeft animate__delay-2s mr-4 bg-fila2 w-[80%] h-[100px]
                     xl:mb-24 lg:mr-0 lg:mb-16 xl:h-[145px]"></div>
                    <div className="animate__animated animate__fadeInLeft animate__delay-2s mr-4 bg-fila3 w-[100%] h-[100px]
                     xl:mb-24 lg:mr-0 lg:mb-16 xl:h-[145px]"></div>
                    <div className="animate__animated animate__fadeInLeft animate__delay-2s mr-4 bg-fila4 w-[70%] h-[100px]
                     xl:mb-24 lg:mr-0 lg:mb-16 xl:h-[145px]"></div>
                    <div className="animate__animated animate__fadeInLeft animate__delay-2s mr-4 bg-fila5 w-[90%] h-[100px]
                     xl:mr-0 lg:mr-0 xl:h-[145px]"></div>
                </div>
                <div className="w-[70%] flex flex-col items-center justify-start lg:pl-5 xl:pl-20 h-screen">
                    <div className='flex flex-row w-[100%]  h-[100%] mt-[7%] items-cente'>
                        <div className=' '>
                            <p className='lg:text-[1.5rem] xl:text-[2rem] text-center '>Si es que las votaciones fueran en este momento, por qué candidato votaría?</p>
                            <p className='lg:text-[1.5rem] xl:text-[2rem] text-center text-blue-400 '>SI VOTARÍA O CREO QUE VOTARÍA</p>
                            <div>
                                <img className='xl:w-[2500px] xl:mr-52e border-r-[1px] border-black' src={BarrasFinal}/>
                            </div>
                        </div>
                    </div>
                </div>
                <p className='absolute top-0 right-0 lg:pt-6 lg:pr-3 lg:text-[1.4rem]'> PERCEPCIÓN SOBRE SITUACIÓN POLÍTICA</p>
                <p className='absolute bottom-0 left-0 lg:pb-3 lg:pl-3 text-title1'> 8. TRACKING MENSUAL - ABRIL 2023</p>
                <img className='absolute bottom-0 right-0 pr-10 lg:pb-3 w-[150px]' src={logo} />
            </div>


            <div className='relative w-full flex pt-6 xl:w-screen'>
                <div className="flex flex-col w-[30%] h-[300px] justify-start items-start lg:h-[740px] xl:h-screen ">
                    <div className="animate__animated animate__fadeInLeft animate__delay-2s mr-4 bg-fila1 w-[40%] h-[100px] 
                     xl:mb-24 lg:mr-0 lg:mb-16 xl:h-[145px]"></div>
                    <div className="animate__animated animate__fadeInLeft animate__delay-2s mr-4 bg-fila2 w-[80%] h-[100px]
                     xl:mb-24 lg:mr-0 lg:mb-16 xl:h-[145px]"></div>
                    <div className="animate__animated animate__fadeInLeft animate__delay-2s mr-4 bg-fila3 w-[100%] h-[100px]
                     xl:mb-24 lg:mr-0 lg:mb-16 xl:h-[145px]"></div>
                    <div className="animate__animated animate__fadeInLeft animate__delay-2s mr-4 bg-fila4 w-[70%] h-[100px]
                     xl:mb-24 lg:mr-0 lg:mb-16 xl:h-[145px]"></div>
                    <div className="animate__animated animate__fadeInLeft animate__delay-2s mr-4 bg-fila5 w-[90%] h-[100px]
                     xl:mr-0 lg:mr-0 xl:h-[145px]"></div>
                </div>
                <div className="w-[70%] flex flex-col items-center justify-start lg:pl-5 xl:pl-20 h-screen">
                    <div className='flex flex-row w-[100%]  h-[100%] mt-[7%] items-cente'>
                        <div className=' '>
                            <p className='lg:text-[1.5rem] xl:text-[2rem] text-center '>Si es que las elecciones fueran en este momento, de los siguientes candidatos, ¿por quién votaría?</p>
                            <p className='lg:text-[1.5rem] xl:text-[2rem] text-center text-blue-400 '>ESCENARIO 1</p>
                            <div>
                                <img className='xl:w-[2500px] xl:mr-52e border-r-[1px] border-black' src={BarrasHFinal1}/>
                            </div>
                        </div>
                    </div>
                </div>
                <p className='absolute top-0 right-0 lg:pt-6 lg:pr-3 lg:text-[1.4rem]'> INTENCIÓN DE VOTO</p>
                <p className='absolute bottom-0 left-0 lg:pb-3 lg:pl-3 text-title1'> 17. TRACKING MENSUAL – ABRIL 2023</p>
                <img className='absolute bottom-0 right-0 pr-10 lg:pb-3 w-[150px]' src={logo} />
            </div>


            <div className='relative w-full flex pt-6 xl:w-screen'>
                <div className="flex flex-col w-[30%] h-[300px] justify-start items-start lg:h-[740px] xl:h-screen ">
                    <div className="animate__animated animate__fadeInLeft animate__delay-2s mr-4 bg-fila1 w-[40%] h-[100px] 
                     xl:mb-24 lg:mr-0 lg:mb-16 xl:h-[145px]"></div>
                    <div className="animate__animated animate__fadeInLeft animate__delay-2s mr-4 bg-fila2 w-[80%] h-[100px]
                     xl:mb-24 lg:mr-0 lg:mb-16 xl:h-[145px]"></div>
                    <div className="animate__animated animate__fadeInLeft animate__delay-2s mr-4 bg-fila3 w-[100%] h-[100px]
                     xl:mb-24 lg:mr-0 lg:mb-16 xl:h-[145px]"></div>
                    <div className="animate__animated animate__fadeInLeft animate__delay-2s mr-4 bg-fila4 w-[70%] h-[100px]
                     xl:mb-24 lg:mr-0 lg:mb-16 xl:h-[145px]"></div>
                    <div className="animate__animated animate__fadeInLeft animate__delay-2s mr-4 bg-fila5 w-[90%] h-[100px]
                     xl:mr-0 lg:mr-0 xl:h-[145px]"></div>
                </div>
                <div className="w-[70%] flex flex-col items-center justify-start lg:pl-5 xl:pl-20 h-screen">
                    <div className='flex flex-row w-[100%]  h-[100%] mt-[7%] items-cente'>
                        <div className=' '>
                            <p className='lg:text-[1.5rem] xl:text-[2rem] text-center '>Si es que las elecciones fueran en este momento, de los siguientes candidatos, ¿por quién votaría?</p>
                            <p className='lg:text-[1.5rem] xl:text-[2rem] text-center text-blue-400 '>ESCENARIO 2</p>
                            <div>
                                <img className='xl:w-[2500px] xl:mr-52e border-r-[1px] border-black' src={BarrasHFinal2}/>
                            </div>
                        </div>
                    </div>
                </div>
                <p className='absolute top-0 right-0 lg:pt-6 lg:pr-3 lg:text-[1.4rem]'> INTENCIÓN DE VOTO</p>
                <p className='absolute bottom-0 left-0 lg:pb-3 lg:pl-3 text-title1'> 18. TRACKING MENSUAL – ABRIL 2023</p>
                <img className='absolute bottom-0 right-0 pr-10 lg:pb-3 w-[150px]' src={logo} />
            </div>
        </>
    )
}

export default ResultadosPage