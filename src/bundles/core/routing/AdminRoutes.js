import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from '../../common/components/About/About';
import Contact from '../../common/components/Contact/Contact';
import Home from '../../common/Home/Home';
import ItemDetail from '../../item/ItemDetail';
import Checkout from '../../shop/Checkout';
import CreateItemPage from '../../pages/item/CreateItemPage';
import UpdateItemPage from '../../pages/item/UpdateItemPage';
import RemoveItemPage from '../../pages/item/RemoveItemPage';
import PrivateRoute from './PrivateRoute';
import { connect } from 'react-redux';

export const AdminRoutes = ({ authenticated }) => (
    <main>
        <PrivateRoute exact path="/" component={Home} authenticated={authenticated} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <PrivateRoute path='/item/create' component={CreateItemPage} authenticated={authenticated} />
        <Route exact path='/item/edit/:id' component={UpdateItemPage} />
        <Route exact path='/item/delete/:id' component={RemoveItemPage} />
        <Route exact path='/item/:id' component={ItemDetail} />
        <Route path='/checkout' component={Checkout} />
    </main>
)

const mapStateToProps = ({ auth }) => ({
    authenticated: auth.authenticated
});

export default connect(mapStateToProps)(AdminRoutes);