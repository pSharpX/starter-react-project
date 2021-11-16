import React from 'react'
import { Route, Navigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import posed, { PoseGroup } from 'react-pose'
import { render, ReactDOM } from 'react-dom'
import styled from 'styled-components'
import * as awsAuth from '../auth/aws-auth'
import { auth } from '../auth'

const Title = styled('p')`
  color: #ccc;
`

const PrivateRoute = function ({ component: Component, authenticated, authenticating, ...rest }) {
  return <Route
      {...rest}
      render={(props) =>
        authenticating
          ? (
          <div>Authenticating...</div>
            )
          : authenticated === true
            ? (
          <Component {...props} {...rest} />
              )
            : (
          <Navigate to="/login" />
              )
      }
    />
}

// <Redirect to="/login" />

const SecureRoute = function ({ component: Component, authenticated, ...rest }) {
  return <Route
    {...rest}
    render={(props) =>
      authenticated === true
        ? (
        <Component {...props} />
          )
        : (
        <Navigate to={{ pathname: '/login', state: { from: props.location } }} />
          )
    }
  />
}

const AuthButton = function ({ authenticated, history, ...rest }) {
  return authenticated === true ? (
    <Title>
      Welcome{' '}
      <button
        className="btn btn-primary btn-sm"
        onClick={() => {
          // auth.doSignOut();
          awsAuth.doSignOut()
          history.push('/')
        }}
      >
        <FontAwesomeIcon icon="sign-out-alt" /> Sign out
      </button>
    </Title>
  ) : (
    <p>You are not logged in.</p>
  )
}

export default PrivateRoute
export const ProtectedRoute = connect(({ auth }) => ({ authenticated: auth.authenticated }))(
  SecureRoute
)
export const SecureButton = connect(({ auth }) => ({ authenticated: auth.authenticated }))(
  AuthButton
)
