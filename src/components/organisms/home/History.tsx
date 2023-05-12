import React from 'react'
import { Link } from 'react-router-dom'
import Items from '../../molecules/home/Items'

const History = () => {
  return (
    <article className='distinctive-history'>
      <img src="/img/home/distiller.svg" alt="distiller" className='img-destillery'  data-aos='zoom-in'/>
      <p className='distinctive-history__text'  data-aos='zoom-in'>A truly artisanal work, produced with tradition.<br/> From the tahona to your home table, enjoying<br/> Amatitena goes beyond the palate. It's about<br/>understanding our history, processes, and<br/> appreciating our roots.</p>
      <Items/>
    </article>
  )
}

export default History
