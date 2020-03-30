import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { Formik } from 'formik'
import * as Yup from 'yup'

import styles from './SignIn.module.css'
import { Form, Button, Jumbotron, Container, Alert } from 'react-bootstrap'

const SIGN_IN = gql`
  mutation sign_in($data: SigninInput!){
    signin(data: $data){
      user{
        id
      }
      jwt
    }
  }
`
const ValidationSchema = Yup.object().shape({
  username: Yup.string()
    .min(6, 'Usernames must have more than 6 characters')
    .max(255, 'Too Long!')
    .required('Required'),
  password: Yup.string()
    .min(6, 'Passwords must have more than 6 characters')
    .max(255, 'Too Long!')
    .required('Required')
})

function SignIn () {
  const [show, setShow] = useState(false)
  const [alertInfo, setAlertInfo] = useState({ variant: 'danger', message: 'Unknown error' })

  const successfulSignin = ({ signin }) => {
    setAlertInfo({ variant: 'success', message: 'Singed in succesfully' })
    setShow(true)
  }

  const failureSignin = (error) => {
    if (error.message === 'GraphQL error: User not found') {
      setAlertInfo({ variant: 'danger', message: 'Incorrect username or password' })
      setShow(true)
    }
  }

  const [signin] = useMutation(SIGN_IN, {
    onCompleted: successfulSignin,
    onError: failureSignin
  })

  return (
    <div className={styles.SignIn}>
      <Container>
        <Jumbotron>
          <h1> Member Login</h1>

          <Alert show={show} variant={alertInfo.variant} onClose={() => setShow(false)} dismissible>
            {alertInfo.message}
          </Alert>

          <Formik
            initialValues={{
              username: '',
              password: ''
            }}
            validationSchema={ValidationSchema}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              setSubmitting(true)
              const response = await signin({
                variables: {
                  data: values
                }
              })
              if (response) resetForm()
              setSubmitting(false)
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleSubmit,
              isSubmitting
            }) => (
              <Form className={styles.SignInForm} onSubmit={handleSubmit}>

                <Form.Group controlId='formUsername'>
                  <Form.Control
                    name='username'
                    size='lg' type='text'
                    placeholder='Username'
                    onChange={handleChange}
                    value={values.username}
                    isInvalid={touched.username && errors.username}
                  />
                  <Form.Control.Feedback type='invalid'>
                    {errors.username}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId='formPassword'>
                  <Form.Control
                    name='password'
                    size='lg' type='password'
                    placeholder='Password'
                    onChange={handleChange}
                    value={values.password}
                    isInvalid={touched.password && errors.password}
                  />
                  <Form.Control.Feedback type='invalid'>
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>

                <Button
                  className={styles.SignUpButton}
                  type='submit' variant='primary'
                  size='lg' style={{ fontSize: 32 }} block
                  disabled={isSubmitting}
                >
                  Submit
                </Button>

              </Form>
            )}
          </Formik>

          <Link to='/auth/signup'>
            Don't you have an account?
          </Link>
        </Jumbotron>
      </Container>

    </div>
  )
}

export default SignIn
