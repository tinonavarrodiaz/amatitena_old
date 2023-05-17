import React, { useEffect } from 'react'
import Top from '../organisms/contact/Top'
import Form from '../organisms/contact/Form'

const Contact = () => {
  useEffect(() => {
    const dmain: any = document.querySelector('body')
    dmain.classList.remove('page-home');
    const logo: any = document.getElementById('logo')
    logo.src = "/logo-light.svg"
    console.log(logo)
  }, [])
  return (
    <section className='Contact'>
      <Top />
      <Form />
      <img src="img/agave-left.png" alt="Agave" className='Agave-float Agave-float-left' />
    </section>
  )
}

export default Contact
