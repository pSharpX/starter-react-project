import React, { Component } from 'react'
import render from 'react-dom'
import { Route, Redirect } from 'react-router-dom'
import { withRouter } from 'react-router'

const NotFound = function () {
  return <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">Page Not Found 404</h1>
        <p className="lead">
          This is a simple hero unit, a simple jumbotron-style component for calling extra attention
          to featured content or information.
        </p>
        <hr className="my-4" />
        <p>
          It uses utility classes for typography and spacing to space content out within the larger
          container.
        </p>
        <button className="btn btn-primary btn-lg">Learn more</button>
      </div>
    </div>
}

export default NotFound
