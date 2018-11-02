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

const AdminRoutes = () => (
    <main>
        <Switch>
            <PrivateRoute exact path="/" component={Home} authenticated={false}/>
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <PrivateRoute exact path='/item/create' component={CreateItemPage} authenticated={false} />
            <Route exact path='/item/edit/:id' component={UpdateItemPage} />
            <Route exact path='/item/delete/:id' component={RemoveItemPage} />
            <Route exact path='/item/:id' component={ItemDetail} />            
            <Route path='/checkout' component={Checkout} />            
        </Switch>
    </main>
)

export default AdminRoutes;