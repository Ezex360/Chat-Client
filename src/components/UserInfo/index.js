import React from 'react'
import styles from './UserInfo.module.css'

import { Jumbotron } from 'react-bootstrap'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const CURRENT_USER = gql`
  query currentUser{
    currentUser{
      id
      username
      firstName
      lastName
    }
  }
`

function UserInfo () {
  return (
    <Jumbotron className={styles.UserInfoContainer}>
      <Query query={CURRENT_USER}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...'
          if (error) return `Error! ${error.message}`
          if (!data) return 'Failure executing query'
          const user = data.currentUser
          return (
            <>
              <h1>{user.username}</h1>
              <div className={styles.UserInfo}>
                <p><b>First Name:</b> {user.firstName} </p>
                <p><b>Last Name:</b> {user.lastName} </p>
              </div>
            </>
          )
        }}
      </Query>
    </Jumbotron>
  )
}

export default UserInfo
