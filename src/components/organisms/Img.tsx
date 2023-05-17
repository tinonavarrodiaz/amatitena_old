import React from 'react'
type Props = {
  img: string
}

const Img = ({ img }: Props) => {
  return (
    <picture>
      <source srcSet={`/opti/${img}.webp`} type='image/webp' />
      <source srcSet={`/opti/${img}.jpg`} />
      <img src={`/opti${img}@1920.jpg`} alt={img} />
    </picture>
  )
}

export default Img
