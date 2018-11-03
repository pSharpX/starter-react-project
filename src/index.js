import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
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

var store = configureStore.configure();
store.subscribe(() => {
    console.log(store.getState());
});

auth.onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(actions.userAuthenticationActionCreator(true));
    } else {
        store.dispatch(actions.userAuthenticationActionCreator(false));
    }
});

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/login" component={LogInContainer} />
                <Route exact path="/signup" component={SignUpContainer} />
                <Route exact path="/" component={App}>
                    <main role="main" className="container">
                        <div className="container">
                            <AdminRoutes />
                        </div>
                    </main>
                </Route>
                <Route path="*" component={NotFound} />
            </Switch>
        </BrowserRouter>
    </Provider>), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();