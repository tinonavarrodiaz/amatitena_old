import React, { useEffect } from 'react'
import Banner from '../organisms/Banner'
import Copy from '../organisms/process/Copy'
import ProcessOrg from '../organisms/process/ProcessOrg'

const Process = () => {
  useEffect(()=>{
    const dmain:any = document.querySelector('main')
    dmain.classList.add('page-home');
    const logo:any = document.getElementById('logo')
    logo.src="/logo.svg"
    console.log(logo)
  },[])
  return (
    <section className="page Process">
      <h1 data-aos="zoom-in">PROCESS OF A TEQUILA <br/>100% BLUE AGAVE</h1>
      <Banner img='/img/process/banner.jpg' />
      <Copy/>
      <ProcessOrg />
      <div className="banner-sec" data-aos="flip-left">
        <img src="/img/process/banner2.jpg" alt="" />
      </div>
      <img src="img/agave-left.png" alt="Agave" className='Agave-float Agave-float-left'/>
      <img src="img/agave-rigth.png" alt="Agave" className='Agave-float Agave-float-rigth'/>
    </section>
  )
}

export default Process
