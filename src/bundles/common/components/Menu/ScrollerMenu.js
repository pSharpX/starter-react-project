import React, { Component } from 'react'
import './ScrollerMenu.css'
import { Link } from 'react-router-dom'
import ShoppingCartNav from '../../../shop/ShoppingCartNav'

export default class ScrollerMenu extends Component {
  render () {
    return (
      <div className="nav-scroller bg-white shadow-sm">
        <nav className="nav nav-underline">
          <a className="nav-link active" href="#">
            Dashboard
          </a>
          <a className="nav-link" href="#">
            Friends
            <span className="badge badge-pill bg-light align-text-bottom">27</span>
          </a>
          <a className="nav-link" href="#">
            Explore
          </a>
          <a className="nav-link" href="#">
            Suggestions
          </a>
          <Link className="nav-link" to="/item/create">
            Register new Item
          </Link>
          <a className="nav-link" href="#">
            Link
          </a>
          {/** <ShoppingCartNav /> */}
        </nav>
      </div>
    )
  }
}
