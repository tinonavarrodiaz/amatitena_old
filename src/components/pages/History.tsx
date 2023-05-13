import React, { useEffect } from 'react'
import Origin from '../organisms/history/Origin'
import Tequilas from '../organisms/history/Tequilas'
import Production from '../organisms/history/Production'
import Banner from '../organisms/Banner'

const History = () => {
  useEffect(() => {
    const dmain: any = document.querySelector('main')
    dmain.classList.remove('page-home');
    const logo: any = document.getElementById('logo')
    logo.src = "/logo-light.svg"
    console.log(logo)
  }, [])
  return (
    <section className="page History">
      <Origin />
      <Tequilas />
      <Production />
      <Banner img='banner' />
      <img src="img/agave-left1.png" alt="Agave" className='Agave-float Agave-float-left' />
      <img src="img/agave-rigth1.png" alt="Agave" className='Agave-float Agave-float-rigth' />
    </section>
  )
}

export default History
