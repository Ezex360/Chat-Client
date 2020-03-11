import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { Formik } from 'formik'
import * as Yup from 'yup'

import styles from './SignUp.module.css'
import { Form, Button, Jumbotron, Container, Alert } from 'react-bootstrap'

const SIGN_UP = gql`
  mutation sign_up($data: SignupInput!){
    signup(data: $data){
      user{
        id
        username
        firstName
        lastName
      }
      jwt
    }
  }
`

const ValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short! Names must have more than 2 letters')
    .max(255, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short! Surnames must have more than 2 letters')
    .max(255, 'Too Long!')
    .required('Required'),
  username: Yup.string()
    .min(6, 'Usernames must have more than 6 characters')
    .max(255, 'Too Long!')
    .required('Required'),
  password: Yup.string()
    .min(6, 'Passwords must have more than 6 characters')
    .max(255, 'Too Long!')
    .required('Required')
})

function SignUp (props) {
  const [show, setShow] = useState(false)
  const [alertInfo, setAlertInfo] = useState({ variant: 'danger', message: 'Unknown error' })
  const history = useHistory()

  const successfulSignup = ({ signup }) => {
    setAlertInfo({ variant: 'success', message: 'Singed up succesfully' })
    setShow(true)
    localStorage.setItem('jwt',signup.jwt)
  }

  const failureSignup = (error) => {
    setAlertInfo({ variant: 'danger', message: 'Oh snap! Something went wrong' })
    setShow(true)
  }

  const [signup] = useMutation(SIGN_UP, {
    onCompleted: successfulSignup,
    onError: failureSignup
  })

  return (
    <div className={styles.SignUp}>
      <Container>
        <Jumbotron>
          <h1> Member Registration</h1>
          <Alert show={show} variant={alertInfo.variant} onClose={() => setShow(false)} dismissible>
            {alertInfo.message}
          </Alert>
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              username: '',
              password: ''
            }}
            validationSchema={ValidationSchema}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              setSubmitting(true)
              const response = await signup({
                variables: {
                  data: values
                }
              })
              if (response) {
                setSubmitting(false)
                resetForm()
                props.login()
                history.push("/userInfo")
              }   
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
              <Form className={styles.SignUpForm} onSubmit={handleSubmit}>

                <Form.Group controlId='formFirstName'>
                  <Form.Control
                    name='firstName'
                    size='lg' type='text'
                    placeholder='First name'
                    onChange={handleChange}
                    value={values.firstName}
                    isInvalid={touched.firstName && errors.firstName}
                  />
                  <Form.Control.Feedback type='invalid'>
                    {errors.firstName}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId='formLastName'>
                  <Form.Control
                    name='lastName'
                    size='lg' type='text'
                    placeholder='Last name'
                    onChange={handleChange}
                    value={values.lastName}
                    isInvalid={touched.lastName && errors.lastName}
                  />
                  <Form.Control.Feedback type='invalid'>
                    {errors.lastName}
                  </Form.Control.Feedback>
                </Form.Group>

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

          <Link to='/auth/signin'>
            Do you already have an account?
          </Link>

        </Jumbotron>
      </Container>

    </div>
  )
}

export default SignUp
