import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  compose,
  withState,
  withHandlers,
  getContext,
  lifecycle,
  branch,
  renderComponent
} from 'recompose'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import posed, { PoseGroup } from 'react-pose'
import styled from 'styled-components'
import AuthUserContext from './authUserContext'
import { firebase } from './index'

const WithoutAuthorization = function () {
  return <div className="alert alert-warning">
      <FontAwesomeIcon icon="user-lock" className="mr-2" /> No permissions
    </div>
}

const withAuthorization = (authCondition) => (Component) => {
  class WithAuthorization extends Component {
    componentDidMount () {
      // firebase.auth.onAuthStateChanged(authUser => {
      //     if (!authCondition(authUser)) {
      //         this.props.history.push(`/login`);
      //     }
      // });
      const { authenticating, authenticated, user } = this.props
    };

    componentWillReceiveProps (nextProps) {
      const { authenticating, authenticated, user } = nextProps
    };

    render () {
      return (
        <AuthUserContext.Consumer>
          {(authUser) => (authUser ? <Component {...this.props} /> : <WithoutAuthorization />)}
        </AuthUserContext.Consumer>
      )
    }
  }
  const mapStateToProps = ({ auth }) => ({ ...auth })
  return compose(connect(mapStateToProps))(WithAuthorization)
}

export default withAuthorization
