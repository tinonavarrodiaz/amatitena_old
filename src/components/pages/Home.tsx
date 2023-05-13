import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Selection from "../organisms/home/Selection";
import History from '../organisms/home/History';
import Banner from '../organisms/Banner';
import Bottom from '../organisms/home/Bottom';

const Home = () => {
  useEffect(() => {
    // @ts-ignore
    document.querySelector('main').classList.add('page-home');
    const logo: any = document.getElementById('logo')
    logo.src = "/logo.svg"
  }, [])
  return (
    <section className="page Home">
      <Selection />
      <History />
      <Banner img='banner0' />

      <Bottom />
      <img src="img/agave-left.png" alt="Agave" className='Agave-float Agave-float-left' />
      <img src="img/agave-rigth.png" alt="Agave" className='Agave-float Agave-float-rigth' />
    </section>
  )
};

export default Home;
