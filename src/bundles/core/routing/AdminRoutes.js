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

const AdminRoutes = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route exact path='/item/create' component={CreateItemPage} />
            <Route exact path='/item/edit/:id' component={UpdateItemPage} />
            <Route exact path='/item/delete/:id' component={RemoveItemPage} />
            <Route exact path='/item/:id' component={ItemDetail} />            
            <Route path='/checkout' component={Checkout} />
        </Switch>
    </main>
)

export default AdminRoutes;