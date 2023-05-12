import React from 'react'
import { tequilas } from '../../../utilities/tequilas'

const Tequilas = () => {
  return (
    <article className='Tequilas'>
      <h2>VERSIONS</h2>
      <div className="Tequilas__grid">
        {
          tequilas.map((tequila,i) =>(
            <div key={tequila.name} className='tequila-item' data-aos="flip-left" data-aos-delay={`${i}*150`}>
              <img src={`/img/history/${tequila.img}.png`} alt={tequila.name} />
              <div className="tequila-data">
                <h3>{tequila.name}</h3>
                {
                  tequila.time?(<p>{tequila.time}</p>):null
                }
                <p>{tequila.description} Alc. Vol.</p>
                <div className="tequia-description">
                  <p><span>Color: </span>{tequila.color}</p>
                  <p><span>Aroma: </span>{tequila.aroma}</p>
                  <p><span>notes: </span>{tequila.notes}</p>
                  <p><span>texture: </span>{tequila.texture}</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </article>
  )
}

export default Tequilas
