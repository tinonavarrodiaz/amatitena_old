import React from 'react'
import menu from '../../utilities/menu'
import { NavLink } from 'react-router-dom'

type Props = {
  active: boolean
  nameClass:string
  action: () => void
}

const MenuAtom = ({nameClass, active, action}: Props): JSX.Element => {
  return (
      <ul className={`${nameClass} `}>
        {
          menu.map((item:any) => (
            <li onClick={action} key={item.title}>
              <NavLink to={item.link} onClick={action}>{item.title}</NavLink>
            </li>
          ))
        }
      </ul>
  )
}

export default MenuAtom
