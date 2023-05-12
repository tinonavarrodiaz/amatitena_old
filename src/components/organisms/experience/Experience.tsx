import React from 'react'
import { Link } from 'react-router-dom'
const path = '/img/experience'
const Experience = () => {
  return (
    <article className='Origin Experience dgrid col-2'>
      <div className="col-left img-container-color olive">
        <img src={`${path}/hornos.jpg`} alt="hornos" />
        <p>Explore every step of the making of our tequila.
</p>
        <Link to={`/process`} className='btn btn-read '>KNOW OUR PROCESS</Link>
      </div>
      <div className="col-right">
        <h2>BE PART OF THIS BEAUTIFUL EXPERIENCE</h2>
        <p>
          We invite you to an exceptional tour of our agave fields and distillery, where you can get up close with our artisanal process of producing 100% blue agave tequila. Learn about the harvest, cooking, milling, and distillation of Amatiteña.
        </p>
      </div>
    </article>
  )
}

export default Experience
