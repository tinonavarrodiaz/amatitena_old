import React from 'react'
import menu from '../../utilities/menu'
import { NavLink } from 'react-router-dom'
import Social from './Social'
import MenuAtom from '../atoms/Menu'
import Img from '../organisms/Img'
import Hamburgers from './Hamburguer'

type Props = {
  active: boolean
  nameClass: string
  navClass: string
  action: () => void
}

const Menu = ({ nameClass, navClass, active, action }: Props): JSX.Element => {
  return (
    <nav className={`${navClass} ${active ? 'is-active' : ''}`}>
      <div className="header-menu">
        <img src="/logo.svg" alt="" />
        <Hamburgers active={true} action={action} />

      </div>
      <MenuAtom nameClass='main-menu' active={active} action={action} />
      <Social nameClass='menu-social' />
    </nav>
  )
}

export default Menu
