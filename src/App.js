import React, { Component } from 'react';
import './App.css';
import Header from './bundles/common/components/Header/Header';
import Footer from './bundles/common/components/Footer/Footer';
import AppLayout from './bundles/common/components/Layout/AppLayout';
import { library } from '@fortawesome/fontawesome-svg-core';
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
  faMinus
} from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel)
library.add(faAngleDoubleLeft);
library.add(faAngleDoubleRight);
library.add(faPlus);
library.add(faShoppingCart);
library.add(faCartPlus);
library.add(faTable);
library.add(faListUl);
library.add(faThList);
library.add(faFilter);
library.add(faHeart);
library.add(faStar);
library.add(faSave);
library.add(faPlusSquare, faPlusCircle, faRedo, faRedoAlt, faFolderOpen, faUndo,
  faUndoAlt, faDownload, faFileUpload, faUpload,faEdit, faTrash, faTrashAlt,faThumbsUp, 
  faThumbsDown, faMinus);

class App extends Component {
  state = { loading: true, authenticated: false, user: null};
  render() {
    return (
      <div className="App">
        <Header />
        <AppLayout></AppLayout>
        <Footer />
      </div>
    );
  }
}

export default App;