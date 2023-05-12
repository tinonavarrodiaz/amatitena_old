import React from 'react'
import { Link } from 'react-router-dom'
const path = '/img/history'
const Origin = () => {
  return (
    <article className='Origin dgrid col-2' >
      <div className="col-left img-container-color gray" data-aos="fade-right">
        <img src={`${path}/girl.jpg`} alt="girl" />
        <p>The name Amatiteña comes from the town of Amatitán, Jalisco:<br/>
the birthplace of tequila.</p>
        <Link to={`/tours`} className='btn btn-read '>KNOW OUR TOUR</Link>
      </div>
      <div className="col-right" data-aos="fade-left">
        <h2>A TEQUILA PROUD OF<br/> ITS ORIGIN</h2>
        <p>
          Our brand is inspired by Amatitán, which means "small town of Amates", where the cultivation of agave was adopted since the 18th century, due to its long tradition in the cultivation of blue agave for the production of the spirit drink that today is known as Tequila.
        </p>
      </div>
    </article>
  )
}

export default Origin
