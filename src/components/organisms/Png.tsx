import React from 'react'
type Props = {
  img: string
}

const Png = ({ img }: Props) => {
  return (
    <picture>
      <source media="(min-width: 2200px)" srcSet={`/nuevas/${img}.png`} />
      <source media="(min-width: 1024px)" srcSet={`/nuevas/large/${img}-l.png`} />
      <source media="(max-width: 100px)" srcSet={`/nuevas/small/${img}-s.png`} />
      <img src={`/nuevas/large/${img}-l.jpg`} alt={img} />
    </picture>
  )
}

export default Png
