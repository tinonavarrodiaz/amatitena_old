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
      offset: 250,
      // once: true,
    });
  }, []);
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default AppTemplate
