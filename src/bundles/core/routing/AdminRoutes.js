import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import About from '../../common/components/About/About'
import Contact from '../../common/components/Contact/Contact'
import Home from '../../common/Home/Home'
import ItemDetail from '../../item/ItemDetail'
import Checkout from '../../shop/Checkout'
import CreateItemPage from '../../pages/item/CreateItemPage'
import UpdateItemPage from '../../pages/item/UpdateItemPage'
import RemoveItemPage from '../../pages/item/RemoveItemPage'
import PrivateRoute from './PrivateRoute'

export var AdminRoutes = function ({ authenticated, authenticating, match }) {
  return <main>
    <Routes>
      <PrivateRoute
        path={`${match.url}/`}
        component={Home}
        authenticated={authenticated}
        authenticating={authenticating}
      />
      <Route path={`${match.url}about`} component={About} />
      <Route path={`${match.url}contact`} component={Contact} />
      <PrivateRoute
        path={`${match.url}item/create`}
        component={CreateItemPage}
        authenticated={authenticated}
      />
      <Route path={`${match.url}item/edit/:id`} component={UpdateItemPage} />
      <Route path={`${match.url}item/delete/:id`} component={RemoveItemPage} />
      <Route path={`${match.url}item/:id`} component={ItemDetail} />
      <Route path={`${match.url}checkout`} component={Checkout} />
    </Routes>
  </main>
}

const mapStateToProps = ({ auth }) => ({
  authenticated: auth.authenticated,
  authenticating: auth.authenticating
})

export default connect(mapStateToProps)(AdminRoutes)
