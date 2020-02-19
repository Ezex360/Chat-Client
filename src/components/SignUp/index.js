import React from 'react'
import styles from './SignUp.module.css'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'

function SignUp () {
  return (
    <div className={styles.SignUp}>
      <Container>
        <Jumbotron>
          <h1> Member Registration</h1>
          <Form className={styles.SignUpForm}>
            <Form.Group controlId='formFirstName'>
              <Form.Control size='lg' type='text' placeholder='First name' required />
            </Form.Group>

            <Form.Group controlId='formLastName'>
              <Form.Control size='lg' type='text' placeholder='Last name' required />
            </Form.Group>

            <Form.Group controlId='formUsername'>
              <Form.Control size='lg' type='text' placeholder='Username' required />
            </Form.Group>

            <Form.Group controlId='formPassword'>
              <Form.Control size='lg' type='password' placeholder='Password' required />
            </Form.Group>

            <Button
              className={styles.SignUpButton} type='submit' variant='primary'
              size='lg' style={{ fontSize: 32 }} block
            >
              Submit
            </Button>

          </Form>

          <Link to='/auth/signin'>
            Do you already have an account?
          </Link>

        </Jumbotron>
      </Container>

    </div>
  )
}

export default SignUp
