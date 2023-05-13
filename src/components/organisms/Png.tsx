import React from 'react'
type Props = {
  img: string
}

const Png = ({ img }: Props) => {
  return (
    <picture>
      <source media="(min-width: 2200px)" srcSet={`/nuevas/${img}.png`} />
      <source media="(min-width: 1024px)" srcSet={`/nuevas/large/${img}-l.png`} />
      <source media="(min-width: 100px)" srcSet={`/nuevas/samall/${img}-s.png`} />
      <img src={`/nuevas/samall/${img}-s.png`} alt={img} />
    </picture>
  )
}

export default Png
