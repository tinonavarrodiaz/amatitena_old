import React from 'react'
type Props = {
  img: string
}

const Banner = ({ img }: Props) => {
  return (
    <article className='banner' data-aos='zoom-in-down'>
      <picture>
        <source media="(min-width: 1921px)" srcSet={`/opti/${img}.webp`} type="image/webp" />
        <source media="(min-width: 1921px)" srcSet={`/opti/${img}.jpg`} />
        <source media="(max-width: 1920px)" srcSet={`/opti/${img}@1920.webp`} />
        <source media="(max-width: 1920px)" srcSet={`/opti/${img}@1920.jpg`} type="image/webp" />
        <img src={`/opti/${img}.jpg`} alt="img" />
      </picture>
    </article>
  )
}

export default Banner
