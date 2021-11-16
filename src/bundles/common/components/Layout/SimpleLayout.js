import React, { Component } from 'react'
import logo from '../../../../logo.svg'

export default class SimpleLayout extends Component {
  render () {
    const { HeaderBox } = this.props
    return (
      <div className="container">
        <div className="d-flex align-items-center p-3 my-3 text-white-50 bg-react rounded shadow-sm">
          <img className="mr-3" src={logo} alt="" width="48" height="48" />
          <div className="lh-100">
            <h6 className="mb-0 text-white lh-100">Bootstrap</h6>
            <small>Since 2011</small>
          </div>
        </div>

        <div className="my-3 p-3 bg-white rounded shadow-sm">
          <h6 className="border-bottom border-gray pb-2 mb-4">Header Box</h6>
          {HeaderBox}
        </div>

        <div className="my-3 p-3 bg-white rounded shadow-sm">
          <h6 className="border-bottom border-gray pb-2 mb-4">Main Box</h6>
          {this.props.children}
        </div>
      </div>
    )
  }
}
