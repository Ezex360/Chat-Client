import React from 'react'
import logo from './logo.svg'
import styles from './App.module.css'

import SignUp from '../SignUp'
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
        </Switch>
      </div>
    </div>
  )
}

export default App
