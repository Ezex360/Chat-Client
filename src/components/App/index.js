import React from 'react'
import { Switch, Route } from 'react-router'
import { Container } from 'react-bootstrap'
import styles from './App.module.css'

import SignUp from '../SignUp'
import SignIn from '../SignIn'
import NavBar from '../NavBar'
import UserInfo from '../UserInfo'


function App () {
  return (
    <div className={styles.App}>
      <Container>
        <header className={styles.AppHeader}>
          <NavBar/>
        </header>      
        <div className={styles.AppMain}>
          <Switch>
            <Route exact path='/auth/signup' component={SignUp} />
            <Route exact path='/auth/signin' component={SignIn} />
            <Route exact path='/userInfo' component={UserInfo} />
          </Switch>
        </div>
      </Container>
    </div>
  )
}

export default App
