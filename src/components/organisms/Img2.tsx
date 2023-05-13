import React from 'react'
type Props = {
  img: string
}

const Img2 = ({ img }: Props) => {
  return (
    <div data-aos="zoom-in" >
      <picture >
        <source media="(min-width: 2200px)" srcSet={`/nuevas/${img}.jpg`} />
        <source media="(min-width: 1024px)" srcSet={`/nuevas/large/${img}-l.jpg`} />
        {/* <source media="(min-width: 1px)" srcSet={`/nuevas/large/${img}-l.jpg`} /> */}
        <source media="(min-width: 100px)" srcSet={`/nuevas/samall/${img}-s.jpg`} />
        <img src={`/nuevas/large/${img}-l.png`} alt={img} />
      </picture>
    </div>
  )
}

export default Img2
