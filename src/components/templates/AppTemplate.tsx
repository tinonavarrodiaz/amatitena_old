//@ts-nocheck
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import { useEffect } from "react";
// @ts-ignore
import AOS from 'aos';

const AppTemplate = () => {
  useEffect(() => {
    // AOS.init({
    //   easing: 'ease-out-back',
    //   duration: 1600,
    //   startEvent: 'DOMContentLoaded',
    //   useClassNames: true,
    //   once: true,
    // });
    AOS.init({
      easing: 'ease-out-back',
      duration: 1250,
      startEvent: 'DOMContentLoaded',
      useClassNames: true,
      // offset: 250,
      // once: true,
    });
    // const colLeftHight = document.querySelector('.img-container-color').clientHeight;
    const colLeftHight = document.querySelector('.col-left').clientHeight;
    const logo = document.querySelector('.Header__logo img')
    const Hamburger = document.querySelector('.hamburger')
    console.log(logo);
    // console.log(colLeftHight)
    window.addEventListener('scroll', ()=>{

      let scroll = window.scrollY;
      // console.log(scroll, colLeftHight);
      if(!document.body.classList.contains('page-home')){
      if (scroll>0){
        // alert("Scroll");
        document.querySelector('header').classList.add('header-background')
        Hamburger.classList.add('scroll')
        logo.src='/logo.svg'
      }else{
        document.querySelector('header').classList.remove('header-background')
        Hamburger.classList.remove('scroll')
        logo.src='/logo-light.svg'

      }
    }
    })
  }, []);
  return (
    <>
      <Header />
      {/* <main> */}
        <Outlet />
      {/* </main> */}
      <Footer />
    </>
  )
}

export default AppTemplate
