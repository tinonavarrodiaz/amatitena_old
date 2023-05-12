import React from 'react'
import { Link } from 'react-router-dom'
const path = '/img/contact'
const Top = () => {
  return (
    <article className='Origin Contact__top dgrid col-2'>
      <div className="col-left img-container-color brown" data-aos="fade-right">
        <img src={`${path}/botella.jpg`} alt="botella" />
        <p>The goal is to be all over the world,<br/> sharing our traditions.</p>
        <Link to={`/where-to-buy`} className='btn btn-read '>KNOW WHERE TO BUY</Link>
      </div>
      <div className="col-right" data-aos="fade-left">
        <h2>WE WANT TO HEAR FROM YOU</h2>
        <p>
          Your feedback and comments are very important to us. We want to know what you think of our tequila and we will be more than happy to answer any questions you may have. Our customers are the ones who make Amatiteña a reality.
        </p>
      </div>
    </article>
  )
}

export default Top
