import React, { Component } from 'react'
import { Auth } from 'aws-amplify'
import AuthUserContext from './authUserContext'
import config from '../config/aws-config'
import { connect } from 'react-redux'
import * as actions from '../actions/actions';

const withAwsAuthentication = (Component) => {
  class WithAwsAuthentication extends Component {
    authStateSubscription = null
    constructor (props) {
      super(props)
      this.state = {
        authUser: undefined
      }
    }

    componentWillMount () {}
    componentDidMount() {
      this.loadFacebookSDK()

      const { changeUserAuthenticationState, startUserAuthentication, finishUserAuthentication } =
        this.props

      try {
        startUserAuthentication()
        const user = await Auth.currentAuthenticatedUser()
        changeUserAuthenticationState({
          isAuthenticated: true,
          user
        })
        finishUserAuthentication()
      } catch (e) {
        finishUserAuthentication()
        if (e !== 'not authenticated') {
          changeUserAuthenticationState({
            isAuthenticated: false,
            user: undefined
          })
          alert(e)
        }
      }
    }

    componentWillUnmount() {}
    loadFacebookSDK = () => {
      window.fbAsyncInit = function () {
        // window.FB.init({
        //     appId: config.social.FB.APP_ID,
        //     autoLogAppEvents: true,
        //     xfbml: true,
        //     version: config.social.FB.API_VERSION
        // });
        window.FB.init({
          appId: config.social.FB.APP_ID,
          cookie: true,
          xfbml: true,
          version: config.social.FB.API_VERSION
        })
        window.FB.AppEvents.logPageView()
      };

      (function (d, s, id) {
        let js
          var fjs = d.getElementsByTagName(s)[0]
        if (d.getElementById(id)) {
          return
        }
        js = d.createElement(s)
        js.id = id
        js.src = 'https://connect.facebook.net/en_US/sdk.js'
        fjs.parentNode.insertBefore(js, fjs)
      })(document, 'script', 'facebook-jssdk')
    }

    render () {
      const { user: authUser, authenticating } = this.props
      return authenticating
        ? (
        <div>Authenticating ...</div>
          )
        : (
        <AuthUserContext.Provider value={authUser}>
          <Component {...this.props} />
        </AuthUserContext.Provider>
          )
    }
  }
  const mapStateToProps = ({ auth }) => ({
    authenticating: auth.authenticating,
    authenticated: auth.authenticated,
    user: auth.user
  })
  const mapDispatchToProps = (dispatch) => ({
    changeUserAuthenticationState: (auth) => {
      dispatch(actions.userAuthenticationActionCreator(auth))
    },
    startUserAuthentication: () => {
      dispatch(actions.startUserAuthenticationActionCreator())
    },
    finishUserAuthentication: () => {
      dispatch(actions.finishUserAuthenticationActionCreator())
    }
  })

  return connect(mapStateToProps, mapDispatchToProps)(WithAwsAuthentication)
}

export default withAwsAuthentication
