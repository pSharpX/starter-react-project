import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {firebase} from './index';
import AuthUserContext from './authUserContext';

const withAutorization = (authCondition) => (Component) => {
    class WithAutorization extends Component {
        componentDidMount = () => {
            firebase.auth.onAuthStateChanged(authUser => {
                if (!authCondition(authUser)) {
                    this.props.history.push(`/login`);
                }
            });
        }
        render() {
            return (
                <AuthUserContext.Consumer>
                    {authUser => authUser ? <Component {...this.props} /> : null}
                </AuthUserContext.Consumer>
            );
        }
    }
    return withRouter(WithAutorization);
};

export default withAutorization;