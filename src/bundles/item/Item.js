import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { render } from 'react-dom'
import posed, { PoseGroup } from 'react-pose'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Image, Video, Transformation, CloudinaryContext } from 'cloudinary-react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import API from '../core/api'
import AddToCart from '../shop/AddToCart'

const ConfirmButton = function ({ className = '', Text = 'Great!', Icon = 'thumbs-up', ...rest }) {
  return <div className={className} {...rest}>
      <FontAwesomeIcon icon={Icon} /> {Text}
    </div>
}

const CancelButton = function ({ className = '', Text = '', Icon = 'thumbs-down', ...rest }) {
  return (
    <div className={className} {...rest}>
      <FontAwesomeIcon icon={Icon} /> {Text}
    </div>
  )
}

const Title = styled('strong')`
  text-decoration: underline;
`

export default class Item extends Component {
  AnimatedDiv = posed.div({
    on: { opacity: 1, y: 0 },
    off: { opacity: 0, y: 30, transition: { type: 'spring' } }
  })

  MySwal = withReactContent(Swal)
  componentDidMount () {
    if (this.rootNode) {
      window.Holder.run({
        images: this.rootNode
      })
    }
  }

  addToFavouritesHandler = (event) => {
    this.MySwal.fire({
      type: 'success',
      title: 'Your work has been saved',
      inputValue: this.addToFavourites(),
      showCancelButton: false
    }).then((res) => {
      if (res.value) console.log(res.value)
    })
  }

  addToFavourites = () => {
    const Item = this.props.Input
    return new Promise((resolve, reject) => {
      API.get(`item/${Item.Id}`)
        .then(
          (res) =>
            new Promise((resolve1) =>
              setTimeout(() => {
                resolve1(res)
              }, 2000)
            )
        )
        .then((res) => JSON.stringify(res.data))
        .then((json) => {
          const id = setInterval(() => {
            this.MySwal.clickConfirm()
            clearInterval(id)
          }, 500)
          return resolve(json)
        })
        .catch((error) => reject(error))
    })
  }

  addToCartHandler = (event) => {
    const Item = this.props.Input
    this.MySwal.fire({
      title: <Title>{Item.name}</Title>,
      type: 'info',
      html: (
        <AddToCart
          Item={Item}
          confirmButtonHandler={this.confirmAddToCart}
          cancelButtonHandler={this.MySwal.clickCancel}
        />
      ),
      showCloseButton: true,
      showCancelButton: false,
      showConfirmButton: false,
      focusConfirm: true,
      confirmButtonText: <ConfirmButton />,
      confirmButtonAriaLabel: 'Thumbs up, great!',
      cancelButtonText: <CancelButton />,
      cancelButtonAriaLabel: 'Thumbs down',
      footer: '<a href>Why do I have this issue?</a>'
    })
  }

  confirmAddToCart = (state) => {
    console.log(state)
    this.MySwal.clickConfirm()
  }

  addToCart = (item) => {}
  render () {
    const Item = this.props.Input
    // const Entering = this.props.Entering;
    const viewMode = this.props.ViewMode || 'card-view'
    const { AnimatedDiv } = this
    const cardView = (
      <AnimatedDiv className="card">
        {Item.imageUrl
          ? (
          <img className="card-img-top" src={Item.imageUrl} alt={Item.name} />
            )
          : (
          <img
            className="card-img-top"
            ref={(node) => (this.rootNode = node)}
            data-src="holder.js/256x256?theme=thumb&bg=e83e8c&fg=e83e8c&size=1"
            alt={Item.name}
          />
            )}
        <div className="card-body">
          <h5 className="card-title">{Item.name}</h5>
          <p className="card-text">{Item.description}</p>
          <p className="card-text">{Item.price}</p>
          <p className="card-text">{Item.category.name}</p>
          <div className="d-flex justify-content-between">
            <div
              className="btn-group btn-group-sm"
              role="group"
              aria-label="Button group with nested dropdown"
            >
              <button type="button" className="btn btn-info" onClick={this.addToCartHandler}>
                <FontAwesomeIcon icon="cart-plus" />
              </button>
              <button type="button" className="btn btn-info" onClick={this.addToFavouritesHandler}>
                <FontAwesomeIcon icon="heart" />
              </button>
              <Link to={`item/${Item.Id}`} className="btn btn-info">
                <FontAwesomeIcon icon="angle-double-right" />
              </Link>
            </div>

            <div
              className="btn-group btn-group-sm"
              role="group"
              aria-label="Button group with nested dropdown"
            >
              <Link to={`item/edit/${Item.Id}`} className="btn btn-info">
                <FontAwesomeIcon icon="edit" />
              </Link>
              <Link to={`item/delete/${Item.Id}`} className="btn btn-info">
                <FontAwesomeIcon icon="trash-alt" />
              </Link>
            </div>
          </div>
        </div>
      </AnimatedDiv>
    )
    const tableView = (
      <tr>
        <td>
          <img
            className="card-img-top"
            ref={(node) => (this.rootNode = node)}
            data-src="holder.js/32x32?theme=thumb&bg=e83e8c&fg=e83e8c&size=1"
            alt={Item.name}
          />
        </td>
        <td>{Item.name}</td>
        <td>{Item.description}</td>
        <td>{Item.price}</td>
        <td>{Item.category.name}</td>
        <td>
          <div
            className="btn-group btn-group-sm"
            role="group"
            aria-label="Button group with nested dropdown"
          >
            <button type="button" className="btn btn-primary">
              <FontAwesomeIcon icon="cart-plus" />
            </button>
            <button type="button" className="btn btn-danger">
              <FontAwesomeIcon icon="heart" />
            </button>
          </div>
        </td>
      </tr>
    )
    const listView = (
      <li className="list-group-item list-group-item-action flex-column align-items-start">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">{Item.name}</h5>
          <span className="badge badge-primary badge-pill ml-4">{Item.price}</span>
        </div>
        <div className="d-flex w-100 flex-row">
          <img
            className="card-img-top"
            ref={(node) => (this.rootNode = node)}
            data-src="holder.js/32x32?theme=thumb&bg=e83e8c&fg=e83e8c&size=1"
            alt={Item.name}
          />
          <p className="ml-2 mb-1">
            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius
            blandit.
          </p>
        </div>
        <small>{Item.category.name}</small>
      </li>
    )
    if (viewMode === 'card-view') return cardView
    if (viewMode === 'table-view') return tableView
    return listView
  }
}
