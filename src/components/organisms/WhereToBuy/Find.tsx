//@ts-nocheck
import React, { useEffect } from 'react'

const Find = () => {

  useEffect(() => {
    (function () {
      var a = document.createElement('script');
      a.type = 'text/javascript';
      a.async = !0;
      a.src = 'https://cdn.storepoint.co/api/v1/js/1614231f12fddd.js';
      var b = document.getElementsByTagName('script')[0];
      b.parentNode.insertBefore(a, b);
    })();
  }, []);

  return (
    <article className='WhereToBuy__find' data-aos="zoom-out">
      <div id="storepoint-container" data-map-id="162223c3f8333d"></div>
    </article>
  )
}

export default Find
