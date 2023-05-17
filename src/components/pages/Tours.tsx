import React, { useEffect } from 'react'
import Experience from '../organisms/tour/Experience'
import Production from '../organisms/tour/Production'
import Special from '../organisms/tour/Special'
import Book from '../organisms/tour/Book'

const Tours = () => {

  useEffect(() => {
    const dmain: any = document.querySelector('body')
    dmain.classList.remove('page-home');
    const logo: any = document.getElementById('logo')
    logo.src = "/logo-light.svg"
    console.log(logo)
  }, [])

  return (
    <section className='Tour'>
      <Experience />
      <Production />
      <Special />
      <Book />
      <p className='disclaimer'>Disclaimer: We will contact you to verify availability and confirm your visit on the chosen date and time.<br /> It's important to pre-book in advance, 2 days prior to your visit. This pre-booking does not guarantee a tour until we confirm through the indicated means.</p>
      <img src="img/agave-left1.png" alt="Agave" className='Agave-float Agave-float-left' />
      <img src="img/agave-rigth1.png" alt="Agave" className='Agave-float Agave-float-rigth' />
    </section>
  )
}

export default Tours
