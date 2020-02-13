import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'

import styles from './SignUp.module.css'
import { Form, Button, Jumbotron, Container, Alert } from 'react-bootstrap'

const SIGN_UP = gql`
  mutation sign_up($firstname:String!, $lastname:String!, $username: String!, $password: String!){
    signup(data:{firstName:$firstname,lastName:$lastname,username:$username,password:$password}){
      user{
        id
        username
      }
      jwt
    }
  }
`

function SignUp () {
  const [show, setShow] = useState(false)
  const [alertInfo, setAlertInfo] = useState({ variant: 'danger', message: 'Unknown error' })

  const successfulSignup = ({ signup }) => {
    setAlertInfo({ variant: 'success', message: 'Singed up succesfully' })
    setShow(true)
    console.log('success signup', signup)
  }

  const failureSignup = (error) => {
    setAlertInfo({ variant: 'danger', message: 'Oh snap! Something went wrong' })
    setShow(true)
    console.log(error.message)
  }

  const [signup] = useMutation(SIGN_UP, {
    onCompleted: successfulSignup,
    onError: failureSignup
  })

  const handleSignup = async (event) => {
    event.preventDefault()
    signup({
      variables: {
        firstname: event.target.formFirstName.value,
        lastname: event.target.formLastName.value,
        username: event.target.formUsername.value,
        password: event.target.formPassword.value
      }
    })
  }

  return (
    <div className={styles.SignUp}>
      <Container>
        <Jumbotron>
          <h1> Member Registration</h1>
          <Alert show={show} variant={alertInfo.variant} onClose={() => setShow(false)} dismissible>
            {alertInfo.message}
          </Alert>
          <Form className={styles.SignUpForm} onSubmit={handleSignup}>
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
