import React from 'react'
import logo from './logo.svg'
import styles from './NavBar.module.css'

import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useApolloClient } from 'react-apollo'

function Header (props) {
  let navlinks
  const client = useApolloClient()

  const SignOut = () => {
    localStorage.setItem('jwt',null)
    client.clearStore()
    props.logout()
  }
  if (props.logged) {
    
    navlinks = 
    <>
      <Link className='nav-link' to="/userInfo">User</Link>
      <Link className='nav-link' to="/auth/signin" onClick={SignOut}>Sign Out</Link>
    </>
  } else {
    navlinks = 
      <>
        <Link className='nav-link' to="/auth/signin">Sign in</Link>
        <Link className='nav-link' to="/auth/signup">Sign up</Link>
      </>      
  }

  return(
    <>      
      <Navbar className='justify-content-between' bg="primary" variant="dark" fixed="top">
        <Navbar.Brand>
          <img src={logo} className={styles.AppLogo} alt='logo' />
          <Link className='navbar-brand' to="/">Simple Chat</Link>
        </Navbar.Brand>
        <Nav>
          {navlinks}
        </Nav>
      </Navbar>
    </>
  )
}

export default Header