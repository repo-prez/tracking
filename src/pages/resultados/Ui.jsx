import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

const Ui = () => {
  return (
    <div>
      <Header />

      <section className='bg-red-300 h-screen flex justify-center items-center text-5xl     delay-[300ms] duration-[600ms] taos:translate-y-[200px] taos:opacity-0'>
        <p>section1</p>
      </section>

      <section className='bg-cyan-200 h-screen flex justify-center items-center text-5xl   delay-[300ms] duration-[600ms] taos:translate-y-[200px] taos:opacity-0" data-taos-offset="300" '>
        <p>section2</p>
      </section>
      <Footer />
    </div>
  )
}

export default Ui