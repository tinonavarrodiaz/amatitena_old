import React from 'react'
import { items } from "../../../utilities/itemsHome";
import { Link } from 'react-router-dom';
const Items = () => {
  return (
    <div className="Home-item">
      {
        items.map((item,i) =>(
          <div className="Home-item__grid" key={item.title} data-aos='fade-right' data-aos-delay={`${i}*150`}>
            <img src={item.img} alt="Bottle" className='Home-item__img'/>
            <div className="Home-item__text"  >
                <h2 className='Home-item__title'>{item.title}</h2>
                <p className='Home-item__description'>{item.description}</p>
                {
                  item.signature?
                  (
                    <img src={item.signature} alt="signature" className='Home-item__signature'/>

                  ): (<Link to={`/${item.link}`} className='btn btn-read'>READ MORE</Link>)
                }

              </div>
          </div>
        ))
      }
    </div>
  )
}

export default Items

/*
<div key={item.title}>
            <div className="Home-item__grid" key={item.title}>
              <img src={item.img} alt="Bottle" />
              <div className="Home-item__text">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                {
                  item.signature?
                  (
                    <div className="Home-item__signature">
                      <img src={item.signature} alt="signature" />
                    </div>
                  ): null
                }
                <Link to={`/${item.link}`} className='btn btn-read'>READ MORE</Link>

              </div>
            </div>
            {
              !item.signature?
              (
                <hr/>
              ): null
            }
          </div>
*/
