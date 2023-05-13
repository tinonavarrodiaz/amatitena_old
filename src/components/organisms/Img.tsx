import React from 'react'
type Props = {
  img: string
}

const Img = ({ img }: Props) => {
  return (
    <picture>
      <source media="(min-width: 2200px)" srcSet={`/nuevas/${img}.jpg`} />
      <source media="(min-width: 1024px)" srcSet={`/nuevas/large/${img}-l.jpg`} />
      <source media="(min-width: 100px)" srcSet={`/nuevas/samall/${img}-s.jpg`} />
      <img src={`/nuevas/large/${img}-l.jpg`} alt={img} />
    </picture>
  )
}

export default Img
