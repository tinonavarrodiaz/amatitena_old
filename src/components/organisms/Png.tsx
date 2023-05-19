import React from 'react'
type Props = {
  img: string
}

const Png = ({ img }: Props) => {
  return (
    <picture>
      <source media="(min-width: 2200px)" srcSet={`/botellas/${img}@4x.png`} />
      <source media="(min-width: 1024px)" srcSet={`/botellas/${img}@3x.png`} />
      <source media="(min-width: 100px)" srcSet={`/botellas/${img}@2x.png`} />
      <img src={`/botellas/${img}@3x.png`} alt={img} />
    </picture>
  )
}

export default Png
