import React, { Component } from "react";
import { withRouter } from "react-router";
import app from "../../../base";
import SignUp from "../../auth/SignUp";

class SignUpContainer extends Component {
  componentDidMount = () => {};
  handleSignUp = async (event) => {
    event.preventDefault();
    const { inputEmail, inputPassword } = event.target.elements;
    try {
      const user = await app
        .auth()
        .createUserWithEmailAndPassword(inputEmail.value, inputPassword.value);
      this.props.history.push("/");
    } catch (error) {
      alert(error);
    }
  };
  render() {
    return <SignUp onSubmit={this.handleSignUp} />;
  }
}

export default withRouter(SignUpContainer);