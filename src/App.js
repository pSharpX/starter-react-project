import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import './App.css';
import Header from './bundles/common/components/Header/Header';
import Footer from './bundles/common/components/Footer/Footer';
import AppLayout from './bundles/common/components/Layout/AppLayout';
import withAuthentication from './bundles/core/auth/withAuthentication';
import withAwsAuthentication from './bundles/core/auth/withAwsAuthentication';

class App extends Component {
  state = { loading: true, authenticated: false, user: null };
  render() {
    return (
      <div className="App">
        <Header />
        <Route path={`${this.props.match.url}`} component={AppLayout} />
        <Footer />
      </div>
    );
  }
}

// export default withAuthentication(App);
export default withAwsAuthentication(App);
// export default App;