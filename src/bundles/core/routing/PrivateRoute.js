import React from "react";
import { Route, Redirect } from "react-router-dom";
import { withRouter } from "react-router";
import {auth} from '../auth';

const PrivateRoute = ({
    component: Component,
    authenticated,
    ...rest
  }) => {
      return (
        <Route
            {...rest}
            render={(props) =>
                authenticated === true ? (
                <Component {...props} {...rest} />
                ) : (
                <Redirect to="/login" />
                )
            }
            />
      );
};

export const ProtectedRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={(props) => (
        true === true ? 
        <Component {...props} /> : <Redirect to={{ pathname: '/login', state: { from: props.location }}} />   
    )} />
);

export const AuthButton = withRouter(({history}) => (
    true === true ? 
        (
        <p>Wlcome <button onClick={() => {
            auth.doSignOut(); history.push('/');
            }}>Sign out</button></p>
            ) : (<p>You are not logged in.</p>)
        
));

export default PrivateRoute;