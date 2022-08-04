import React from 'react'
import { ActiveLink } from './ActiveLink'
import styles from './Navbar.module.css'

export const Navbar = () => {

  const menuItems = [
    {
      text: 'Home',
      href: '/'
    },
    
    {
      text: 'About',
      href: '/about'
    },
    
    {
      text: 'Contact',
      href: '/contact'
    },
    {
      text: 'Pricing',
      href: '/pricing'
    },
  ]
  return (
    // propiedad computada
    <nav className={ styles['menu-container'] }>

      { menuItems.map( ({text, href}) => (
        <ActiveLink key={ href } text={text} href={href} />
      ))}

        {/* no se puede agregar estilos directamente a los <Link />
       <ActiveLink text="Home" link={'/'} href="/"/>
       <ActiveLink text="About" link={'/about'} href="/about"/>
       <ActiveLink text="Contact" link={'/contact'} href="/contact"/> */}
    </nav>
  )
}