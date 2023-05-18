// @ts-nocheck
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Menu from '../molecules/Menu';
import Hamburgers from '../molecules/Hamburguer';

function Header() {
  const [active, setActive] = useState(false);
  const ToggleMenuFunction = () => {
    !active ? setActive(true) : setActive(false);
  };
  const menuHidden = () => {
    setActive(false)
  }
  useEffect(() => {
    if (active) {
      document.body.style.overflowY = "hidden";
      document.querySelector('main').classList.add('hidden')
      document.documentElement.classList.add('hidden')
      document.body.classList.add('hidden')
    }
    else {
      document.body.style.overflowY = "auto";
      document.querySelector('main').classList.remove('hidden')
      document.documentElement.classList.remove('hidden')
      document.body.classList.remove('hidden')
    }
  })
  return (
    <>
      <header className={`main-header ${active ? 'is-active' : ''}`}>
        <Link to={'/'} className={`Header__logo ${active ? 'is-active' : ''}`} onClick={menuHidden}>
          <img src={'/logo.svg'} alt="vite" id="logo" />
        </Link>
        {/* <nav className="main-nav"> */}
        <Hamburgers active={active} action={ToggleMenuFunction} />
        {/* </nav> */}

      </header>
      <Menu active={active} nameClass='main-menu' navClass='main-nav' action={ToggleMenuFunction} />
    </>
  )
}

export default Header
