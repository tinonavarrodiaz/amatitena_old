import React from 'react'
import { Link } from 'react-router-dom'
import Img from '../Img'
// const path = '/img/history'
const Origin = () => {
  return (
    <article className='Origin dgrid col-2' >
      <div className="col-left img-container-color gray" data-aos="fade-right">
        {/* <img src={`${path}/girl.jpg`} alt="girl" /> */}
        <Img img="girl" />
        <p className='piedeimagen'>The name Amatiteña comes from the town of Amatitán, Jalisco:<br />
          the birthplace of tequila.</p>
        <Link to={`/tours`} className='btn btn-read '>KNOW OUR TOUR</Link>
      </div>
      <div className="col-right" data-aos="fade-left">
        <h2>A TEQUILA PROUD OF<br /> ITS ORIGIN</h2>
        <p>
          Our brand is inspired by<br /> Amatitán, which means "small<br /> town of Amates", where the<br /> cultivation of agave was adopted<br /> since the 18th century, due to its<br /> long tradition in the cultivation of<br /> blue agave for the production of<br /> the spirit drink that today is<br /> known as Tequila.
        </p>
      </div>
    </article>
  )
}

export default Origin
