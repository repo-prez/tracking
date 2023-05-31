import React from 'react'
import Header from '../../components/Header'
import logo from '../../assets/header/Logok.webp'
import logoPositivo from '../../assets/header/LogoPositivo.webp'
import { Bar } from 'react-chartjs-2';
import Barras1 from '../../assets/resultados/Barras1.webp'



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
        </>
    )
}

export default ResultadosPage