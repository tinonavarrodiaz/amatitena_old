import React from 'react'
import Img2 from '../Img2'
const path = '/img/experience'
const Special = () => {
  return (
    <article className='Tour__production Special'>
      <h2 data-aos="zoom-in">SPECIAL TOUR WITH FOOD</h2>
      {/* <img src={`${path}/sign.jpg`} alt="sign" data-aos="zoom-in"/> */}
      <Img2 img="sign" />
      <p data-aos="zoom-out">
        Experience a complete and different tour, explore our<br /> agave fields, enjoy some delicious classic-style tacos<br /> with us, and end with an Educational Tasting of 4<br /> glasses.
      </p>
      <p data-aos="zoom-out">
        $800 MXN per person<br />
        Duration: 3 hour<br />
        Prior reservation required.
      </p>
    </article>
  )
}

export default Special
