import React from 'react'
import Banner from '../Banner'
const path = '/img/pointsales'
const Top = () => {
  return (
    <article className='WhereToBuy__top'>
      <h2 data-aos="zoom-in">SAVOR A <br />TRUE TEQUILA</h2>
      <Banner img='banner1' />
      <div className="WhereToBuy__copy" data-aos="zoom-in">
        <img src={`${path}/agave.svg`} alt="" />
        <p>Discover our various points of sale where you can<br />find different versions of Amatiteña. Enjoy the<br />distinct flavor of our premium tequila and immerse<br />yourself in the exceptional taste of Jalisco, México.</p>
      </div>
    </article>
  )
}

export default Top
