import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

const Ui = () => {
  return (
    <div>
      <Header />

      <section className='bg-red-300 h-screen flex justify-center items-center text-5xl '>
        <p>section1</p>
      </section>

      <section className='bg-cyan-200 h-screen flex justify-center items-center text-5xl'>
        <p>section2</p>
      </section>
      <Footer />
    </div>
  )
}

export default Ui