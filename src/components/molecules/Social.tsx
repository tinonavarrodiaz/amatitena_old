import React from 'react'
import social from '../../utilities/social'
type Props = {
  nameClass:string
}
const Social = ({nameClass}: Props) => {
  return (
    <ul className={nameClass}>
      {
        social.map((item:any) =>(
          <li key={item.icon}>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <img src={`/img/social/${item.icon}.svg`} alt={item.icon} />
            </a>
          </li>
        ))
      }
    </ul>
  )
}

export default Social
