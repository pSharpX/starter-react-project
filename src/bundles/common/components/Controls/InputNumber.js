import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const InputNumber = function ({
  className = '',
  buttonClassName = 'btn-info',
  Size = '',
  Default = 0,
  Value,
  ...rest
}) {
  /**
   * Size: input-group-sm, input-group-lg
   */
  let inputRef = null
  Value = Value || Default
  const { onIncrement, onDecrement, onChange } = { ...rest }
  const increment = (event) => {
    if (inputRef) {
      const newValue = parseInt(inputRef.value) + 1
      inputRef.value = newValue
      if (onChange && typeof onChange === 'function') onChange(newValue)
    }
    onIncrement(inputRef.value)
  }
  const decrement = (event) => {
    if (inputRef) {
      const newValue = parseInt(inputRef.value) - 1
      inputRef.value = newValue
      if (onChange && typeof onChange === 'function') onChange(newValue)
    }
    onDecrement(inputRef.value)
  }
  const reset = (event) => {
    if (inputRef) inputRef.value = Value || Default
  }
  const inputHandler = (event) => {
    if (!isNaN(event.target.value)) {
      const newValue = parseInt(event.target.value)
      inputRef.value = newValue
      if (onChange && typeof onChange === 'function') onChange(newValue)
    }
  }
  className = `input-group ${className} ${Size}`.trim()
  return (
    <div className={className}>
      <div className="input-group-prepend">
        <button type="button" className={`btn ${buttonClassName}`} onClick={reset}>
          <FontAwesomeIcon icon="redo" />
        </button>
      </div>
      <input
        type="text"
        className="form-control"
        aria-label="Text input with segmented dropdown button"
        ref={(node) => (inputRef = node)}
        value={Value}
        onChange={inputHandler}
      />
      <div className="input-group-append">
        <button type="button" className={`btn ${buttonClassName}`} onClick={increment}>
          <FontAwesomeIcon icon="plus" />
        </button>
        <button type="button" className={`btn ${buttonClassName}`} onClick={decrement}>
          <FontAwesomeIcon icon="minus" />
        </button>
        {/**
                    <button type="button" className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="sr-only">Toggle Dropdown</span>
                    </button>
                    <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                    <div role="separator" className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Separated link</a>
                </div>
                 */}
      </div>
    </div>
  )
}

export default InputNumber
