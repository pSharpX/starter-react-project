import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Redirect } from 'react-router';
import { BrowserRouter, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import Amplify from "aws-amplify";
import * as configureStore from './bundles/core/store/configureStore';
import { auth } from './bundles/core/auth/firebase';
import * as actions from './bundles/core/actions/actions';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import LogIn from './bundles/auth/LogIn';
import SignUp from './bundles/auth/SignUp';
import SignUpContainer from './bundles/pages/auth/SignUpContainer';
import LogInContainer from './bundles/pages/auth/LogInContainer';
import { AdminRoutes } from './bundles/core/routing/AdminRoutes';
import NotFound from './bundles/common/components/Error/NotFound';
import config from './bundles/core/config/aws-config';

Amplify.configure({
    Auth: {
        mandatorySignIn: true,
        region: config.cognito.REGION,
        userPoolId: config.cognito.USER_POOL_ID,
        identityPoolId: config.cognito.IDENTITY_POOL_ID,
        userPoolWebClientId: config.cognito.APP_CLIENT_ID
    },
    Storage: {
        region: config.s3.REGION,
        bucket: config.s3.BUCKET,
        identityPoolId: config.cognito.IDENTITY_POOL_ID
    },
    API: {
        endpoints: [
            {
                name: "notes",
                endpoint: config.apiGateway.URL,
                region: config.apiGateway.REGION
            },
        ]
    }
});

var store = configureStore.configure();
store.subscribe(() => {
    console.log(store.getState());
});

auth.onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(actions.userAuthenticationActionCreator({
            isAuthenticated: true,
            user
        }));
    } else {
        store.dispatch(actions.userAuthenticationActionCreator({
            isAuthenticated: false,
            user: undefined
        }));
    }
});

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={LogInContainer} />
                <Route path="/signup" component={SignUpContainer} />
                <Route exact path="" component={App} />
                <Route path="*" component={NotFound} />
            </Switch>
        </BrowserRouter>
    </Provider>), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();