import React from 'react'
import { Switch, Route, withRouter } from 'react-router'
import { Container } from 'react-bootstrap'
import styles from './App.module.css'

import SignUp from '../SignUp'
import SignIn from '../SignIn'
import NavBar from '../NavBar'
import UserInfo from '../UserInfo'


class App extends React.Component {

  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.state = {isLoggedIn: !!localStorage.getItem('jwt')};
  }
  handleLogin() {
    this.setState({isLoggedIn: true});
  }
  handleLogout() {
    this.setState({isLoggedIn: false});
  }
  
  render() { 
    return (
      <div className={styles.App}>
        <Container>
          <header className={styles.AppHeader}>
            <NavBar logged={this.state.isLoggedIn} logout={this.handleLogout}/>
          </header>      
          <div className={styles.AppMain}>
            <Switch>
              <Route exact path='/auth/signup' render={(props) => <SignUp login={this.handleLogin}/> }/>
              <Route exact path='/auth/signin' render={(props) => <SignIn login={this.handleLogin}/> } />
              <Route exact path='/userInfo' component={UserInfo} />
            </Switch>
          </div>
        </Container>
      </div>
    )
  }
}

export default withRouter(App)
