import React, { Component } from "react";
import { connect } from 'react-redux';
import {
  compose,
  withState,
  withHandlers,
  getContext,
  lifecycle,
  branch,
  renderComponent
} from 'recompose';
import app from "../../../base";
import LogIn from "../../auth/LogIn";
import { auth } from '../../core/auth';
import * as authentication from '../../core/auth/aws-auth';
import * as actions from '../../core/actions/actions';


class LogInContainer extends Component {
  componentDidMount = () => { };
  handleLogIn = async (event) => {
    event.preventDefault();
    const { inputEmail, inputPassword } = event.target.elements;
    const { changeUserAuthenticationState } = this.props;
    try {
      // const user = await auth.doSignInWithEmailAndPassword(inputEmail.value, inputPassword.value);
      const user = await authentication.doSignIn(inputEmail.value, inputPassword.value);
      changeUserAuthenticationState({
        isAuthenticated: true,
        user
      });
      this.afterSuccessfulLogIn();
    } catch (error) {
      changeUserAuthenticationState({
        isAuthenticated: false,
        user: undefined
      });
    }
  }
  afterSuccessfulLogIn = (response) => {
    console.log(response);
    this.props.history.push("/");
  }
  render() {
    return <LogIn onSubmit={this.handleLogIn} afterLogIn={this.afterSuccessfulLogIn} />;
  }
}

const mapStateToProps = ({ auth }) => ({ ...auth });
const mapDispatchToProps = (dispatch) => ({
  changeUserAuthenticationState: (auth) => { dispatch(actions.userAuthenticationActionCreator(auth)) }
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(LogInContainer);