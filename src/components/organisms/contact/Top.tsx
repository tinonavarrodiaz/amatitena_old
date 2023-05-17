import React from 'react'
import { Link } from 'react-router-dom'
import Img from '../Img'
const path = '/img/contact'
const Top = () => {
  return (
    <article className='Origin Contact__top dgrid col-2'>
      <div className="col-left img-container-color brown" data-aos="fade-right">
        <Img img="botella" />
        <p>The goal is to be all over the world,<br /> sharing our traditions.</p>
        <Link to={`/where-to-buy`} className='btn btn-read '>KNOW WHERE TO BUY</Link>
      </div>
      <div className="col-right" data-aos="fade-left">
        <h2>WE WANT<br /> TO HEAR<br /> FROM YOU</h2>
        <p>
          Your feedback and comments are<br /> very important to us. We want to<br /> know what you think of our<br /> tequila and we will be more than<br /> happy to answer any questions<br /> you may have. Our customers are<br /> the ones who make Amatiteña<br /> a reality.
        </p>
      </div>
    </article>
  )
}

export default Top
