import React, { Component } from "react";
import { withRouter } from "react-router";
import app from "../../../base";
import LogIn from "../../auth/LogIn";
import {auth} from '../../core/auth';

class LogInContainer extends Component {
  componentDidMount = () => {};
  handleLogIn = async (event) => {
    event.preventDefault();
    const { inputEmail, inputPassword } = event.target.elements;
    try {
      const user = await auth.doSignInWithEmailAndPassword(inputEmail.value, inputPassword.value);
      this.props.history.push("/");
    } catch (error) {
      alert(error);
    }
  }
  render() {
    return <LogIn onSubmit={this.handleLogIn} />;
  }
}

export default withRouter(LogInContainer);