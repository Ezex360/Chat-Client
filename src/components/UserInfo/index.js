import React from 'react'
import styles from './UserInfo.module.css'

import { Jumbotron } from 'react-bootstrap'

function UserInfo () {
  const user = {username: 'Ezex360', firstname: 'Ezequiel', lastname: 'Giachero'}

  return(    
    <Jumbotron className={styles.UserInfoContainer}>
      <h1>{user.username}</h1>
      <div className={styles.UserInfo}>
        <p><b>First Name:</b> {user.firstname} </p>
        <p><b>Last Name:</b> {user.lastname} </p>
      </div> 
    </Jumbotron>
  )
}

export default UserInfo