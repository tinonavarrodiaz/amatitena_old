import React from 'react'
const path = '/img/experience'
const Production = () => {
  return (
    <article className='Tour__production'>
      <h2 data-aos="zoom-in">Production Process</h2>
      <img src={`${path}/agave.jpg`} alt="Agave" data-aos="zoom-in"/>
      <p data-aos="zoom-out">
        During our tour, you will discover the manufacturing<br/> process of Amatiteña Tequila. 100% artisanal, with a<br/> tour of our factory and our agave fields.
      </p>
      <p data-aos="zoom-out">
        $500 MXN per person<br />
        Duration: 1 hour<br />
        Prior reservation required.
      </p>
    </article>
  )
}

export default Production
