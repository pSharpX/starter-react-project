import React, { Component } from 'react';
import AdminRoutes from '../../../core/routing/AdminRoutes';

export default class AppMain extends Component {
    render() {
        return (
            <div className="container">
                <AdminRoutes />
            </div>
        );
    }
}