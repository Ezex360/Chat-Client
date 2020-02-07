import React from 'react'
import logo from './logo.svg'
import styles from './App.module.css'

import SignUp from '../SignUp'
import SignIn from '../SignIn'
import { Switch, Route } from 'react-router'

function App () {
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <img src={logo} className={styles.AppLogo} alt='logo' />
        <p>
          Simple Chat app in construction
        </p>
      </header>
      <div className={styles.AppMain}>
        <Switch>
          <Route exact path='/auth/signup' component={SignUp} />
          <Route exact path='/auth/signin' component={SignIn} />
        </Switch>
      </div>
    </div>
  )
}

export default App
