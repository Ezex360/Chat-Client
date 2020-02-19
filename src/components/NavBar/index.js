import React from 'react'
import logo from './logo.svg'
import styles from './NavBar.module.css'

import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header () {
  return(
    <>      
      <Navbar className='justify-content-between' bg="primary" variant="dark" fixed="top">
        <Navbar.Brand>
          <img src={logo} className={styles.AppLogo} alt='logo' />
          <Link className='navbar-brand' to="/">Simple Chat</Link>
        </Navbar.Brand>
        <Nav >
          <Link className='nav-link' to="/userInfo">User</Link>
          <Link className='nav-link' to="/auth/signin">Sign in</Link>
          <Link className='nav-link' to="/auth/signup">Sign up</Link>
        </Nav>
      </Navbar>
    </>
  )
}

export default Header