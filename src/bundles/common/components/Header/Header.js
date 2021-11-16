import React, { Component } from 'react'
import AppNavbar from '../Navbar/AppNavbar'
import ScrollerMenu from '../Menu/ScrollerMenu'

export default class Header extends Component {
  render () {
    return (
      <header>
        <AppNavbar />
        <ScrollerMenu />
      </header>
    )
  }
}
