import React from 'react'
import { Link } from 'react-router-dom'
import Img from '../Img'
const path = '/img/experience'
const Experience = () => {
  return (
    <article className='Origin Experience dgrid col-2'>
      <div className="col-left mt-menor img-container-color olive" data-aos="fade-right">
        <Img img={`hornos`} />
        <p>Explore every step of the making of our tequila.
        </p>
        <Link to={`/process`} className='btn btn-read '>KNOW OUR PROCESS</Link>
      </div>
      <div className="col-right" data-aos="fade-left">
        <h2>BE PART OF<br /> THIS BEAUTIFUL<br /> EXPERIENCE</h2>
        <p className='text-text'>
          We invite you to an exceptional<br /> tour of our agave fields and<br /> distillery, where you can get up<br /> close with our artisanal process of<br /> producing 100% blue agave<br /> tequila. Learn about the harvest,<br /> cooking, milling, and distillation<br /> of Amatiteña.
        </p>
      </div>
    </article>
  )
}

export default Experience
