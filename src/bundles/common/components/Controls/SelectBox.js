import React from 'react'

const SelectBox = function ({ className = '', options = [], children, ...rest }) {
  className = `custom-select ${className}`.trim()
  return (
    <select className={className} {...rest}>
      {children}
      {options.map((item, index) => (
        <option key={index} value={item.value}>
          {item.text}
        </option>
      ))}
    </select>
  )
}

export default SelectBox
