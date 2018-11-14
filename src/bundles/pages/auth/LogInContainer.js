import React, { Component } from "react";
import { withRouter } from "react-router";
import app from "../../../base";
import LogIn from "../../auth/LogIn";
import { auth } from '../../core/auth';
import * as authentication from '../../core/auth/aws-auth';

class LogInContainer extends Component {
  componentDidMount = () => { };
  handleLogIn = async (event) => {
    event.preventDefault();
    const { inputEmail, inputPassword } = event.target.elements;
    try {
      // const user = await auth.doSignInWithEmailAndPassword(inputEmail.value, inputPassword.value);
      const user = await authentication.doSignIn(inputEmail.value, inputPassword.value);
      console.log(user);
      this.props.history.push("/");
    } catch (error) {
      alert(JSON.stringify(error));
    }
  }
  render() {
    return <LogIn onSubmit={this.handleLogIn} />;
  }
}

export default withRouter(LogInContainer);