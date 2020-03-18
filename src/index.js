import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './components/App'
import * as serviceWorker from './serviceWorker'

import 'bootstrap/dist/css/bootstrap.min.css'

import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { persistCache } from 'apollo-cache-persist'
import { ApolloLink } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { ApolloProvider } from 'react-apollo'

const httpLink = new HttpLink({
  uri: 'http://localhost:3001/graphql'
})
const middlewareLink = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem('jwt')
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : null
    }
  })
  return forward(operation)
})
const link = middlewareLink.concat(httpLink)

const cache = new InMemoryCache()
persistCache({
  cache,
  storage: window.localStorage
})

const client = new ApolloClient({
  cache,
  link
})

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
