import MenuAtom from '../atoms/Menu'
import Menu from '../molecules/Menu'
import Social from '../molecules/Social'


const Footer = () => {
  return (
    <footer className="main-footer">
      <MenuAtom nameClass='footer-menu' active={false} action={()=>{null}}/>
      <Social nameClass="social-netwoks"/>
    </footer>
  )
}

export default Footer
