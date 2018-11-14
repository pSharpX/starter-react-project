import React, { Component } from 'react';
import { Auth } from 'aws-amplify';
import posed, { PoseGroup } from "react-pose";
import { render, ReactDOM } from "react-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from "styled-components";

const waitForInit = () => {
    return new Promise((resolve, reject) => {
        const hasFbLoaded = () => {
            if (window.FB) {
                resolve();
            } else {
                setTimeout(hasFbLoaded, 300);
            }
        }
        hasFbLoaded();
    });
};

export const FacebookButton = ({ text = "Sing In", name = "facebookSignInButton", className = "", faIcon = "sign-in-alt", ...rest }) => {
    className = `btn btn-lg btn-primary ${className}`.trim();
    return (
        <button
            name={name}
            className={className}
            {...rest}>
            <FontAwesomeIcon icon={faIcon} className="mr-2" />{text}</button>
    );
};

class FacebookSignInContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
        }
    }
    componentDidMount = async () => {
        await waitForInit();
        this.setState({
            isLoading: false,
        });
    }
    statusChangeCallback = (response) => {
        if (response.status === "connected") {
            this.handleResponse(response.authResponse);
        } else {
            this.handleError(response);
        }
    }
    checkLoginState = () => {
        window.FB.getLoginStatus(this.statusChangeCallback);
    }
    handleClick = () => {
        window.FB.login(this.checkLoginState, { scope: "public_profile,email" })
    }
    handleError = (err) => {
        alert(err);
    }
    handleResponse = async (data) => {
        const { email, accessToken: token, expiresIn } = data;
        const expires_at = expiresIn * 1000 + (new Date().getTime());
        const user = email;

        this.setState({ isLoading: true });
        try {
            const response = await Auth.federatedSignIn("facebook", { token, expires_at }, user);
            this.setState({ isLoading: false });
            this.props.onLogin(response);
        } catch (e) {
            this.setState({ isLoading: false });
            this.handleError(e);
        }
    }
    render() {
        return (
            <FacebookButton
                text="Sign In with Facebook"
                onClick={this.handleClick}
                disabled={this.state.isLoading} />
        );
    }

}

export default FacebookSignInContainer;