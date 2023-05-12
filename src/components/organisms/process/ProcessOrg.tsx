import React from 'react'
import { process } from '../../../utilities/process'

const ProcessOrg = () => {
  return (
    <article className='Process__process'>
      {
        process.map((item, index) => {
          return (
            <div className='Process__process-item' key={index} data-aos="fade-right" data-aos-delay={`${index}*200`} data-aos-offset="500">
              <div className="col-img">
                <img src={`/img/process/${item.img}`} alt={item.name} />
              </div>
              <div className="col-text">
                <h3>{item.name}</h3>
                <p className='Process__desciption'>{item.description}</p>
              </div>
            </div>
          )
        })
      }
    </article>
  )
}

export default ProcessOrg
