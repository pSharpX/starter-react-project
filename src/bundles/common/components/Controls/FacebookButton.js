import React, { Component } from 'react'
import { Auth } from 'aws-amplify'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

const Button = styled.button`
  background-color: #4267b2;
`

const waitForInit = () => new Promise((resolve, reject) => {
    const hasFbLoaded = () => {
      if (window.FB) {
        resolve();
      } else {
        setTimeout(hasFbLoaded, 300);
      }
    };
    hasFbLoaded();
  });

export var FacebookButton = function({
  text = 'Sing In',
  name = 'facebookSignInButton',
  className = '',
  faIcon = 'facebook',
  ...rest
}) {
  className = `btn btn-lg btn-primary w-100 ${className}`.trim();
  return (
    <Button name={name} className={className} {...rest}>
      <FontAwesomeIcon icon={['fab', faIcon]} className="mr-2" />
      {text}
    </Button>
  );
}

class FacebookSignInContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoading: true
    }
  }
  componentDidMount() {
    await waitForInit()
    this.setState({
      isLoading: false
    })
  };

  statusChangeCallback = (response) => {
    if (response.status === 'connected') {
      this.handleResponse(response.authResponse)
    } else {
      this.handleError(response)
    }
  }
  checkLoginState = () => {
    window.FB.getLoginStatus(this.statusChangeCallback)
  };

  handleClick = () => {
    window.FB.login(this.checkLoginState, { scope: 'public_profile,email' })
  };

  handleError = (err) => {
    alert(err)
  };

  handleResponse = async (data) => {
    const { email, accessToken: token, expiresIn } = data
    const expires_at = expiresIn * 1000 + new Date().getTime()
    const user = email

    this.setState({ isLoading: true })
    try {
      const response = await Auth.federatedSignIn('facebook', { token, expires_at }, user)
      this.setState({ isLoading: false })
      this.props.onLogin(response)
    } catch (e) {
      this.setState({ isLoading: false })
      this.handleError(e)
    }
  }
  render() {
    return (
      <FacebookButton
        text="Sign In with Facebook"
        onClick={this.handleClick}
        disabled={this.state.isLoading}
      />
    )
  }
}

export default FacebookSignInContainer
