import React from 'react'
type Props = {
  img: string
}

const Banner = ({img}:Props) => {
  return (
    <article className='banner' data-aos='zoom-in-down'>
      <img src={img} alt="" />
    </article>
  )
}

export default Banner
