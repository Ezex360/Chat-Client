import React from 'react'
import logo from './logo.svg'
import './App.css'

import SignUp from '../SignUp/SignUp'
import { Switch, Route } from 'react-router'

function App () {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Simple Chat app in construction
        </p>
      </header>
      <div className='App-main'>
        <Switch>
          <Route exact path='/auth/signup' component={SignUp} />
        </Switch>
      </div>
    </div>
  )
}

export default App
