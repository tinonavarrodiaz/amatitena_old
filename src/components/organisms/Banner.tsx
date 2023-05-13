import React from 'react'
type Props = {
  img: string
}

const Banner = ({ img }: Props) => {
  return (
    <article className='banner' data-aos='zoom-in-down'>
      <picture>
        <source media="(min-width: 2200px)" srcSet={`/nuevas/${img}.jpg`} />
        <source media="(min-width: 1024px)" srcSet={`/nuevas/large/${img}-l.jpg`} />
        <source media="(max-width: 100px)" srcSet={`/nuevas/small/${img}-s.jpg`} />
        <img src={`/nuevas/large/${img}-l.jpg`} alt="img" />
      </picture>
    </article>
  )
}

export default Banner
