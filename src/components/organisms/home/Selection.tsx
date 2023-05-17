import React from 'react';
import Img from '../../organisms/Img'
const Selection = () => {
  return (
    <article className="Selection">
      <div className="Selection__grid dgrid">
        <div className="col-left" data-aos='fade-right'>
          <h1 >
            SELECTION, QUALITY <br /> & EXCLUSIVITY
          </h1>
          <h3>are the key to Amatiteña.</h3>
          <p className='sligan'>TEQUILA 100% AGAVE AZUL</p>
          <span className="button-like">UNIQUE IN ITS CLASS</span>
        </div>
        <div className="col-right" data-aos='fade-left'>
          <Img img="jimador" />
        </div>
      </div>

    </article>
  );
};

export default Selection;
