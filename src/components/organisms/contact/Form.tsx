import React from 'react'

const Form = () => {
  return (
    <article className='Book Contact__form'>
      <h2 data-aos="zoom-in">CONTACT FORM</h2>
      <div className="Book__grid" data-aos="fade-up-left">
        <form action="" >
          <p>SHARE YOUR OPINION</p>
          <div className="Book__form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="Book__form-group">
            <label htmlFor="email">email:</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className="Book__form-group Book__texarea">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message"></textarea>
          </div>
          <button type='submit'>SEND</button>
        </form>
        <div className="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14916.70901482999!2d-103.7212171!3d20.8245476!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8426170064c89abf%3A0x77a460703f145d41!2sAmatite%C3%B1a%20garden!5e0!3m2!1ses-419!2smx!4v1681581509180!5m2!1ses-419!2smx" width="600" height="450" style={{border:'none'}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>

    </article>
  )
}

export default Form
