import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import InputNumber from '../common/components/Controls/InputNumber'

const ConfirmButton = function ({
  className = 'btn-primary',
  Size = '',
  Text = 'Great!',
  Icon = 'thumbs-up',
  ...rest
}) {
  className = `btn ${className} ${Size}`.trim()
  return (
    <button className={className} {...rest}>
      <FontAwesomeIcon icon={Icon} /> {Text}
    </button>
  )
}

const CancelButton = function ({
  className = 'btn-secondary',
  Size = '',
  Text = '',
  Icon = 'thumbs-down',
  ...rest
}) {
  className = `btn ${className} ${Size}`.trim()
  return (
    <button className={className} {...rest}>
      <FontAwesomeIcon icon={Icon} /> {Text}
    </button>
  )
}

export default class AddToCart extends Component {
  constructor (props) {
    super(props)
    this.state = {
      item: {},
      quantity: 0
    }
  }

  componentDidMount () {}

  incrementHandler = (event) => {
    // console.log(event);
  }

  decrementHandler = (event) => {
    // alert("decrement!");
  }

  confirmButtonHandler = (event) => {
    const { confirmButtonHandler } = this.props
    confirmButtonHandler(this.state)
  }

  cancelButtonHandler = (event) => {
    const { cancelButtonHandler } = this.props
    cancelButtonHandler()
  }

  render () {
    const { className, Item, confirmButtonHandler, cancelButtonHandler } = this.props
    const defaultClassName = `container-fluid ${className}`.trim()
    return (
      <div className={defaultClassName}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input id="name" name="name" className="form-control" readOnly value={Item.name} />
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Enter a number:</label>
          <InputNumber
            Value={this.state.quantity}
            onIncrement={this.incrementHandler}
            onDecrement={this.decrementHandler}
            onChange={(quantity) => this.setState({ quantity })}
          />
          {/** onChange={(value) => (this.setState({quantity: value}))} */}
        </div>
        <div className="d-flex justify-content-center">
          <ConfirmButton
            Text="Great!"
            onClick={this.confirmButtonHandler}
            Size="btn-lg"
            className="btn-primary mr-2"
          />
          <CancelButton onClick={this.cancelButtonHandler} Size="btn-lg" />
        </div>
      </div>
    )
  }

  static defaultProps = {
    className: ''
  }
}

const AddToCartFunction = function ({ className = '', Item, ...rest }) {
  className = `container-fluid ${className}`.trim()
  const incrementHandler = () => {
    // alert("increment!");
  }
  const decrementHandler = () => {
    // alert("decrement!");
  }
  return (
    <div className={className} {...rest}>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input id="name" name="name" className="form-control" value={Item.name} />
      </div>
      <div className="form-group">
        <label htmlFor="quantity">Enter a number:</label>
        <InputNumber Value={0} onIncrement={incrementHandler} onDecrement={decrementHandler} />
      </div>
    </div>
  )
}
