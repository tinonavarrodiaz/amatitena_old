import React, { useEffect } from 'react'
import Experience from "../organisms/experience/Experience"

const ExperiencePage = () => {
  useEffect(() => {
    const dmain: any = document.querySelector('body')
    dmain.classList.remove('page-home');
    const logo: any = document.getElementById('logo')
    logo.src = "/logo-light.svg"
    console.log(logo)
  }, [])
  return (
    <section className="page Experience">
      <Experience />
    </section>
  )
}

export default ExperiencePage
