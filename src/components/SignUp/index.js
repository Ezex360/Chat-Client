import React from 'react'
import styles from './SignUp.module.css'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

function SignUp () {
  return (
    <div className={styles.SignUp}>
      <Container>
        <Jumbotron>
          <h1> Member Registration</h1>
          <Form className={styles.SignUpForm}>
            <Form.Group controlId='formFirstName'>
              <Form.Label>Name</Form.Label>
              <Form.Control type='text' placeholder='Enter your first name' />
            </Form.Group>

            <Form.Group controlId='formLastName'>
              <Form.Label>Last Name</Form.Label>
              <Form.Control type='text' placeholder='Enter your last name' />
            </Form.Group>

            <Form.Group controlId='formUsername'>
              <Form.Label>Username</Form.Label>
              <Form.Control type='text' placeholder='Username' />
            </Form.Group>

            <Form.Group controlId='formPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' placeholder='Password' />
            </Form.Group>

            <Button variant='primary' size='lg' type='submit' block>
              Submit
            </Button>
          </Form>
        </Jumbotron>
      </Container>

    </div>
  )
}

export default SignUp
