import React from 'react'
const path = '/img/experience'
const Book = () => {
  return (
    <article className='Book' data-aos="zoom-in">
      <p>BOOK YOUR VISIT</p>
      <div className="Book__grid">
        <form action="">
          <div className="Book__form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="Book__form-group">
            <label htmlFor="whatsapp">whatsapp:</label>
            <input type="text" name="whatsapp" id="whatsapp" />
          </div>
          <div className="Book__form-group">
            <label htmlFor="email">email:</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className="Book__form-group">
            <label htmlFor="people">number of people:</label>
            <input type="number" name="people" id="people" />
          </div>
          <div className="Book__form-group">
            <label htmlFor="language">language:</label>
            <input type="text" name="language" id="language" />
          </div>
          <div className="Book__form-group">
            <label htmlFor="date">date and time de attendance:</label>
            <input type="text" name="date" id="date" />
          </div>
          <div className="Book__form-group Book__texarea">
            <label htmlFor="info">ADITIONAL INFORMATION:</label>
            <textarea name="info" id="info"></textarea>
          </div>
          <button type='submit'>SEND</button>
        </form>
        <img src={`/img/home/distiller.svg`} className="distiller" alt="distiller" />
      </div>

    </article>
  )
}

export default Book
