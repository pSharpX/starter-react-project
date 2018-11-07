import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import AdminRoutes from '../../../core/routing/AdminRoutes';

export default class AppMain extends Component {
    render() {
        return (
            <div className="container">
                <Route path={`${this.props.match.url}`} component={AdminRoutes} />
            </div>
        );
    }
}