import React, { useEffect } from 'react'
import Top from '../organisms/WhereToBuy/Top'
import Find from '../organisms/WhereToBuy/Find'

const WhereToBuy = () => {
  useEffect(() => {
    const dmain: any = document.querySelector('body')
    dmain.classList.add('page-home');
    const logo: any = document.getElementById('logo')
    logo.src = "/logo.svg"
    console.log(logo)
    window.scrollTo(0, 0)
  }, [])
  return (
    <section className='WhereToBuy'>
      <Top />
      <Find />
      <img src="img/agave-rigth.png" alt="Agave" className='Agave-float Agave-float-rigth' />
    </section>
  )
}

export default WhereToBuy
