import React, { Component } from 'react';
import AppMain from '../Main/AppMain';

export default class AppLayout extends Component {
    render() {
        return (
            <main role="main" className="container">                
                <AppMain />
            </main>
        );
    }
}