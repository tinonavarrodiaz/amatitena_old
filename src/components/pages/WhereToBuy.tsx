import React, { useEffect } from 'react'
import Top from '../organisms/WhereToBuy/Top'
import Find from '../organisms/WhereToBuy/Find'

const WhereToBuy = () => {
  useEffect(()=>{
    const dmain:any = document.querySelector('main')
    dmain.classList.add('page-home');
    const logo:any = document.getElementById('logo')
    logo.src="/logo.svg"
    console.log(logo)
  },[])
  return (
    <section className='WhereToBuy'>
      <Top/>
      <Find/>
      <img src="img/agave-rigth.png" alt="Agave" className='Agave-float Agave-float-rigth'/>
    </section>
  )
}

export default WhereToBuy
