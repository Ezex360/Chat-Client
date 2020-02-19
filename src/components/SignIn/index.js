import React from 'react'
import styles from './SignIn.module.css'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'

function SignUp () {
  return (
    <div className={styles.SignIn}>
      <Container>
        <Jumbotron>
          <h1> Member Login</h1>
          <Form className={styles.SignInForm}>

            <Form.Group controlId='formUsername'>
              <Form.Control type='text' placeholder='Username' size='lg' required />
            </Form.Group>

            <Form.Group controlId='formPassword'>
              <Form.Control type='password' placeholder='Password' size='lg' required />
            </Form.Group>

            <Button
              className={styles.SignInButton} type='submit' variant='primary'
              size='lg' style={{ fontSize: 32 }} block
            >
              Sign In
            </Button>

            <Link to='/auth/signup'>
              Don't you have an account?
            </Link>
          </Form>
        </Jumbotron>
      </Container>

    </div>
  )
}

export default SignUp
