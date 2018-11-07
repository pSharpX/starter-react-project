import React, { Component } from 'react';
import { firebase } from './index';
import AuthUserContext from './authUserContext';
import { connect } from 'react-redux';

const withAuthentication = (Component) => {
    class WithAuthentication extends Component {
        authStateSubscription = null;
        constructor(props) {
            super(props);
            this.state = {
                authUser: null
            };
        }
        componentDidMount = () => {
            const { user } = this.props;
            this.setState({ authUser: user });
            this.authStateSubscription = firebase.auth.onAuthStateChanged((authUser) => {
                authUser
                    ? this.setState({ authUser })
                    : this.setState({ authUser: null });
            });
        }
        componentWillUnmount = () => {
            if (this.authStateSubscription)
                this.authStateSubscription();
        }

        render() {
            const { authUser } = this.state;
            return (
                <AuthUserContext.Provider value={authUser}>
                    <Component {...this.props} />
                </AuthUserContext.Provider>
            );
        }
    }
    const mapStateToProps = ({ auth }) => ({
        user: auth.user
    });

    return connect(mapStateToProps)(WithAuthentication);
};

export default withAuthentication;