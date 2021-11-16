import React, { Component } from 'react'
import { Routes, Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

import './AppBase.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faFacebookSquare, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import {
  faStroopwafel,
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faPlus,
  faShoppingCart,
  faCartPlus,
  faTable,
  faListUl,
  faThList,
  faFilter,
  faHeart,
  faStar,
  faSave,
  faPlusSquare,
  faPlusCircle,
  faEdit,
  faTrash,
  faTrashAlt,
  faRedo,
  faRedoAlt,
  faFolderOpen,
  faUndo,
  faUndoAlt,
  faDownload,
  faFileUpload,
  faUpload,
  faThumbsUp,
  faThumbsDown,
  faMinus,
  faSignInAlt,
  faSignOutAlt,
  faSpinner,
  faCircleNotch,
  faCog,
  faShieldAlt,
  faUserShield,
  faLock,
  faUnlockAlt,
  faUserLock,
  faLockOpen
} from '@fortawesome/free-solid-svg-icons'
import App from './App'
import SignUpContainer from './bundles/pages/auth/SignUpContainer'
import LogInContainer from './bundles/pages/auth/LogInContainer'
import NotFound from './bundles/common/components/Error/NotFound'
import withAuthentication from './bundles/core/auth/withAuthentication'
import withAwsAuthentication from './bundles/core/auth/withAwsAuthentication'

library.add(
  faStroopwafel,
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faPlus,
  faShoppingCart,
  faCartPlus,
  faTable,
  faListUl,
  faThList,
  faFilter,
  faHeart,
  faStar,
  faSave,
  faPlusSquare,
  faPlusCircle,
  faRedo,
  faRedoAlt,
  faFolderOpen,
  faUndo,
  faUndoAlt,
  faDownload,
  faFileUpload,
  faUpload,
  faEdit,
  faTrash,
  faTrashAlt,
  faThumbsUp,
  faThumbsDown,
  faMinus,
  faSignInAlt,
  faSignOutAlt,
  faSpinner,
  faCircleNotch,
  faCog,
  faStroopwafel,
  faShieldAlt,
  faUserShield,
  faLock,
  faUnlockAlt,
  faUserLock,
  faLockOpen,
  faFacebook,
  faFacebookSquare,
  faFacebookF
)

class AppBase extends Component {
  state = { loading: true, authenticated: false, user: null }
  render() <BrowserRouter>
      <Routes>
        <Route path="/login" component={LogInContainer} />
        <Route path="/signup" component={SignUpContainer} />
        <Route exact path="" component={App} />
        <Route path="*" component={NotFound} />
      </Routes>
    </BrowserRouter>
  )
}

// export default withAuthentication(AppBase);
export default withAwsAuthentication(AppBase)
