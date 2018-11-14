import React, { Component } from 'react';
import AuthUserContext from './authUserContext';
import config from '../config/aws-config';
import { Auth } from 'aws-amplify';
import { connect } from 'react-redux';

const withAwsAuthentication = (Component) => {
    class WithAwsAuthentication extends Component {
        authStateSubscription = null;
        constructor(props) {
            super(props);
            this.state = {
                authUser: null,
                isAuthenticating: true,
            };
        }
        componentDidMount = async () => {
            this.loadFacebookSDK();

            const { user } = this.props;
            this.setState({ authUser: user });

            try {
                await Auth.currentAuthenticatedUser();
                // this.userHasAuthenticated(true);
            } catch (e) {
                if (e !== "not authenticated") {
                    alert(e);
                }
            }
            this.setState({ isAuthenticating: false });
        }
        componentWillUnmount = () => {

        }
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
                });
                window.FB.AppEvents.logPageView();
            };

            (function (d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) { return; }
                js = d.createElement(s); js.id = id;
                js.src = "https://connect.facebook.net/en_US/sdk.js";
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
        }

        render() {
            const { authUser, isAuthenticating } = this.state;
            return (
                isAuthenticating ? <div>Authenticating ...</div> :
                    <AuthUserContext.Provider value={authUser}>
                        <Component {...this.props} />
                    </AuthUserContext.Provider>
            );
        }
    }
    const mapStateToProps = ({ auth }) => ({
        user: auth.user
    });

    return connect(mapStateToProps)(WithAwsAuthentication);
};

export default withAwsAuthentication;